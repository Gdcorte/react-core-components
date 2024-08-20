import { ColorElement } from "@gdcorte/react-core-theme";
import { ReactNode } from "react";
import styled from "styled-components";
import RadioMark from "./Radiomark";

const Frame = styled.label`
  display: flex;
  align-items: center;

  gap: 4px;

  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.disabled.color};
  }
`;

const Label = styled.div``;

export type RadioButtonProps = {
  tag: string;
  label: ReactNode;
  selectedValue?: string;
  onClick?: (newValue: string) => void | Promise<void>;
  customColor?: ColorElement;
  disabled?: boolean;
};

type Props = {} & RadioButtonProps;

export default function RadioButton({
  tag,
  selectedValue,
  onClick,
  label,
  customColor,
  disabled,
}: Props) {
  const classes = `${disabled ? "disabled" : ""}`;

  async function handleClick() {
    if (disabled) return;

    if (onClick) {
      await onClick(tag);
    }
  }

  return (
    <Frame className={`radio-button-frame ${classes}`}>
      <RadioMark
        customColor={customColor}
        checked={selectedValue == tag}
        onClick={handleClick}
        className={classes}
      />

      <Label>{label}</Label>
    </Frame>
  );
}
