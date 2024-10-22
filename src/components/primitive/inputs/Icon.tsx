import { CustomColor, StyledCustomColor } from '@/src/interface';
import { ReactNode } from 'react';
import styled from 'styled-components';
import Input, { type SimpleInputProps } from './Simple';
import {
  BaseInputColorStyle,
  DisabledColorStyle,
  ErrorColorStyle,
  FocusedColorStyle,
  RequiredColorStyle,
} from './style';
import { convertStatusFlagToClass } from './utils';

const IconBox = styled.div`
  display: flex;
  max-height: 2rem;
  width: 2rem;

  svg {
    width: unset;
    height: unset;
  }
`;

const IconFrame = styled.div<StyledCustomColor>`
  display: flex;
  align-items: flex-end;

  height: inherit;
  width: 32px;

  ${BaseInputColorStyle};

  &.required {
    ${RequiredColorStyle};
  }

  &.error {
    ${ErrorColorStyle};
  }

  &.disabled {
    ${DisabledColorStyle};
    background: transparent;
  }
`;

const Title = styled.p`
  margin: 0px;
`;

const InputFrame = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;

  gap: 2px;
  height: inherit;

  .simple-input-frame {
    justify-content: center;
  }
`;

const Frame = styled.div<StyledCustomColor>`
  display: flex;
  flex: 1 1 0;

  &:focus-within {
    ${IconFrame} {
      ${FocusedColorStyle}
    }
  }

  gap: 4px;
`;

export type IconInputProps = {
  icon: ReactNode;
  label?: string;
} & SimpleInputProps;

type Props = IconInputProps & CustomColor;

export default function IconInput({ icon, label, ...props }: Props) {
  const flagClass = convertStatusFlagToClass(props);
  return (
    <Frame
      $customColor={props.customColor}
      $focusColor={props.focusColor}
      className={`icon-input-frame`}
    >
      <IconFrame
        $customColor={props.customColor}
        $focusColor={props.focusColor}
        className={`icon-input-icon-box ${flagClass}`}
      >
        <IconBox>{icon}</IconBox>
      </IconFrame>

      <InputFrame className={`icon-input-input-label-box ${flagClass}`}>
        {label && <Title>{label}</Title>}
        <Input {...props} />
      </InputFrame>
    </Frame>
  );
}
