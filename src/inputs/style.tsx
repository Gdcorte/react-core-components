import { css } from "styled-components";

export const InputFormatCss = css`
  display: flex;
  flex: 1 1 0;

  padding: 4px;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.background.contrast};

  background-color: transparent;
  color: ${({ theme }) => theme.background.contrast})};
`;
