import { StyledCustomColor } from '@/src/interface';
import { css } from 'styled-components';

export const ErrorColorStyle = css`
  stroke: ${({ theme }) => theme.alerts.danger.color};
  fill: ${({ theme }) => theme.alerts.danger.color};
  border-color: ${({ theme }) => theme.alerts.danger.color};
`;

export const RequiredColorStyle = css`
    stroke: ${({ theme }) => theme.alerts.warning.color};
    fill: ${({ theme }) => theme.alerts.warning.color};
    border-color: ${({ theme }) => theme.alerts.warning.color};
  }
`;

export const DisabledColorStyle = css`
  stroke: ${({ theme }) => theme.disabled.color};
  fill: ${({ theme }) => theme.disabled.color};
  border-color: ${({ theme }) => theme.disabled.color};

  background: ${({ theme }) => theme.disabled.tone};
`;

export const FocusedColorStyle = css<StyledCustomColor>`
  stroke: ${({ theme, $focusColor }) =>
    $focusColor ? $focusColor : theme.background.tone};
  fill: ${({ theme, $focusColor }) =>
    $focusColor ? $focusColor : theme.background.tone};

  border-color: ${({ theme, $focusColor }) =>
    $focusColor ? $focusColor : theme.background.tone};
`;

export const BaseInputColorStyle = css<StyledCustomColor>`
  stroke: ${({ theme, $customColor }) =>
    $customColor ?? theme.background.contrast};
  fill: ${({ theme, $customColor }) =>
    $customColor ?? theme.background.contrast};

  border-color: ${({ theme, $customColor }) =>
    $customColor ?? theme.background.contrast};
`;

export const BaseInputStyle = css<StyledCustomColor>`
  display: flex;

  padding: 4px;
  outline: none;

  border: 1px solid transparent;
  border-radius: 5px;
  ${BaseInputColorStyle};

  color: inherit;
  background: transparent;

  font-size: 1rem;
  height: 1rem; // This will be important for some components

  &:focus {
    ${FocusedColorStyle}
  }

  &.required {
    ${RequiredColorStyle};
  }

  &.error {
    ${ErrorColorStyle};
  }

  &:disabled,
  &.disabled {
    ${DisabledColorStyle};
  }
`;

export const SingleLineInputCss = css<StyledCustomColor>`
  ${BaseInputStyle};
`;
