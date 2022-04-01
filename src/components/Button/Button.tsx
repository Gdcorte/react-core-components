import React, { FunctionComponent, HTMLProps } from "react";
import { ButtonColorInterface, buttonColorMap, ButtonDefaultColor } from "./defaultColors";
import { ButtonStyled } from "./style";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  label: string;
  colors?: ButtonColorInterface,
  variant?: "primary"|"secondary"|"info"|"success"|"warning"|"danger",
  inverse?: boolean,
  edges?: "oval"|"round"|"pill",
  edgeSize?: string,
  fontSize?: string,
}

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  colors,
  variant,
  inverse,
  edges,
  edgeSize,
  fontSize,
  onClick,
  disabled,
  className,
}) => {

  const getColorPallete = () =>{
    if (colors) return colors

    if (!variant) return ButtonDefaultColor

    return buttonColorMap[variant] || ButtonDefaultColor
  }

  return (
    <ButtonStyled
      className={className}
      onClick={onClick}
      disabled={disabled}
      colors={getColorPallete()}
      inverse={inverse}
      edges={edges}
      edgeSize={edgeSize}
      fontSize={fontSize}
    >
      {label}
    </ButtonStyled>
  );
};

export default Button;