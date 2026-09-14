export type ApiErrorData = {
  msg: string;
  err: {
    code: string;
    status: string;
    group: string;
  };
};

export class HttpApiError extends Error {
  public readonly data: ApiErrorData;
  public readonly url: string;
  public readonly payload: any;

  constructor(response: Response, body: ApiErrorData) {
    super(
      `HTTP Error ${response.status}: ${response.statusText} at ${response.url}`,
    );
    Object.setPrototypeOf(this, HttpApiError.prototype);

    this.data = body;
    this.url = response.url;

    this.name = 'HttpApiError';
  }
}

type Options = {
  statuses: number[];
};

// With overloads!!
export async function processRequest<T>(
  response: Response,
  parser: (obj: any) => Promise<T>,
  options?: Options,
): Promise<T | HttpApiError>;

export async function processRequest(
  response: Response,
  parser: undefined,
  options?: Options,
): Promise<undefined | HttpApiError>;

export async function processRequest<T>(
  response: Response,
  parser?: (obj: JSON) => Promise<T>,
  options?: Options,
): Promise<T | undefined | HttpApiError> {
  try {
    if (options == undefined) {
      // if no statuses are provided (no options),
      // just check for any non 2xx or 3xx statuses
      if (response.status >= 400) {
        const respBody = (await response.json()) as ApiErrorData;
        throw new HttpApiError(response, respBody);
      }
    } else {
      if (!options.statuses.includes(response.status)) {
        const respBody = (await response.json()) as ApiErrorData;
        throw new HttpApiError(response, respBody);
      }
    }

    if (parser == undefined) return;
    const body = await response.json();
    return await parser(body);
  } catch (error: unknown) {
    if (error instanceof HttpApiError) {
      return error;
    }

    console.error('unknown error processing request', error);
    throw error;
  }
}
