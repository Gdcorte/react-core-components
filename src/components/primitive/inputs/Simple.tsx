import { CustomColor, StyledCustomColor } from '@/src/interface';
import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  DisabledColorStyle,
  ErrorColorStyle,
  RequiredColorStyle,
  SingleLineInputCss,
} from './style';
import { convertStatusFlagToClass } from './utils';

const Frame = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 1 1 0;

  height: fit-content;

  gap: 4px;

  &.required {
    ${RequiredColorStyle};
  }
  &.error {
    ${ErrorColorStyle};
  }
  &.disabled {
    ${DisabledColorStyle};
  }
`;

const Input = styled.input<StyledCustomColor>`
  display: flex;
  flex: 1 1 0;

  ${SingleLineInputCss}
`;

export type SimpleInputProps = {
  tag: string;
  onChangeCustom?: (value: string, tag: string) => void | Promise<void>;
  clickMode?: 'focus' | 'select';
  isValid?: boolean;
  isRequired?: boolean;
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

type Props = SimpleInputProps & CustomColor;

export default function SimpleInput({
  tag,
  name,
  onChangeCustom,
  onChange,
  clickMode,
  className,
  isValid,
  isRequired,
  children,
  focusColor,
  customColor,
  ...props
}: Props) {
  async function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(event);
    }

    if (onChangeCustom) {
      await onChangeCustom(event.currentTarget.value, name ?? tag);
    }
  }

  return (
    <Frame className={`simple-input-frame ${className}`}>
      <Input
        className={`simple-input ${convertStatusFlagToClass({ isRequired, isValid, ...props })}  ${className ?? ''}`}
        onChange={handleChange}
        name={name ?? tag}
        $focusColor={focusColor}
        $customColor={customColor}
        {...props}
      />
      {isValid == false && children}
    </Frame>
  );
}
