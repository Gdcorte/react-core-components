// import { FontTypes, OutputThemeAlerts, OutputThemeColors, OutputThemeTypes, OutputTypesPresets } from './interfaces'

export * from './bundler'
export * from './components'
export type { OutputTheme, defaultAlertsType, defaultColorsType, defaultThemeTypesType, isAlertType, isColorType, isThemeType } from './interfaces'

// export interface OutputTheme extends OutputThemeTypes, OutputThemeColors, OutputThemeAlerts {
//     [key: string]: any,
//     fonts: FontTypes,
//     background: OutputTypesPresets,
//     type: string,
//     color: string,
//     name: string
// };