'use client';

import { useLocalStorage } from '@/hooks';
import { createContext, use, useEffect, useState } from 'react';
import styles from './layout.module.css';

export const baseThemes = ['light', 'dark'] as const;
export type ThemeType = (typeof baseThemes)[number];

export function isTheme(value: string): value is ThemeType {
  return baseThemes.includes(value as ThemeType);
}

export const baseColors = ['green', 'blue', 'pink', 'yellow'] as const;
export type ColorType = (typeof baseColors)[number];

export function isColor(value: string): value is ColorType {
  return baseColors.includes(value as ColorType);
}

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  color: ColorType;
  setColor: (color: ColorType) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useLocalStorage<ThemeType>('theme', 'dark');
  const [color, setColor] = useLocalStorage<ColorType>('color', 'green');
  const [isServer, setServer] = useState(true);

  // isServer, skip rendering on server. This will prevent dark-mode flickers
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setServer(false);
    }
  }, []);

  if (isServer || !theme || !color) return null;

  return (
    <ThemeContext value={{ theme, setTheme, color, setColor }}>
      <div
        data-theme={theme}
        data-color={color}
        className={`theme-container ${styles['theme-container']}`}
      >
        {children}
      </div>
    </ThemeContext>
  );
}

export function useTheme() {
  const context = use(ThemeContext); // Replaces useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
