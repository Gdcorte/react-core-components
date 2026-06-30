import { ReactNode } from 'react';
import styled from 'styled-components';

export type SwitchOption = {
  value: string;
  display: ReactNode;
};

type ColorProp = {
  left: string;
  right: string;
};

const Container = styled.label`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  align-items: center;
  width: max-content;

  gap: 8px;
`;

const DisplayBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
  }
`;

const SliderBox = styled.div<{ $colors?: ColorProp }>`
  display: flex;

  height: 20px;
  min-width: 40px;

  padding: 2px;
  border-radius: 34px;

  &.right {
    justify-content: flex-end;

    // background: ${({ theme }) => theme.background.tone};
    ${({ $colors }) => $colors && `background: ${$colors.right}`};
  }

  &.left {
    justify-content: flex-start;
    // background: ${({ theme }) => theme.background.tint};
    ${({ $colors }) => $colors && `background: ${$colors.left}`};
  }
`;

const SliderBall = styled.span`
  display: flex;
  border-radius: 50%;
  height: 100%;
  width: 20px;

  background: ${({ theme }) => theme.background.color};
`;

type Props = {
  tag: string;
  left: SwitchOption;
  right: SwitchOption;
  colors?: ColorProp;
  selected?: string;
  onChange?: (newValue: string, tag: string) => void;
};

export default function SimpleToggleSwitch({
  left,
  right,
  selected,
  tag,
  colors,
  onChange,
}: Props) {
  function handleSlidingChange() {
    const newValue = selected === left.value ? right.value : left.value;

    if (onChange !== undefined) onChange(newValue, tag);
  }
  return (
    <Container onClick={handleSlidingChange}>
      <DisplayBox className="left">{left.display}</DisplayBox>

      <SliderBox
        $colors={colors}
        className={selected === right.value ? 'right' : 'left'}
      >
        <SliderBall className="ball" />
      </SliderBox>

      <DisplayBox className="right">{right.display}</DisplayBox>
    </Container>
  );
}
