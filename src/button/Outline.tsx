import { ColorElement } from "@gdcorte/react-core-theme";
import styled from "styled-components";
import { ButtonShapes } from "./interface";
import { SolidButtonProps } from "./Solid";
import { buttonShape, OutlineButtonStyle } from "./style";

const Button = styled.button<{
  $customColor?: ColorElement;
  $shape?: ButtonShapes;
}>`
  ${OutlineButtonStyle};

  ${({ $shape }) => buttonShape($shape)};
`;

export type OutlineButtonProps = SolidButtonProps;

type Props = {
  customColor?: ColorElement;
} & OutlineButtonProps;

export default function OutlineButton({
  tag,
  name,
  shape,
  customColor,
  children,
  ...props
}: Props) {
  return (
    <Button
      name={name ?? tag}
      $customColor={customColor}
      $shape={shape}
      {...props}
    >
      {children}
    </Button>
  );
}
