import { ReactNode } from "react";
import styled from "styled-components";
import { TimelineOrientation, TimelinePlacement } from "../../../interface";
import { ContentIconClose, ContentIconOpen } from "../Icon";
import { Button, FrameStyle, OverflowControls } from "../styles";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;

  overflow: auto;
`;

const Frame = styled.div<{
  $orientation: TimelineOrientation;
  $placement: TimelinePlacement;
  $customColor?: string;
}>`
  ${FrameStyle}

  position: absolute;
  left: -1px;
  ${({ $placement }) =>
    $placement === "bottom" ? "bottom: -1px;" : "top: -1px;"}

  display: flex;

  ${({ $placement }) =>
    $placement === "bottom"
      ? "flex-direction: column;"
      : "flex-direction: column-reverse;"}

  width: calc(100% - 16px);
  height: 200px;

  background: inherit;

  z-index: 1;
`;

type Props = {
  orientation: TimelineOrientation;
  placement: TimelinePlacement;
  children?: ReactNode;
  customColor?: string;
  onClick: () => void;
};

export default function Overframe({
  orientation,
  placement,
  customColor,
  onClick,
  children,
}: Props) {
  return (
    <Frame
      className="timeline-event-overflow"
      $placement={placement}
      $orientation={orientation}
      $customColor={customColor}
    >
      <Content className="timeline-event-overflow-content">{children}</Content>
      <OverflowControls className="timeline-event-overflow-controls">
        <Button onClick={onClick} $customColor={customColor}>
          {placement === "bottom" ? <ContentIconOpen /> : <ContentIconClose />}
        </Button>
      </OverflowControls>
    </Frame>
  );
}
