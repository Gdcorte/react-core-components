import { getElementInternalDimensions } from "@/src/utils";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  TimelineActivity,
  TimelineOrientation,
  TimelinePlacement,
} from "./interface";
import ItemOutline from "./Outline";

const Frame = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

const Title = styled.div`
  font-size: 1.2rem;
`;

const Range = styled.span`
  font-size: 0.8rem;
`;

const Description = styled.div`
  margin: 0;
  margin-top: 6px;
`;

type Props = {
  className?: string;
  placement: TimelinePlacement;
  orientation: TimelineOrientation;
  activity: TimelineActivity;
};

function determineRange(start: Date, end?: Date): string {
  const startFormatted = `${start.getFullYear()}/${start.getMonth()+1}`;
  if (end === undefined) return startFormatted;

  return `${startFormatted} - ${end.getFullYear()}/${end.getMonth()+1}`;
}

export default function ItemLabel({
  className,
  activity,
  placement,
  orientation,
}: Props) {
  const content = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (content.current === null) return;

    const contentAccDim = getElementInternalDimensions(content.current);
    setContentHeight(contentAccDim.height);
  }, [content.current]);

  return (
    <ItemOutline
      contentHeight={contentHeight}
      className={className}
      placement={placement}
      orientation={orientation}
      icon={activity.icon}
      color={activity.color}
    >
      <Frame ref={content}>
        <Title>{activity.title}</Title>
        <Range>{determineRange(activity.start, activity.end)}</Range>
        <Description>{activity.description}</Description>
      </Frame>
    </ItemOutline>
  );
}
