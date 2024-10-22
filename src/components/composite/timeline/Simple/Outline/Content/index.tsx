import { ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { TimelineOrientation, TimelinePlacement } from "../../interface";
import SmartIcon, { IconAction } from "./Icon";
import { Button, OverflowControls } from "./styles";

const CONTENT_PADDING = 8;
const CONTENT_BORDER = 1;
const OUTER_HEIGHT = 180;
const HORIZONTAL_WIDTH = 250;

const OuterFrameStyle = css<{ $orientation: TimelineOrientation }>`
  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? `
          left: -40%;
          width: ${HORIZONTAL_WIDTH}px;
          `
      : `
          align-items: center;
          top: -30%;
          width: 45%;
          min-width: 100px;
          flex: 1 1 0;
      `};

  height: ${OUTER_HEIGHT}px;
`;

const InnerFrameStyle = css<{
  $customColor?: string;
}>`
  padding: ${CONTENT_PADDING}px;
  border-radius: 5px;
  border: ${CONTENT_BORDER}px solid
    ${({ theme, $customColor }) =>
      $customColor ? $customColor : theme.background.contrast};
`;

const Collapsed = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  overflow: hidden;
  z-index: 1;
`;

const Container = styled.div<{
  $orientation: TimelineOrientation;
  $placement: TimelinePlacement;
  $customColor?: string;
}>`
  display: flex;

  position: absolute;
  left: 0;
  ${({ $placement }) => ($placement === "bottom" ? "top: 0;" : "bottom: 0;")}

  ${({ $placement }) =>
    $placement === "bottom"
      ? "flex-direction: column-reverse;"
      : "flex-direction: column;"}

  background: inherit;

  ${InnerFrameStyle}

  width: calc(100% - 16px - 2px);
  height: fit-content;

  &.with-overflow {
    ${({ $placement }) =>
      $placement === "bottom"
        ? `
          top: unset; 
          bottom: 0;
        `
        : `
        bottom: unset;
        top: 0;
      `}

    .timeline-event-content-box-text {
      max-height: calc(
        ${OUTER_HEIGHT}px - 20px - ${2 * CONTENT_PADDING}px -
          ${2 * CONTENT_BORDER}px
      );
    }
  }

  &.expand {
    height: fit-content;
    ${({ $placement }) =>
      $placement === "bottom"
        ? `
          top: unset; 
          bottom: 0;
        `
        : `
        bottom: unset;
        top: 0;
      `}

    .timeline-event-content-box-text {
      height: auto;
      overflow: auto;
      max-height: calc(
        ${2 * OUTER_HEIGHT}px - 20px - ${2 * CONTENT_PADDING}px -
          ${2 * CONTENT_BORDER}px
      );
    }
  }
`;

const Frame = styled.div<{
  $orientation: TimelineOrientation;
  $placement: TimelinePlacement;
}>`
  display: flex;
  position: relative;
  background: inherit;

  ${({ $placement }) => ($placement === "top" ? "align-items: flex-end;" : "")}

  ${OuterFrameStyle}

  &.invisible {
    visibility: hidden;
    border: 1px solid transparent;
    z-index: -1;
  }
`;

type Props = {
  childHeight?: number;
  hideContent?: boolean;
  isInvisible?: boolean;
  placement?: TimelinePlacement;
  orientation?: TimelineOrientation;
  className?: string;
  children?: ReactNode;
  customColor?: string;
};

export default function Content({
  children,
  customColor,
  className,
  hideContent = false,
  isInvisible = false,
  childHeight = 0,
  placement = "top",
  orientation = "horizontal",
  ...props
}: Props) {
  const [boxType, setBoxType] = useState<"with-overflow" | "no-overflow">(
    "with-overflow"
  );
  const [showExpandedCtx, setShowExpandedCtx] =
    useState<IconAction>("collapse");

  useEffect(() => {
    const maxHeight = OUTER_HEIGHT - 2 * (CONTENT_BORDER + CONTENT_PADDING);
    if (childHeight > maxHeight) {
      setBoxType("with-overflow");
    } else {
      setBoxType("no-overflow");
    }
  }, [childHeight]);

  function toggleIcon() {
    setShowExpandedCtx(showExpandedCtx === "expand" ? "collapse" : "expand");
  }

  return (
    <Frame
      $orientation={orientation}
      $placement={placement}
      className={`
      timeline-event-content
      ${className ? className : ""}
      ${isInvisible || hideContent ? "invisible" : ""}
    `}
    >
      <Container
        $customColor={customColor}
        $orientation={orientation}
        $placement={placement}
        className={`
          timeline-event-content-box ${showExpandedCtx} ${boxType}
        `}
      >
        <Collapsed className={`timeline-event-content-box-text ${boxType}`}>
          {children}
        </Collapsed>
        {boxType === "with-overflow" && (
          <OverflowControls className="timeline-event-content-box-controls">
            <Button onClick={toggleIcon} $customColor={customColor}>
              <SmartIcon placement={placement} action={showExpandedCtx} />
            </Button>
          </OverflowControls>
        )}
      </Container>
    </Frame>
  );
}
