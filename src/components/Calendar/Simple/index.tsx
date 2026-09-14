import { DayPicker, type DayPickerProps } from "@daypicker/react";
// import "@daypicker/react/style.css";
import classNames from "./simple.module.css";

export type SimpleCalendarProps = DayPickerProps & {};

export default function SimpleCalendar({
  captionLayout,
  className,
  ...props
}: SimpleCalendarProps) {
  const { mode } = props;
  props.mode = props.mode ?? "single";

  const modeLayout = mode == "range" ? "label" : "dropdown";
  const finalLayout = captionLayout ?? modeLayout;
  return (
    <div className={`${classNames.container} ${className}`}>
      <DayPicker
        showOutsideDays
        {...props}
        classNames={classNames}
        captionLayout={finalLayout}
      />
    </div>
  );
}
