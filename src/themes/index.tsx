import {
    LightGreen, 
    LightPink, 
    LightBlue, 
    LightYellow,
} from './light'

import { 
    DarkGreen, 
    DarkPink, 
    DarkYellow, 
    DarkBlue,
} from './dark'

import type {
    ExpandedThemeInterface,
    ThemeMapInterface,
} from './interfaces'


export {
    LightGreen, 
    LightPink, 
    LightBlue, 
    LightYellow,
} from './light'

export { 
    DarkGreen, 
    DarkPink, 
    DarkYellow, 
    DarkBlue,
} from './dark'

export { BaseAlerts } from './alerts'

export const getTheme = (themeName: string = 'darkgreen'): ExpandedThemeInterface => {    
    const themeMap: ThemeMapInterface = {
        lightgreen: LightGreen,
        lightpink: LightPink, 
        lightblue: LightBlue, 
        lightyellow: LightYellow,
        darkgreen: DarkGreen,
        darkpink: DarkPink,
        darkblue: DarkBlue,
        darkyellow: DarkYellow,
    }

    let defaultTheme = DarkGreen
    if (themeName.startsWith('light')){
        defaultTheme = LightGreen
    }

    return themeMap[themeName] || defaultTheme
}
