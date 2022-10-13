import { FunctionComponent, HTMLProps } from "react";
import { ButtonColorInterface, ButtonDefaultColor } from "./defaultColors";
import { ButtonStyled } from "./style";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  colors?: ButtonColorInterface,
  inverse?: boolean,
  shape?: "oval"|"round"|"pill"|"rectangle",
  radius?: string,
  fontSize?: string,
  disableFocus?: boolean,
  children: JSX.Element | JSX.Element[]
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
}) => {

  const getColorPallete = () =>{
    if (colors) return colors

    return ButtonDefaultColor
  }

  return (
    <ButtonStyled
      className={className}
      onClick={onClick}
      disabled={disabled}
      colors={getColorPallete()}
      inverse={inverse}
      shape={shape}
      radius={radius}
      fontSize={fontSize}
      disableFocus={disableFocus}
    >
      {children}
    </ButtonStyled>
  );
};

export default BaseButton;