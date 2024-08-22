import { ReactNode } from "react";

export type Activity = {
  start: Date;
  icon?: ReactNode;
  title: ReactNode;
  place: string;
  color?: string;
};

export type SimpleTimelineProps = {
  customColor?: string;
  activities: Activity[];
};

type Props = {} & SimpleTimelineProps;

export default function SimpleTimeline({ ...props }: Props) {
  return (
    <>
      Timeline Woohoo
      <pre>{JSON.stringify(props, undefined, 2)}</pre>
    </>
  );
}
