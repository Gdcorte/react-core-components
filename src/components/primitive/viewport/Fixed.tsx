import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  transform: translateZ(0);
  background: inherit;
`;

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function FixedViewport({
  children,
  className,
  ...props
}: Props) {
  // Reference: https://stackoverflow.com/a/38796408

  return (
    <Frame {...props} className={`viewport ${className ? className : ""}`}>
      {children}
    </Frame>
  );
}
