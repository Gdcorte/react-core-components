import {
  getDefaultThemeBg,
  isThemeVariant,
  ThemeVariants,
  useThemeProviderCtx,
} from '@gdcorte/react-core-theme';
import { SyntheticEvent } from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeMoonIcon, ThemeSunIcon } from './Icons';

const ThemeBtn = styled.button<{ $colorCode: string }>`
  display: flex;
  background: transparent;

  border-radius: 50%;

  svg {
    fill: ${({ $colorCode }) => $colorCode};
    stroke: ${({ $colorCode }) => $colorCode};

    min-width: 20px;
    min-height: 20px;
  }
  padding: 0;

  cursor: pointer;

  border: none;
`;

type Props = {
  uid?: string;
  className?: string;
  onChangeOverride?: (newTheme: ThemeVariants) => void | Promise<void>;
};

export default function ThemePicker({
  uid = '',
  className = '',
  onChangeOverride = undefined,
}: Props) {
  const {
    presets: { theme },
  } = useTheme();
  const { onThemeChange } = useThemeProviderCtx();

  const targetTheme: ThemeVariants = theme === 'dark' ? 'light' : 'dark';

  async function handleClickEvent(
    event: SyntheticEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const newTheme = event.currentTarget.name;
    if (!isThemeVariant(newTheme)) return;

    // Overrides default
    if (onChangeOverride !== undefined) {
      onChangeOverride(newTheme);
      return;
    }

    // Applies Ctx otherwise
    onThemeChange(newTheme);
  }

  return (
    <ThemeBtn
      aria-label="theme-btn"
      className={`theme-picker-frame ${className}`}
      name={targetTheme}
      onClick={handleClickEvent}
      $colorCode={getDefaultThemeBg(targetTheme)}
      key={`${uid}-theme-btn-${targetTheme}`}
    >
      {targetTheme === 'dark' ? <ThemeMoonIcon /> : <ThemeSunIcon />}
    </ThemeBtn>
  );
}
