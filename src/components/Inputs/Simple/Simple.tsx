import type { InputHTMLAttributes } from 'react';
import styles from './simple.module.css';

export type SimpleInputProps = {
  dataState?: 'error' | 'normal';
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function SimpleInput({
  dataState,
  className,
  ...props
}: SimpleInputProps) {
  return (
    <input
      data-state={dataState}
      className={`${className} ${styles.input}`}
      {...props}
    />
  );
}
