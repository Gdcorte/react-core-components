import { FunctionComponent, HTMLProps } from "react";
import { ButtonColorInterface, ButtonDefaultColor } from "./defaultColors";
import { ButtonStyled } from "./style";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  colors?: ButtonColorInterface;
  inverse?: boolean;
  shape?: "oval" | "round" | "pill" | "rectangle";
  radius?: string;
  fontSize?: string;
  disableFocus?: boolean;
  children: JSX.Element | JSX.Element[];
}

export const BaseButton: FunctionComponent<ButtonProps> = ({
  colors,
  inverse,
  shape,
  radius,
  fontSize,
  disableFocus,
  onClick,
  disabled,
  className,
  children,
  name,
  selected,
}) => {
  const getColorPallete = () => {
    if (colors) return colors;

    return ButtonDefaultColor;
  };

  return (
    <ButtonStyled
      className={`${className ?? ""} ${selected ? "selected" : ""}`}
      onClick={onClick}
      disabled={disabled}
      colors={getColorPallete()}
      inverse={inverse}
      shape={shape}
      radius={radius}
      fontSize={fontSize}
      disableFocus={disableFocus}
      name={name}
    >
      {children}
    </ButtonStyled>
  );
};

export default BaseButton;
