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
