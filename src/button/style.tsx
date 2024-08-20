import { ColorElement } from "@gdcorte/react-core-theme";
import { css } from "styled-components";
import { ButtonShapes } from "./interface";

export function buttonShape(shape?: ButtonShapes): string {
  switch (shape) {
    case "pill":
      return "border-radius: 300px;";

    case "oval":
      return `
        border-radius: 50%;
        `;

    case "square":
    default:
      return "border-radius: 5px;";
  }
}

export const DisabledCss = css`
  cursor: not-allowed;
  color: ${({ theme }) => theme.disabled.color};
  stroke: ${({ theme }) => theme.disabled.color};
  fill: ${({ theme }) => theme.disabled.color};

  background: ${({ theme }) => theme.disabled.contrast};
  border-color: ${({ theme }) => theme.disabled.contrast};
`;

export const BaseButtonStyle = css`
  padding: 8px 12px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.3s ease;

  color: inherit;
`;

export const SolidButtonStyle = css<{ $customColor?: ColorElement }>`
  ${BaseButtonStyle};

  background: ${({ theme, $customColor }) =>
    $customColor ? $customColor.color : theme.background.color};

  &:hover {
    background: ${({ theme, $customColor }) =>
      $customColor ? $customColor.tone : theme.background.tone};
  }

  &:active {
    background: ${({ theme, $customColor }) =>
      $customColor ? $customColor.shade : theme.background.shade};
  }

  &:focus {
    background: ${({ theme, $customColor }) =>
      $customColor ? $customColor.tint : theme.background.tint};
  }

  &:disabled {
    ${DisabledCss}
  }
`;

export const OutlineButtonStyle = css<{ $customColor?: ColorElement }>`
  ${BaseButtonStyle};
  background: transparent;

  color: ${({ theme, $customColor }) =>
    $customColor ? $customColor.color : theme.background.contrast};
  border-color: ${({ theme, $customColor }) =>
    $customColor ? $customColor.color : theme.background.contrast};

  &:hover {
    color: ${({ theme, $customColor }) =>
      $customColor ? $customColor.tone : theme.background.tone};
    border-color: ${({ theme, $customColor }) =>
      $customColor ? $customColor.tone : theme.background.tone};
  }

  &:active {
    color: ${({ theme, $customColor }) =>
      $customColor ? $customColor.shade : theme.background.shade};
    border-color: ${({ theme, $customColor }) =>
      $customColor ? $customColor.shade : theme.background.shade};
  }

  &:focus {
    color: ${({ theme, $customColor }) =>
      $customColor ? $customColor.tint : theme.background.tint};
    border-color: ${({ theme, $customColor }) =>
      $customColor ? $customColor.tint : theme.background.tint};
  }

  &:disabled {
    ${DisabledCss};
    background: transparent;
  }
`;
