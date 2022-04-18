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

/**
 *  By Default this method will darken for light themes and lighten for light themes. 
 *  Inverse will reverse the logic
 * @param themeType 
 * @param hexColor 
 * @param shade 
 * @param invert 
 * @returns 
 */
export function applyShade(
    themeType: string, 
    hexColor: string, 
    shade:number, 
    invert: boolean = false,
    opacity: string = 'FF'
){
    shade = (themeType=='Dark'? 1 : -1) *
        (invert ? -1 : 1) *
        shade/100

    let rgb = {
        red: shadeColor(hexColor.slice(1,3), shade),
        green: shadeColor(hexColor.slice(3,5), shade),
        blue: shadeColor(hexColor.slice(5,7), shade),
        alpha: hexColor.slice(7,9) || opacity,
    }

    let newColor: string = `#${rgb.red}${rgb.green}${rgb.blue}${rgb.alpha}`
    
    return newColor
}

function shadeColor(color: string, shade: number){
    let base10Color = convertFromHex(color)
    let colorWithShade = base10Color * (1+shade)

    let newColor = Math.round(colorWithShade).toString(16)
    newColor = newColor.length==1 ? "0"+newColor : newColor
    return newColor
}

function convertFromHex(numberAsString: string){
    return Number("0x"+numberAsString)
}