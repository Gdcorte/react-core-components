import { Calendar } from '@/components/icons';
import { useOutsideClick } from '@/hooks';
import { Popover } from 'radix-ui';
import { useRef, useState } from 'react';
import SimpleCalendar, { type SimpleCalendarProps } from '../Simple';
import iconStyles from './icon.module.css';
import styles from './input.module.css';
type Props = SimpleCalendarProps & {
  id?: string;
  initialValue?: Date | string;
  onDateChange: (newValue: string) => void;
};

function parseToStr(targetValue: string | Date | undefined): string {
  if (targetValue == undefined) return '';

  if (typeof targetValue === 'string') return targetValue.replaceAll('/', '-');

  const year = targetValue.getFullYear();
  const month = String(targetValue.getMonth() + 1).padStart(2, '0');
  const day = String(targetValue.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseToDate(targetValue: string | Date | undefined): Date | undefined {
  if (targetValue == undefined) return undefined;

  // TODO: Naively assuming YYYY-MM-DD date here
  if (typeof targetValue === 'string') {
    // Need date to be at least YYYY-MM-DD
    if (targetValue.length < 10) return undefined;

    const parsed = Date.parse(`${targetValue.replaceAll('/', '-')}T00:00:00Z`);
    return isNaN(parsed) ? undefined : new Date(parsed);
  }

  return targetValue;
}

export default function InputCalendar({
  id,
  initialValue,
  onDateChange,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLObjectElement>(null);
  const [month, setMonth] = useState<Date | undefined>(
    parseToDate(initialValue),
  );
  const [localValue, setLocalValue] = useState<string>(
    () => parseToStr(initialValue) ?? '',
  );

  function handleCalendarIconClick() {
    setIsOpen(!isOpen);
  }

  function handleInputClick() {
    setIsOpen(true);
    inputRef.current?.focus();
  }

  function handleOutsideClick() {
    setIsOpen(false);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;

    const valueDate = parseToDate(newValue);
    if (valueDate !== undefined) {
      onDateChange(newValue);
    }

    setLocalValue(newValue);
    setMonth(parseToDate(newValue));
  }

  function handleCalendarSelect(date: Date | undefined) {
    if (date != undefined) {
      const formattedDate = parseToStr(date);
      onDateChange(formattedDate);

      setLocalValue(formattedDate);
      setIsOpen(false);
    }
  }
  function preventInputLoseFocus(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  useOutsideClick(popoverRef, handleOutsideClick);

  return (
    <div ref={popoverRef}>
      <Popover.Root modal={false} open={isOpen}>
        <Popover.Anchor asChild>
          <div
            className={iconStyles.root}
            data-state={isOpen ? 'open' : 'closed'}
          >
            <input
              ref={inputRef}
              id={id ?? 'generic-input'}
              className={`${styles.input} ${iconStyles.input}`}
              onClick={handleInputClick}
              onChange={handleInputChange}
              value={localValue}
            />

            <button
              tabIndex={-1}
              onClick={handleCalendarIconClick}
              className={iconStyles.icon}
            >
              <Calendar />
            </button>
          </div>
        </Popover.Anchor>
        <Popover.Content
          onOpenAutoFocus={preventInputLoseFocus}
          autoFocus={false}
          align="start"
        >
          <SimpleCalendar
            className={iconStyles.calendar}
            {...props}
            selected={parseToDate(localValue)}
            mode="single"
            onSelect={handleCalendarSelect}
            month={month}
            onMonthChange={setMonth}
            autoFocus={false}
          />
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
