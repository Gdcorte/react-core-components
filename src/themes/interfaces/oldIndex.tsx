import type { ColorInterface} from './colors'
import type { AlertInterface } from './alerts'

export type { ColorInterface, AlertInterface}

export interface CommonThemeInterface extends AlertInterface {
    backgroundShade3: string,
    backgroundShade2: string,
    backgroundShade1: string,
    backgroundShade0: string,
    background:string,
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
    lightgreen: ExpandedThemeInterface,
    lightpink: ExpandedThemeInterface, 
    lightblue: ExpandedThemeInterface, 
    lightyellow: ExpandedThemeInterface,
    darkgreen: ExpandedThemeInterface,
    darkpink: ExpandedThemeInterface,
    darkblue: ExpandedThemeInterface,
    darkyellow: ExpandedThemeInterface
}

export interface MergedInterface {
    [key: string]: string,
}