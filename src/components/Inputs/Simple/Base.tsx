import type { DataVariantProps } from '@/providers/theme/types';
import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from './base.module.css';

export type BaseInputProps = {
  variant?: DataVariantProps;
  dataState?: 'error' | 'normal';
  className?: string;
  children?: ReactNode;
  classMap?: {
    root: string;
    input: string;
    icon: string;
  };
} & InputHTMLAttributes<HTMLInputElement>;

export default function BaseInput({
  variant,
  dataState,
  className,
  classMap,
  children,
  ...props
}: BaseInputProps) {
  return (
    <div
      data-type={variant?.dataType ?? 'color'}
      data-variant={variant?.dataVariant ?? 'primary'}
      className={`${className ?? ''} ${classMap?.root ?? ''} ${styles.root}`}
    >
      <input {...props} className={`${styles.input} ${classMap?.input}`} />

      {children && <div className={`${styles.icon}`}>{children}</div>}
    </div>
  );
}
