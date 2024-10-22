import {
  colorVariants,
  ColorVariants,
  getDefaultColorCode,
  ThemeVariants,
} from '@gdcorte/react-core-theme';

export type ColorMap = Record<ColorVariants, string>;

export function generateFullColorMap(
  theme: ThemeVariants,
  exclude?: ColorVariants,
): ColorMap {
  return colorVariants.reduce((acc, color) => {
    if (color === exclude) return acc;

    return {
      ...acc,
      [color]: getDefaultColorCode(color, theme),
    };
  }, {} as ColorMap);
}
