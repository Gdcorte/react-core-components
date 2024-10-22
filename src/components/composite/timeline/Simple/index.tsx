import { FixedViewport } from '@/src/components/primitive/viewport';
import { ReactNode, useMemo } from 'react';
import styled from 'styled-components';
import {
  TimelineActivity,
  TimelineOrientation,
  TimelinePlacement,
} from './interface';
import SimpleLabel from './Label';
import ItemOutline from './Outline';

const Frame = styled.div<{
  $orientation: TimelineOrientation;
  $customColor?: string;
}>`
  position: relative;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  background: inherit;

  margin: 4px;

  ${({ $orientation }) => {
    return $orientation === 'horizontal'
      ? `
      flex-direction: row;
      width: 100%; 
      overflow-x: scroll;
      overflow-y: hidden;
      `
      : `
      flex-direction: column;
      overflow-y: auto;
      padding-bottom: 100px;
      `;
  }}

  gap: 8px;

  .timeline-event-line {
    border-color: ${({ theme, $customColor }) =>
      $customColor ? $customColor : theme.background.contrast};
  }

  .timeline-event-marker {
    &.default > div {
      background: ${({ theme, $customColor }) =>
        $customColor ? $customColor : theme.background.contrast};
    }

    width: 32px;
    height: 32px;
  }
`;

export type SimpleTimelineProps = {
  sortActivities?: 'asc' | 'desc';
  customColor?: string;
  activities: TimelineActivity[];
  orientation?: TimelineOrientation;
};

type Props = {} & SimpleTimelineProps;

export default function SimpleTimeline({
  activities,
  customColor,
  orientation = 'horizontal',
  sortActivities = 'asc',
}: Props) {
  const labels = useMemo(() => {
    const sortedActivities = activities.sort((a, b) => {
      if (a.start === b.start) return 0;
      const isLower = a.start < b.start;

      if (sortActivities === 'desc') {
        return !isLower ? -1 : 1;
      }

      // Default to ascending
      return isLower ? -1 : 1;
    });

    //   initialize
    let placement: TimelinePlacement = 'bottom';
    if (orientation === 'vertical') {
      placement = 'right';
    }

    return [
      <ItemOutline
        orientation={orientation}
        placement={placement}
        key={`timeline-start-${Math.random().toString(36)}`}
        hideContent
        hideMarker
      />,
      ...sortedActivities.map<ReactNode>((value, index) => {
        // Switch over during creation
        if (orientation === 'horizontal') {
          placement = placement === 'top' ? 'bottom' : 'top';
        } else {
          placement = placement === 'left' ? 'right' : 'left';
        }

        return (
          <SimpleLabel
            className={`${activities.length === index + 1 ? 'last' : ''}`}
            orientation={orientation}
            key={`timeline-item-${Math.random().toString(36)}`}
            activity={value}
            placement={placement}
          />
        );
      }),
    ];
  }, [orientation, activities]);

  return (
    <FixedViewport>
      <Frame
        $customColor={customColor}
        className="simple-timeline"
        $orientation={orientation}
      >
        {labels}
      </Frame>
    </FixedViewport>
  );
}
