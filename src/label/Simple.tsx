import { LabelHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type LabelDisplay = "row" | "column";

const Label = styled.label<{ $display: LabelDisplay }>`
  display: flex;
  flex-direction: ${({ $display }) => $display};
  width: 100%;
  gap: 6px;

  ${({ $display }) =>
    $display === "column" ? "align-items: flex-start;" : "align-items: center"}
`;

const Title = styled.span`
  font-size: 0.9rem;
`;
const Content = styled.div<{ $display: LabelDisplay }>`
  display: flex;
  flex-direction: row;

  ${({ $display }) => ($display === "column" ? "width: 100%;" : "flex: 1 1 0;")}
`;

export type SimpleLabelProps = {
  title?: ReactNode;
  display?: LabelDisplay;
} & LabelHTMLAttributes<HTMLLabelElement>;

export default function SimpleLabel({
  display = "column",
  className,
  title,
  children,
  ...props
}: SimpleLabelProps) {
  return (
    <Label
      className={`simple-label ${className ? className : ""}`}
      $display={display}
      {...props}
    >
      <Title className="simple-label-title">{title}</Title>
      <Content $display={display} className="simple-label-content">
        {children}
      </Content>
    </Label>
  );
}
