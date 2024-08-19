import { ChangeEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { InputFormatCss } from "./style";

const Input = styled.input`
  ${InputFormatCss}
`;

type Props = {
  tag: string;
  onChangeCustom?: (value: string, tag: string) => void | Promise<void>;
  clickMode?: "focus" | "select";
} & InputHTMLAttributes<HTMLInputElement>;

export default function SimpleInput({
  tag,
  onChangeCustom,
  onChange,
  clickMode,
  className,
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
    <Input
      className={`simple-input ${className}`}
      onChange={handleChange}
      {...props}
    />
  );
}
