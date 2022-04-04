interface BaseAlertElementInterface {
    main: string,
    alternate?: string,
    contrast: string,
}

export interface AlertInterface {
    danger: BaseAlertElementInterface,
    success: BaseAlertElementInterface,
    warning: BaseAlertElementInterface,
    info: BaseAlertElementInterface,
}

