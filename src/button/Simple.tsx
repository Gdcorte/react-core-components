import { ColorElement } from "@gdcorte/react-core-theme";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { SolidButton } from "./style";

const Button = styled.button<{ $customColor?: ColorElement }>`
  ${SolidButton}
`;

export type SimpleButtonProps = {
  tag: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  $customColor?: ColorElement;
} & SimpleButtonProps;

export default function SimpleButton({ children, ...props }: Props) {
  return <Button {...props}>{children}</Button>;
}
