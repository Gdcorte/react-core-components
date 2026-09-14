export const dataTypes = ['color', 'alert'] as const;
export type DataTypes = (typeof dataTypes)[number];

export const colorVariants = [
  'primary',
  'secondary',
  'tertiary',
  'extra',
] as const;
export type ColorVariants = (typeof colorVariants)[number];

export const alertVariants = [
  'success',
  'info',
  'neutral',
  'warning',
  'danger',
] as const;
export type AlertVariants = (typeof alertVariants)[number];

export type DataVariantProps =
  | {
      dataType: 'color';
      dataVariant: ColorVariants;
    }
  | { dataType: 'alert'; dataVariant: AlertVariants };
