import type { DataVariantProps } from '@/providers/theme/types';
import type { LabelHTMLAttributes } from 'react';
import styles from './simple.module.css';

type Props = {
  classMap?: {
    title: string;
    label: string;
  };
  orientation?: 'row' | 'column';
  children: React.ReactNode;
  title: string;
  variant?: DataVariantProps;
} & LabelHTMLAttributes<HTMLLabelElement>;

export default function SimpleLabel({
  title,
  orientation,
  children,
  className,
  classMap,
  variant,
  ...props
}: Props) {
  return (
    <label
      data-type={variant?.dataType ?? 'color'}
      data-variant={variant?.dataVariant ?? 'primary'}
      data-orientation={orientation}
      className={`${className} ${styles.label} ${classMap?.label}`}
      {...props}
    >
      <p className={`${styles.title} ${classMap?.title}`}>{title}</p>
      {children}
    </label>
  );
}
