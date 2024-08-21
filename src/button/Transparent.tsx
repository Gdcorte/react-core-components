import { ColorElement } from "@gdcorte/react-core-theme";
import styled from "styled-components";
import { ButtonShapes } from "./interface";
import { SolidButtonProps } from "./Solid";
import { BaseButtonStyle, DisabledCss } from "./style";

const Button = styled.button<{
  $customColor?: ColorElement;
  $shape?: ButtonShapes;
}>`
  ${BaseButtonStyle};
  background: transparent;
  border: none;
  color: ${({ theme, $customColor }) =>
    $customColor ? $customColor.color : theme.background.contrast};

  &:disabled {
    ${DisabledCss};
    background: transparent;
    border: none;
  }
`;

export type TransparentButtonProps = Omit<SolidButtonProps, "shape">;

type Props = {
  customColor?: ColorElement;
} & TransparentButtonProps;

export default function TransparentButton({
  tag,
  name,
  type,
  customColor,
  children,
  ...props
}: Props) {
  return (
    <Button
      type={type ?? "button"}
      name={name ?? tag}
      $customColor={customColor}
      {...props}
    >
      {children}
    </Button>
  );
}
