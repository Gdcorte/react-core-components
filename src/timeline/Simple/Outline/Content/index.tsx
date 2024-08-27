"use client";

import { useWindowSize } from "@/src/hooks";
import { getChildrenAccDimensions, getElementRawDimensions } from "@/src/utils";
import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TimelineOrientation, TimelinePlacement } from "../../interface";
import { OverflowableFrame } from "./Frames";
import { ContentIconClose, ContentIconOpen } from "./Icon";
import { Button, FrameStyle, OverflowControls } from "./styles";

const Overflowable = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 0;
  width: 100%;

  overflow: hidden;
`;

const Frame = styled.div<{
  $orientation: TimelineOrientation;
  $placement: TimelinePlacement;
  $customColor?: string;
}>`
  display: flex;

  height: 100%;
  background: inherit;

  position: relative;

  ${({ $placement }) =>
    $placement === "bottom"
      ? "flex-direction: column;"
      : "flex-direction: column-reverse;"}

  ${FrameStyle}

  &.invisible {
    visibility: hidden;
    border: 1px solid transparent;
    z-index: -1;
  }
`;

function isUndefinedNull(option: unknown): boolean {
  return option === undefined || option === null;
}

type Props = {
  orientation?: TimelineOrientation;
  placement?: TimelinePlacement;
  className?: string;
  children?: ReactNode;
  customColor?: string;
  hideContent?: boolean;
  isInvisible?: boolean;
};

export default function Content({
  className,
  customColor,
  children,
  orientation = "horizontal",
  placement = "top",
  hideContent = false,
  isInvisible = false,
}: Props) {
  const [showExpander, setShowExpander] = useState(false);
  const [showExpandedCtx, setShowExpandedCtx] = useState(false);

  const content = useRef<HTMLDivElement>(null);
  const reference = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (
      isUndefinedNull(content.current) ||
      isUndefinedNull(reference.current)
    ) {
      return;
    }

    // Decide wether to show the expande or not
    const contentSize = getChildrenAccDimensions(content.current);
    const referenceSize = getElementRawDimensions(reference.current);

    if (contentSize.height > referenceSize.height) {
      // In this case we need to worry about the expanded content...
      setShowExpander(true);
    }
  }, [content, reference, windowSize]);

  function handleOpen() {
    setShowExpandedCtx(true);
  }

  function handleClose() {
    setShowExpandedCtx(false);
  }

  return (
    <Frame
      ref={reference}
      $customColor={customColor}
      $orientation={orientation}
      $placement={placement}
      className={`
        timeline-event-content
        ${hideContent || isInvisible ? "invisible" : ""} 
        ${className ? className : ""}
      `}
    >
      <Overflowable ref={content} className="timeline-event-content-box">
        {children}
      </Overflowable>
      {showExpander && (
        <OverflowControls className="timeline-event-content-controls">
          <Button onClick={handleOpen} $customColor={customColor}>
            {placement === "bottom" ? (
              <ContentIconClose />
            ) : (
              <ContentIconOpen />
            )}
          </Button>
        </OverflowControls>
      )}
      {showExpandedCtx && (
        <OverflowableFrame
          onClick={handleClose}
          customColor={customColor}
          orientation={orientation}
          placement={placement}
        >
          {children}
        </OverflowableFrame>
      )}
    </Frame>
  );
}
