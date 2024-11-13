import { ReactNode } from 'react';
import styled from 'styled-components';

export type SwitchOptions = {
  value: string;
  display: ReactNode;
};

const Container = styled.label`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  width: max-content;

  gap: 8px;
`;

const DisplayBox = styled.div`
  display: flex;
`;

const SliderBox = styled.div`
  display: flex;

  height: 20px;
  min-width: 40px;

  padding: 2px;
  border-radius: 34px;

  &.right {
    background: ${({ theme }) => theme.colors.primary.color};
    justify-content: flex-start;
  }

  &.left {
    justify-content: flex-end;
    background: ${({ theme }) => theme.colors.secondary.color};
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
  left: SwitchOptions;
  right: SwitchOptions;
  selected?: string;
  onChange?: (newValue: string, tag: string) => void;
};

export default function SimpleToggleSwitch({
  left,
  right,
  selected,
  tag,
  onChange,
}: Props) {
  function handleSlidingChange() {
    const newValue = selected === left.value ? right.value : left.value;

    if (onChange !== undefined) onChange(newValue, tag);
  }
  return (
    <Container onClick={handleSlidingChange}>
      <DisplayBox className="left">{left.display}</DisplayBox>

      <SliderBox className={selected === right.value ? 'right' : 'left'}>
        <SliderBall className="ball" />
      </SliderBox>

      <DisplayBox className="right">{right.display}</DisplayBox>
    </Container>
  );
}
