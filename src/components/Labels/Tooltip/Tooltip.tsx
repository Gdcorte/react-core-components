import type { DataVariantProps } from '@/providers/theme/types';
import { useState, type LabelHTMLAttributes, type MouseEvent } from 'react';
import { TooltipIcon } from './Icon';
import styles from './tooltip.module.css';

type Props = {
  classMap?: {
    title: string;
    label: string;
    tooltipIcon: string;
  };
  variant?: DataVariantProps;
  orientation?: 'row' | 'column';
  children: React.ReactNode;
  title: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

type ClickState = 'active' | 'inactive';

export default function SimpleLabel({
  title,
  orientation,
  children,
  className,
  classMap,
  variant,
  ...props
}: Props) {
  const [clickStatus, setClickStatus] = useState<ClickState>('inactive');

  function handleClickState(event: MouseEvent<HTMLOrSVGElement>) {
    event.stopPropagation();
    event.preventDefault();

    console.warn('HELLO MOTTO');
    setClickStatus(clickStatus == 'active' ? 'inactive' : 'active');
  }

  return (
    <label
      data-type={variant?.dataType ?? 'color'}
      data-variant={variant?.dataVariant ?? 'primary'}
      data-orientation={orientation}
      className={`${className} ${styles.label} ${classMap?.label}`}
      {...props}
    >
      <div className={styles.title}>
        <p className={`${styles['title-text']} ${classMap?.title}`}>{title}</p>

        <div className={styles.tooltip}>
          <TooltipIcon
            onClick={handleClickState}
            className={`${styles['tooltip-icon']} ${classMap?.tooltipIcon}`}
          />
          <span
            onClick={handleClickState}
            data-click={clickStatus}
            className={`${styles['tooltip-text']}`}
          >
            HELLO
          </span>
        </div>
      </div>

      {children}
    </label>
  );
}
