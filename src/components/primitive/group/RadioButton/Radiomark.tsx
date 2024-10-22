import { ColorElement } from "@gdcorte/react-core-theme";
import styled, { css } from "styled-components";

export const Frame = styled.div`
  display: flex;
`;

export const Icon = styled.svg`
  fill: ${({ theme }) => theme.background.shade};
  stroke: ${({ theme }) => theme.background.shade};
  stroke-width: 5px;
  position: absolute;
`;

// Hide Radio visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenRadio = styled.input`
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

const SelectedRadio = css<{ $customColor?: ColorElement }>`
  background: ${({ theme, $customColor }) =>
    $customColor ? $customColor.tint : theme.background.tint};

  border: 2px solid
    ${({ theme, $customColor }) =>
      $customColor ? $customColor.color : theme.background.contrast};

  ${Icon} {
    visibility: visible;
  }
`;

const NeutralRadio = css`
  background: transparent;

  border: 2px solid ${({ theme }) => theme.background.contrast};

  ${Icon} {
    visibility: hidden;
  }
`;

export const StyledRadio = styled.div<{
  checked: boolean;
  $customColor?: ColorElement;
}>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  transition: all 150ms;
  position: relative;

  ${({ checked }) => (checked ? SelectedRadio : NeutralRadio)};

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
  onClick: () => Promise<void>;
  customColor?: ColorElement;
  className?: string;
};

export default function RadioMark({
  checked,
  onClick,
  customColor,
  className,
}: Props) {
  return (
    <Frame>
      <HiddenRadio checked={checked} onChange={onClick} type={"radio"} />
      <StyledRadio
        $customColor={customColor}
        className={`${className}`}
        checked={checked}
      >
        <Icon viewBox={`0 0 20 20`}>
          <circle cx={`${20 / 2}`} cy={`${20 / 2}`} r={`${20 / 15}`} />
        </Icon>
      </StyledRadio>
    </Frame>
  );
}
