import { ReactNode } from "react";
import styled from "styled-components";
import { TimelineOrientation, TimelinePlacement } from "../interface";
import Content from "./Content";

function contentPlacement(placement: TimelinePlacement) {
  switch (placement) {
    case "top":
      return "column-reverse";
    case "bottom":
      return "column";
    case "right":
      return "row";
    case "left":
      return "row-reverse";

    default:
      return "column";
  }
}

const Frame = styled.div<{ $placement: TimelinePlacement }>`
  display: flex;
  background: inherit;

  flex-direction: ${({ $placement }) => contentPlacement($placement)};
  width: 100%;
  gap: inherit;
`;

const Line = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.background.contrast};
`;

const Ball = styled.div`
  border-radius: 50%;
  background: inherit;
`;

const Marker = styled.div<{
  $customColor?: string;
}>`
  padding: 6px;
  border-radius: 50%;
  border: 2px double
    ${({ theme, $customColor }) =>
      $customColor ? $customColor : theme.background.contrast};

  background: inherit;

  svg,
  img {
    width: inherit;
    height: inherit;
  }
  img {
    border-radius: 50%;
  }

  ${Ball} {
    width: inherit;
    height: inherit;
  }

  &.invisible {
    visibility: hidden;
  }
`;

const Separator = styled.div<{
  $orientation: TimelineOrientation;
}>`
  display: flex;
  align-items: center;

  gap: 8px;

  flex-direction: ${({ $orientation }) =>
    $orientation === "horizontal" ? "row" : "column"};

  ${Line} {
    ${({ $orientation }) =>
      $orientation === "horizontal"
        ? `
        width: 100%;
        height: 0px;
        `
        : `
        width: 0px;
        height: 100%;
    `};
  }
`;

type Props = {
  className?: string;
  placement: TimelinePlacement;
  orientation: TimelineOrientation;
  icon?: ReactNode;
  children?: ReactNode;
  hideContent?: boolean;
  hideMarker?: boolean;
  color?: string;
};

export default function ItemOutline({
  className,
  placement,
  orientation,
  icon,
  children,
  color,
  hideContent,
  hideMarker = false,
}: Props) {
  return (
    <Frame className={`timeline-event ${className}`} $placement={placement}>
      <Content orientation={orientation} className="filler" isInvisible />

      <Separator $orientation={orientation}>
        <Marker
          $customColor={color}
          className={`timeline-event-marker ${icon ? "custom" : "default"} ${hideMarker ? "invisible" : ""}`}
        >
          {icon ? icon : <Ball />}
        </Marker>
        <Line className={`timeline-event-line`} />
      </Separator>

      <Content
        className={className}
        customColor={color}
        orientation={orientation}
        placement={placement}
        hideContent={hideContent}
      >
        {children}
      </Content>
    </Frame>
  );
}
