import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { CustomColor } from "../interface";
import {
  DisabledColorStyle,
  ErrorColorStyle,
  RequiredColorStyle,
  SingleLineInputCss,
} from "./style";
import { convertStatusFlagToClass } from "./utils";

const Frame = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 1 1 0;

  height: fit-content;

  gap: 4px;

  ${DisabledColorStyle};
  ${RequiredColorStyle};
  ${ErrorColorStyle};
`;

const Input = styled.input<CustomColor>`
  ${SingleLineInputCss}
`;

export type SimpleInputProps = {
  tag: string;
  onChangeCustom?: (value: string, tag: string) => void | Promise<void>;
  clickMode?: "focus" | "select";
  isValid?: boolean;
  isRequired?: boolean;
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

type Props = SimpleInputProps & CustomColor;

export default function SimpleInput({
  tag,
  onChangeCustom,
  onChange,
  clickMode,
  className,
  isValid,
  isRequired,
  children,
  ...props
}: Props) {
  async function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(event);
    }

    if (onChangeCustom) {
      await onChangeCustom(event.currentTarget.value, tag);
    }
  }

  return (
    <Frame className="simple-input-frame">
      <Input
        className={`simple-input ${convertStatusFlagToClass({ isRequired, isValid, ...props })}  ${className ?? ""}`}
        onChange={handleChange}
        {...props}
      />
      {isValid == false && children}
    </Frame>
  );
}
