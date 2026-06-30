import styled from "styled-components";

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

  width: 16px;
  height: 16px;

  svg {
    width: 12px;
    height: 12px;
    stroke-width: 18px;
  }
`;

export const OverflowControls = styled.div`
  display: flex;

  height: 16px;
  padding-right: 4px;
  padding-top: 4px;

  justify-content: center;
`;
