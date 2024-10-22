import { CustomColor, StyledCustomColor } from '@/src/interface';
import { useState } from 'react';
import styled from 'styled-components';
import SimpleInput, { SimpleInputProps } from '../Simple';
import { BaseInputStyle, FocusedColorStyle } from '../style';
import { convertStatusFlagToClass } from '../utils';
import LockedIcon from './Locked';
import UnlockedIcon from './Unlocked';

const IconBox = styled.div<StyledCustomColor>`
  display: flex;
  cursor: pointer;

  ${BaseInputStyle};

  &.disabled {
    cursor: not-allowed;
  }
`;

const Frame = styled.div<{ iconPos?: 'left' | 'right' } & StyledCustomColor>`
  display: flex;
  flex: 1 1 0;
  flex-direction: ${({ iconPos }) =>
    iconPos === 'left' ? 'row-reverse' : 'row'};

  input {
    ${({ iconPos }) =>
      iconPos === 'left'
        ? 'border-radius: 0px 5px 5px 0px ;'
        : 'border-radius: 5px 0px 0px 5px;'};
  }

  ${IconBox} {
    ${({ iconPos }) =>
      iconPos === 'left'
        ? `border-radius: 5px 0px 0px 5px;
        border-right: none;
        `
        : `border-radius: 0px 5px 5px 0px;
        border-left: none;`};
  }

  &:focus-within {
    ${IconBox} {
      ${FocusedColorStyle};
    }
  }
`;

export type PasswordInputProps = {
  iconPos?: 'left' | 'right';
} & Omit<SimpleInputProps, 'type'>;

type Props = PasswordInputProps & CustomColor;

export default function PasswordInput({
  iconPos,
  disabled,
  customColor,
  focusColor,
  ...props
}: Props) {
  const [type, setType] = useState<'password' | 'text'>('password');

  function handleTypeChange() {
    if (disabled === true) return;

    setType(type === 'password' ? 'text' : 'password');
  }

  return (
    <Frame
      className="password-input-frame"
      iconPos={iconPos}
      $customColor={customColor}
      $focusColor={focusColor}
    >
      <SimpleInput
        disabled={disabled}
        customColor={customColor}
        focusColor={focusColor}
        type={type}
        {...props}
      />
      <IconBox
        className={`password-input-icon-box ${convertStatusFlagToClass({ disabled, ...props })}`}
        onClick={handleTypeChange}
        $customColor={customColor}
        $focusColor={focusColor}
      >
        {type === 'password' ? <LockedIcon /> : <UnlockedIcon />}
      </IconBox>
    </Frame>
  );
}
