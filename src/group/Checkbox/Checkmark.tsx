import { ColorElement } from "@gdcorte/react-core-theme";
import styled, { css } from "styled-components";

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 0px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: none;
  stroke-width: 6px;
  position: absolute;
`;

const CheckedStyle = css<{ customColor?: ColorElement }>`
  background: ${({ theme, customColor }) =>
    customColor ? customColor.color : theme.background.contrast};
  border: 2px solid
    ${({ theme, customColor }) =>
      customColor ? customColor.tint : theme.background.tint};

  ${Icon} {
    visibility: visible;
    stroke: ${({ theme, customColor }) =>
      customColor ? customColor.shade : theme.background.shade};
  }
`;

const UncheckedStyle = css`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.background.contrast};
`;

export const StyledCheckbox = styled.div<{
  checked: boolean;
  customColor?: ColorElement;
}>`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 3px;

  transition: all 150ms;
  position: relative;

  ${({ checked }) => (checked ? CheckedStyle : UncheckedStyle)};

  &.disabled {
    border-color: ${({ theme }) => theme.disabled.color};
    background: ${({ theme }) => theme.disabled.contrast};

    ${Icon} {
      stroke: ${({ theme }) => theme.disabled.tint};
    }
  }
`;

type Props = {
  checked: boolean;
  onClick: () => void;
  customColor?: ColorElement;
  className?: string;
};

export default function Checkmark({
  checked,
  customColor,
  className,
  onClick,
}: Props) {
  return (
    <Frame className={`checkbox-input-box ${className}`}>
      <HiddenCheckbox checked={checked} onChange={onClick} type={"checkbox"} />
      <StyledCheckbox
        className={`checkbox-input-icon-box ${className}`}
        customColor={customColor}
        checked={checked}
      >
        <Icon className="checkbox-input-box-icon" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </Frame>
  );
}
