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

interface ThemeTypes {
    light: string,
    dark: string,
}
export const defaultTypes = ['light', 'dark']
interface ThemeColors {
    primary: string,
    secondary: string,
}
export const defaultColors = ['primary', 'secondary']

interface ThemeAlertColors {
    info: string,
    success: string,
    warning: string,
    danger: string,
}
export const defaultAlerts = ['info', 'success', 'warning', 'danger']


interface InputTheme extends ThemeTypes, ThemeColors, ThemeAlertColors {}

const BaseTypes: ThemeTypes = {
    light: '#fefefe',
    dark: '#2a2a2a',
}

const BaseAlerts: ThemeAlertColors = {
    info: '#70bbfd',
    success: '#4ce1b6',
    warning: '#f6da6e',
    danger: '#ff4861',
}

export const TestTheme: InputTheme = {
    ...BaseTypes,
    ...BaseAlerts,
    primary: '#B4F8C8',
    secondary: '#b4f8ea',
}

interface ShadePresets {
    shade1: string,
    shade2: string,
    shade3: string,
    shade4: string,
    shade5: string,
}

interface ActionablePresets {
    hover: string,
    selected: string,
    focus: string,
}

interface OutputTypesPresets extends ShadePresets {
    base: string,
};
interface OutputThemeTypes {
    light: OutputTypesPresets,
    dark: OutputTypesPresets,
}

interface OutputColorPresets extends ShadePresets, ActionablePresets {
    base: string,
};
interface OutputAlertPresets extends ActionablePresets {
    base: string,
};
interface OutputThemeColors {
    primary: OutputColorPresets,
    secondary: OutputColorPresets,
}

interface OutputThemeAlerts {
    info: OutputAlertPresets,
    success: OutputAlertPresets,
    warning: OutputAlertPresets,
    danger: OutputAlertPresets,
}

export interface OutputTheme extends OutputThemeTypes, OutputThemeColors, OutputThemeAlerts {};

interface RgbColor{
    [key: string]: number,
    red: number,
    green: number,
    blue:  number,
}
export class ShaderManager {

    static hexToDecimal(hexColorString: string): number[]{
        let hexColor = hexColorString.slice(1).match(/.{1,2}/g);
        
        if (!hexColor){
            throw new Error('Invalid Color')
        }

        return hexColor.map( (value) => parseInt(value, 16) )
    }

    static decimalToHex(decimalColor: number[]): string{
        let hexColor: string = decimalColor.map( (value) => value.toString(16) ).join('')
        
        return `#${hexColor}`
    }

    static mix(originalColor: string, baseColor: string, weight: number): string{
        let originalColorDecimal = this.hexToDecimal(originalColor)
        let baseColorDecimal = this.hexToDecimal(baseColor)

        let newColor = originalColorDecimal.map( (value, index) => {
            // We want to keep alpha untouched here
            if (index >=3){
                return value
            }

            return Math.round( value*(1-weight) + baseColorDecimal[index]*weight )
        })

        return this.decimalToHex(newColor)
    }

    static tint(originalColor: string, weight: number): string{  
       return this.mix(originalColor, '#ffffff', weight)
    }

    static shade(originalColor: string, weight: number): string{
       return this.mix(originalColor, '#000000', weight)
    }

    static brightnessCalc(rawColor: number[]): number{
        const rgbColor = this.rgbColor(rawColor)
        
        // Source: https://www.w3.org/TR/AERT/#color-contrast
        return ((rgbColor.red * .299) + (rgbColor.green*.587) + (rgbColor.blue * .114)) / 255
    }

    static rgbColor(rawColor: number[]):RgbColor {
        return {
            red: rawColor[0],
            green: rawColor[1],
            blue: rawColor[2],
        }
    }

    static autoMix(originalColor: string, weight: number): string{
        let originalColorDecimal = this.hexToDecimal(originalColor)
        const brightness = this.brightnessCalc(originalColorDecimal)

        if (brightness>=.5){
            return this.shade(originalColor, weight)
        }

        return this.tint(originalColor, weight)
    }
    
    static autoMixReverse(originalColor: string, weight: number): string{
        let originalColorDecimal = this.hexToDecimal(originalColor)
        const brightness = this.brightnessCalc(originalColorDecimal)

        if (brightness<.5){
            return this.shade(originalColor, weight)
        }

        return this.tint(originalColor, weight)
    }

    static getLuminance(rawColor: string): number{
        // Source: https://www.w3.org/TR/WCAG20/#audiodescdef
        let colorDecimal = this.hexToDecimal(rawColor)
        const rgbColor = this.rgbColor(colorDecimal)

        // Normalize
        Object.keys(rgbColor).map((value:string) =>{
            let intermediateColor = rgbColor[value]/255
            rgbColor[value] = (intermediateColor <= 0.03928) ? intermediateColor/12.92 : Math.pow(((intermediateColor+0.055)/1.055), 2.4)
        })

        return  0.2126 * rgbColor.red + 0.7152 * rgbColor.green + 0.0722 * rgbColor.blue
        
    }

    static contrastChecker(luminance1:number, luminance2: number): number{
        return (Math.max(luminance1,  luminance2) + 0.05) / (Math.min(luminance1,  luminance2) + 0.05)
    }

    static findBestContrast(originalColor: string, light: string, dark: string): string {
        let originalLuminance = this.getLuminance(originalColor)
        let lightLuminance = this.getLuminance(light)
        let darkLuminance = this.getLuminance(dark)

        let lightContrast = this.contrastChecker(lightLuminance, originalLuminance)
        let darkContrast = this.contrastChecker(darkLuminance, originalLuminance)

        if (lightContrast >= darkContrast){
            return light;
        }

        return dark;
    }
}



export class ThemeManager {

    getTheme(){

    }

    buildTheme(inputTheme: InputTheme): OutputTheme{
        let result: any = {}
        
        Object.entries(inputTheme).map(([key, base]:[string, string]) =>{

            let shades: ShadePresets = this.buildShades(base)
            let actionables: ActionablePresets = this.buildActionables(base)
            
            if (defaultTypes.includes(key)){
                result[key]= {
                    base,
                    ...shades,
                }
                return
            }

            if (defaultAlerts.includes(key)){
                result[key]= {
                    base,
                    ...actionables,
                }
                return
            }

            let expandedColorPreset: OutputColorPresets = {
                base,
                ...shades,
                ...actionables,
            }
            result[key]= expandedColorPreset;
            return

        })

        console.log(result)
        return result as OutputTheme
    }

    buildShades(base: string): ShadePresets{
        let shadedColor: ShadePresets = {
            shade1: '#ffffff',
            shade2: '#ffffff',
            shade3: '#ffffff',
            shade4: '#ffffff',
            shade5: '#ffffff',
        }

        for (let index=1; index<=5; index++){
            let shadeKey = `shade${index}` as keyof ShadePresets
            shadedColor[shadeKey] = ShaderManager.autoMix(base, index/10)
        }

        return shadedColor

    }

    buildActionables(base: string): ActionablePresets{
        let actionableColor: any = {} 
        let actionableWeights = {
            hover: .2,
            focus: .4,
            selected: .6,
        }

        Object.entries(actionableWeights).map(([action, weight]:[string, number])=>{
            actionableColor[action] = ShaderManager.autoMix(base, weight)
        })

        return actionableColor as ActionablePresets
    }
}

export function fontColorPicker(){

}