import { css } from "styled-components";
import { CustomColor } from "../interface";

export const ErrorColorStyle = css`
  &.error {
    stroke: ${({ theme }) => theme.alerts.danger.color};
    fill: ${({ theme }) => theme.alerts.danger.color};
    border-color: ${({ theme }) => theme.alerts.danger.color};
  }
`;

export const RequiredColorStyle = css`
  &.required {
    stroke: ${({ theme }) => theme.alerts.warning.color};
    fill: ${({ theme }) => theme.alerts.warning.color};
    border-color: ${({ theme }) => theme.alerts.warning.color};
  }
`;

export const DisabledColorStyle = css`
  &:disabled,
  &.disabled {
    stroke: ${({ theme }) => theme.disabled.color};
    fill: ${({ theme }) => theme.disabled.color};
    border-color: ${({ theme }) => theme.disabled.color};

    background: ${({ theme }) => theme.disabled.tone};
  }
`;

export const BaseInputColorStyle = css<CustomColor>`
  border: 1px solid
    ${({ theme, customColor }) => customColor ?? theme.background.contrast};
`;

export const BaseInputStyle = css<CustomColor>`
  display: flex;

  padding: 4px;
  outline: none;

  border-radius: 5px;
  ${BaseInputColorStyle};

  background: transparent;

  font-size: 1rem;
  height: 1rem; // This will be important for some components

  &:focus {
    border-color: ${({ theme, focusColor }) =>
      focusColor ?? theme.background.tone};
  }

  ${RequiredColorStyle};

  ${ErrorColorStyle};

  ${DisabledColorStyle};
`;

export const SingleLineInputCss = css<CustomColor>`
  ${BaseInputStyle};
`;
