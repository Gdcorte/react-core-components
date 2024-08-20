import { ColorElement } from "@gdcorte/react-core-theme";
import { css } from "styled-components";

const DisabledCss = css`
  cursor: not-allowed;
  color: ${({ theme }) => theme.disabled.color};
  stroke: ${({ theme }) => theme.disabled.color};
  fill: ${({ theme }) => theme.disabled.color};

  background: ${({ theme }) => theme.disabled.contrast};
  border-color: ${({ theme }) => theme.disabled.contrast};
`;

export const SolidButton = css<{ $customColor?: ColorElement }>`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.3s ease;

  color: inherit;
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
