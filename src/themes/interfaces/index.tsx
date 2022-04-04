import type { ColorInterface} from './colors'
import type { AlertInterface } from './alerts'

export type { ColorInterface, AlertInterface}

export interface CommonThemeInterface extends AlertInterface {
    backgroundLightest: string,
    backgroundLighter: string,
    backgroundLight: string,
    background:string,
    backgroundDark: string,
    backgroundDarker: string,
    backgroundDarkest: string,
    text:string,
    type?: string,
}

export interface ThemeInterface extends CommonThemeInterface, ColorInterface {}

export interface ExpandedThemeInterface extends ThemeInterface {
    name: string,
    mergedPrimary: MergedInterface,
}

export interface BaseThemeColorsInterface {
    main: string,
    alternate?: string,
    contrast: string,
}

export interface PaletteInterface extends BaseThemeColorsInterface {

}

export interface ThemeMapInterface {
    [themeName: string]: ExpandedThemeInterface,
    darkgreen: ExpandedThemeInterface
    // lightgreen: ThemeInterface
}

export interface MergedInterface {
    [key: string]: string,
}