import { ColorElement } from "@gdcorte/react-core-theme";
import { ReactNode } from "react";
import styled from "styled-components";
import Checkmark from "./Checkmark";

const Frame = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  gap: 4px;

  &.disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.disabled.color};
  }
`;

const Label = styled.div``;

export type CheckboxProps = {
  tag: string;
  label: ReactNode;
  checked?: boolean;
  onClick?: (newValue: boolean, tag: string) => void | Promise<void>;
  disabled?: boolean;
};

type Props = {
  customColor?: ColorElement;
} & CheckboxProps;

export default function CheckboxInput({
  tag,
  label,
  onClick,
  checked,
  disabled,
}: Props) {
  const classes = `${disabled ? "disabled" : ""}`;

  async function handleClick() {
    if (disabled) return;

    if (onClick) {
      const newState = !checked;

      await onClick(newState, tag);
    }
  }

  return (
    <Frame className={`checkbox-input-frame ${classes}`}>
      <Checkmark
        className={classes}
        checked={checked ?? false}
        onClick={handleClick}
      />

      <Label className="checkbox-input-label">{label}</Label>
    </Frame>
  );
}
