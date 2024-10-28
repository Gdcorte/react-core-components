import { ColorElement } from '@gdcorte/react-core-theme';
import { BaseSyntheticEvent, ReactNode } from 'react';
import { Calendar, type CalendarProps } from 'react-calendar';
import styled, { css } from 'styled-components';

type CalendarColors = {
  primary: ColorElement;
  secondary: ColorElement;
};

export const SIMPLE_CALENDAR_WIDTH = 300;
export const SIMPLE_CALENDAR_HEIGHT = 300;

const CustomColors = css<{ $colors: CalendarColors }>`
  // All hoverable elements here
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile:enabled:hover {
    color: ${({ $colors }) => $colors.primary.color};
    background-color: ${({ $colors }) => $colors.primary.contrast};
  }

  // Weekdays + top header controls + Weekday Header text
  .react-calendar__navigation__label,
  .react-calendar__navigation__arrow {
    color: ${({ theme }) => theme.background.contrast};
  }

  .react-calendar__month-view__days__day,
  .react-calendar__year-view__months__month,
  .react-calendar__decade-view__years__year,
  .react-calendar__century-view__decades__decade {
    color: ${({ theme }) => theme.background.contrast};
  }

  // weekend days colors
  .react-calendar__month-view__days__day--weekend {
    color: ${({ $colors }) => $colors.primary.tint};
  }

  // Weekday Header text bottom border
  .react-calendar__month-view__weekdays {
    border-bottom: 1px solid ${({ theme }) => theme.background.contrast};
  }

  // previous/next month days in calendar
  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ $colors }) => $colors.secondary.tint};
  }

  .react-calendar__tile--now {
    color: ${({ $colors }) => $colors.primary.color};
  }

  .react-calendar__tile--active {
    color: ${({ $colors }) => $colors.secondary.color};
    background: ${({ $colors }) => $colors.secondary.contrast};
  }
`;

const NeutralColors = css`
  // All hoverable elements here
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile:enabled:hover {
    color: ${({ theme }) => theme.background.color};
    background-color: ${({ theme }) => theme.background.contrast};
  }

  // Weekdays + top header controls + Weekday Header text
  .react-calendar__navigation__label,
  ,
  .react-calendar__navigation__arrow {
    color: ${({ theme }) => theme.background.contrast};
  }

  .react-calendar__month-view__days__day,
  .react-calendar__year-view__months__month,
  .react-calendar__decade-view__years__year,
  .react-calendar__century-view__decades__decade {
    color: ${({ theme }) => theme.background.contrast};
  }

  // weekend days colors
  .react-calendar__month-view__days__day--weekend {
    color: ${({ theme }) => theme.background.tint};
  }

  // Weekday Header text bottom border
  .react-calendar__month-view__weekdays {
    border-bottom: 1px solid ${({ theme }) => theme.background.shade};
  }

  // previous/next month days in calendar
  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ theme }) => theme.background.tone};
  }

  .react-calendar__tile--now {
    color: ${({ theme }) => theme.background.color};
  }

  .react-calendar__tile--active {
    color: ${({ theme }) => theme.background.contrast};
    background: ${({ theme }) => theme.background.color};
  }
`;

const StyledCalendar = styled(Calendar)<{ $colors?: CalendarColors }>`
  border-radius: 8px;
  padding: 8px;

  width: ${SIMPLE_CALENDAR_WIDTH}px;
  max-width: 100%;
  background: white;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.125em;

  background: inherit;

  &.react-calendar--doubleView {
    width: 700px;
  }

  &.react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  &.react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  &.react-calendar,
  &.react-calendar *,
  &.react-calendar *:before,
  &.react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  &.react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  &.react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
  }

  .react-calendar__navigation button {
    min-width: 40px;
    background: none;
    border-radius: 5px;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6px;
    background: none;
    text-align: center;
    line-height: 16px;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile:enabled:hover {
    border-radius: 50%;
  }

  .react-calendar__tile--active {
    border-radius: 5px 20px 5px;
  }

  ${
    // @ts-ignore
    ({ $colors }) => {
      if ($colors !== undefined) return CustomColors;
      return NeutralColors;
    }
  }
`;

export type SimpleCalendarProps = {
  colors?: CalendarColors;
  onDateChange?: (value: Date) => void;
  onValueChange?: (value: string) => void;
  defaultValue?: string | Date;
} & Omit<CalendarProps, 'defaultValue'>;

export default function SimpleCalendar({
  defaultValue,
  onValueChange,
  onDateChange,
  colors,
  ...props
}: SimpleCalendarProps): ReactNode {
  function handleDaySelect(value: Date, event: BaseSyntheticEvent) {
    if (onDateChange) {
      onDateChange(value);
      return;
    }

    if (onValueChange) {
      const dateValue = value.toISOString();
      onValueChange(dateValue);
      return;
    }
  }

  function transformDate(input?: string | Date) {
    if (input === undefined) return new Date();
    if (typeof input === 'string') return new Date(input);

    return input;
  }

  return (
    <StyledCalendar
      {...props}
      $colors={colors}
      defaultValue={transformDate(defaultValue)}
      onClickDay={handleDaySelect}
    />
  );
}