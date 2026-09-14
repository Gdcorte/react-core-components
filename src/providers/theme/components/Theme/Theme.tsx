'use client';

import { type ThemeType, useTheme } from '@/providers/theme/layout';
import { MoonIcon, SunIcon } from './icons';
import styles from './theme.module.css';

type Props = {
  className?: string;
};

export default function ThemePicker({ className }: Props) {
  const { theme, setTheme } = useTheme();

  function onThemeClick() {
    const newTheme: ThemeType = theme == 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <button
      aria-label={`btn-theme-${theme}`}
      onClick={onThemeClick}
      className={`theme-picker ${className} ${styles.container}`}
    >
      {theme == 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
