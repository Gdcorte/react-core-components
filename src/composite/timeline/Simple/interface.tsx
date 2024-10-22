import { ReactNode } from "react";

export type TimelineOrientation = "horizontal" | "vertical";

export const verticalPlacement = ["left", "right"] as const;
export type VerticalTimelinePlacement = (typeof verticalPlacement)[number];

export const horizontalPlacement = ["top", "bottom"] as const;
export type HorizontalTimelinePlacement = (typeof horizontalPlacement)[number];

export type TimelinePlacement =
  | HorizontalTimelinePlacement
  | VerticalTimelinePlacement;

export type TimelineActivity = {
  start: Date;
  end?: Date;
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  color?: string;
};
