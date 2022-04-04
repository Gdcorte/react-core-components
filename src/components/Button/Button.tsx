import React, { FunctionComponent, HTMLProps } from "react";
import { ButtonColorInterface, buttonColorMap, ButtonDefaultColor } from "./defaultColors";
import { ButtonStyled } from "./style";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  colors?: ButtonColorInterface,
  variant?: "primary"|"secondary"|"info"|"success"|"warning"|"danger",
  inverse?: boolean,
  edges?: "oval"|"round"|"pill",
  edgeSize?: string,
  fontSize?: string,
}

export const Button: FunctionComponent<ButtonProps> = ({
  colors,
  variant,
  inverse,
  edges,
  edgeSize,
  fontSize,
  onClick,
  disabled,
  className,
  children,
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
      {children}
    </ButtonStyled>
  );
};

export default Button;