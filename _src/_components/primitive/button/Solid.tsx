import { ColorElement } from "@gdcorte/react-core-theme";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { ButtonShapes } from "./interface";
import { buttonShape, SolidButtonStyle } from "./style";

const Button = styled.button<{
  $customColor?: ColorElement;
  $shape?: ButtonShapes;
}>`
  ${SolidButtonStyle};

  ${({ $shape }) => buttonShape($shape)};
`;

export type SolidButtonProps = {
  tag: string;
  children?: ReactNode;
  shape?: ButtonShapes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  customColor?: ColorElement;
} & SolidButtonProps;

export default function SolidButton({
  tag,
  name,
  shape,
  customColor,
  children,
  type,
  ...props
}: Props) {
  return (
    <Button
      type={type ?? "button"}
      name={name ?? tag}
      $customColor={customColor}
      $shape={shape}
      {...props}
    >
      {children}
    </Button>
  );
}
