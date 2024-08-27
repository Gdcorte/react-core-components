import styled, { css } from "styled-components";
import { TimelineOrientation } from "../../interface";

export const FrameStyle = css<{
  $customColor?: string;
  $orientation: TimelineOrientation;
}>`
  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? `
          left: -40%;
          width: 200px;
          `
      : `
          top: -30%;
          width: 45%;
          min-width: 100px;
          flex: 1 1 0;
      `};

  height: 100px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid
    ${({ theme, $customColor }) =>
      $customColor ? $customColor : theme.background.contrast};
`;

export const Button = styled.button<{
  $customColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  padding: 2px;
  outline: none;
  background: inherit;

  border-radius: 50%;
  border-style: solid;

  border-color: ${({ theme, $customColor }) =>
    $customColor ? $customColor : theme.background.contrast};
  fill: ${({ theme, $customColor }) =>
    $customColor ? $customColor : theme.background.contrast};
  stroke: ${({ theme, $customColor }) =>
    $customColor ? $customColor : theme.background.contrast};

  width: 20px;
  height: 20px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const OverflowControls = styled.div`
  display: flex;

  height: 20px;
  padding-right: 4px;

  justify-content: flex-end;
`;
