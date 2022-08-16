import {ColorInterface, CommonThemeInterface, ExpandedThemeInterface} from '../interfaces'

import {BaseAlerts} from '../alerts'

const Common:CommonThemeInterface = {
    ...BaseAlerts,
    backgroundShade3: '#5b5b5b',
    backgroundShade2: '#979797',
    backgroundShade1: '#dadada',
    backgroundShade0: '#fefefe',
    background: '#f9f9f9',
    text: '#303030',
    type:'Light',
}

const Green:ColorInterface ={
    primary: '#075938',
    primaryVariant: '#139c67',
    secondary: '#0c7384',
    secondaryVariant: '#18aac8',
}

const Pink:ColorInterface ={
    primary: '#d61977',
    primaryVariant: '#cf4f80',
    secondary: '#a643b6',
    secondaryVariant: '#d83ff0',
}

const Blue:ColorInterface ={
    primary: '#0277BD',
    primaryVariant: '#0288D1',
    secondary: '#3949AB',
    secondaryVariant: '#536DFE',
}

const Yellow:ColorInterface ={
    primary: '#906915',
    primaryVariant: '#ffb84b',
    secondary: '#6c5c2d',
    secondaryVariant: '#c1a000',
}

const mergedPrimary = {
    green: Green.primary,
    pink: Pink.primary,
    blue: Blue.primary,
    yellow: Yellow.primary,
}

export const LightGreen: ExpandedThemeInterface = {
    ...Common,
    ...Green,
    mergedPrimary,
    name:'Light Green',
}


export const LightPink: ExpandedThemeInterface = {
    ...Common,
    ...Pink,
    mergedPrimary,
    name:'Light Pink',
}

export const LightBlue: ExpandedThemeInterface = {
    ...Common,
    ...Blue,
    mergedPrimary,
    name:'Light Blue',
}

export const LightYellow: ExpandedThemeInterface = {
    ...Common,
    ...Yellow,
    mergedPrimary,
    name:'Light Yellow',
}