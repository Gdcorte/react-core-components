import {
  SimpleCalendarPicker,
  SimpleCalendarProps,
} from '@/src/components/primitive/datetime';
import OutsideClickHandler from '@/src/hooks/OutsideClick';
import { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  SIMPLE_CALENDAR_HEIGHT,
  SIMPLE_CALENDAR_WIDTH,
} from '../../datetime/Calendar/Simple';
import SimpleInput, { SimpleInputProps } from '../Simple';
import { DateIcon } from './Icons';
import { PopUpPos, RectSize } from './interface';

const Container = styled.div`
  display: flex;
  position: relative;

  align-items: center;
  justify-content: center;

  color: inherit;
  background: inherit;
  fill: inherit;
  border-color: inherit;

  gap: 8px;
`;

const StyledIcon = styled(DateIcon)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);

  border-left: 1px solid;
  cursor: pointer;

  fill: inherit;

  padding: 0 4px;
  width: 20px;
  height: 100%;
`;

const StyledInput = styled(SimpleInput)`
  input {
    min-width: 130px;
  }
`;

const RestyledCalendar = styled(SimpleCalendarPicker)<{ pos: PopUpPos }>`
  z-index: 1;
  position: fixed;

  background: inherit;
  border: 2px solid ${({ theme }) => theme.background.contrast};
  border-radius: 5px;

  visibility: ${({ pos }) => (!pos.left && !pos.top ? 'hidden' : 'unset')};
  top: ${({ pos }) => pos.top}px;
  left: ${({ pos }) => pos.left}px;
`;

export type DatePickerInputProps = {
  calendar: Omit<SimpleCalendarProps, 'onValueChange' | 'onDateChange'>;
  value?: string | Date;
  defaultValue?: string | Date;
  onDateChange?: (date: Date, name: string) => void;
  onValueChange?: (date: string, name: string) => void;
} & Omit<SimpleInputProps, 'onClick' | 'onChange' | 'value'>;

export default function SimpleInputDatePicker({
  calendar,
  tag,
  className = '',
  value,
  defaultValue,
  onDateChange,
  onValueChange,
  ...props
}: DatePickerInputProps): ReactNode {
  const [showCalendar, setshowCalendar] = useState(false);
  const [calendarPos, setcalendarPos] = useState<PopUpPos>({
    left: 0,
    top: 0,
  });
  const elementRef = useRef<HTMLObjectElement>(null);

  function fitPopUpInWindow(PopUpSize: RectSize, parentPos: DOMRect): PopUpPos {
    const windowSize: RectSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let left = parentPos.left;
    if (left + PopUpSize.width > windowSize.width) {
      left = windowSize.width - PopUpSize.width;
    }

    let top = parentPos.top;
    if (top + PopUpSize.height > windowSize.height) {
      top = windowSize.height - PopUpSize.height;
    }

    return { left, top };
  }

  function handleInputOpen() {
    const calendarSize: RectSize = {
      width: SIMPLE_CALENDAR_WIDTH,
      height: SIMPLE_CALENDAR_HEIGHT,
    }; //This is set with CSS in the calendar component

    const elementPos = elementRef.current?.getBoundingClientRect() as DOMRect;

    const newPos = fitPopUpInWindow(calendarSize, elementPos);
    setcalendarPos(newPos);
    setshowCalendar(true);
  }

  function transformPretty(input?: string | Date) {
    if (input === undefined) return '';

    if (typeof input === 'string') {
      const transformed = input.replaceAll('-', '/').split('T');
      return transformed[0];
    }
  }

  function handleCancel() {
    setshowCalendar(false);
  }

  OutsideClickHandler(elementRef, handleCancel);

  function processDate(date: Date) {
    if (onDateChange !== undefined) {
      onDateChange(date, tag);
      return;
    }

    const dateValue = date.toISOString();
    if (onValueChange !== undefined) {
      onValueChange(dateValue, tag);
      return;
    }
  }

  async function handleDateChange(date: Date) {
    await processDate(date);

    // The timeout is necessary here.
    // When wrapped inside a label, selecting a value will trigger a click.
    // Since the calendar is, technically, inside the label. This click will trigger
    // a click in the input itself. Which will cause the closed form to reopen.
    // Adding even a 10ms timeout (imperceptible to human eyes) will solve this race condition
    setTimeout(() => {
      setshowCalendar(false);
    }, 10);
  }

  return (
    <Container
      ref={elementRef}
      className={`input-date-picker-frame ${className}`}
      onClick={handleInputOpen}
    >
      <StyledInput
        {...props}
        tag={tag}
        // onClick={handleInputOpen}
        value={transformPretty(value)}
      />
      <StyledIcon />

      {showCalendar && (
        <RestyledCalendar
          onDateChange={handleDateChange}
          pos={calendarPos}
          value={value}
          defaultValue={defaultValue}
          {...calendar}
        />
      )}
    </Container>
  );
}
