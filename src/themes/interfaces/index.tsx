export interface RgbColor{
    [key: string]: number,
    red: number,
    green: number,
    blue:  number,
}

export interface FontTypes {
    light: string,
    dark: string,
}

export interface ThemeTypes {
    light: string,
    dark: string,
}
export const defaultTypes = ['light', 'dark']

export interface ThemeColors {
    primary: string,
    secondary: string,
    color: string
}
export const defaultColors = ['primary', 'secondary']

export interface ThemeAlertColors {
    info: string,
    success: string,
    warning: string,
    danger: string,
}
export const defaultAlerts = ['info', 'success', 'warning', 'danger']

export interface InputTheme extends ThemeTypes, ThemeColors, ThemeAlertColors {
    type: string,
}

export interface ShadePresets {
    shade1: string,
    shade2: string,
    shade3: string,
    shade4: string,
    shade5: string,
}

export interface ActionablePresets {
    [key: string]: string,
    hover: string,
    selected: string,
    focus: string,
    disabled: string,
}

export interface OutputTypesPresets extends ShadePresets {
    base: string,
};
export interface OutputThemeTypes {
    light: OutputTypesPresets,
    dark: OutputTypesPresets,
}

export interface OutputColorPresets extends ShadePresets, ActionablePresets {
    base: string,
};
export interface OutputAlertPresets extends ActionablePresets {
    base: string,
};
export interface OutputThemeColors {
    primary: OutputColorPresets,
    secondary: OutputColorPresets,
}

export interface OutputThemeAlerts {
    info: OutputAlertPresets,
    success: OutputAlertPresets,
    warning: OutputAlertPresets,
    danger: OutputAlertPresets,
}

export interface OutputTheme extends OutputThemeTypes, OutputThemeColors, OutputThemeAlerts {
    [key: string]: any,
    fonts: FontTypes,
    background: OutputTypesPresets,
    type: string,
    color: string,
    name: string
};

export * from './oldIndex'