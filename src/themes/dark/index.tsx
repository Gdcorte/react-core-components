import {ColorInterface, MergedInterface, ExpandedThemeInterface, CommonThemeInterface} from '../interfaces'

import {BaseAlerts} from '../alerts'

const Common:CommonThemeInterface = {
    ...BaseAlerts,
    backgroundShade3: '#808080',
    backgroundShade2: '#595959',
    backgroundShade1: '#474747',
    backgroundShade0: '#060606',
    background: '#2a2a2a',
    text: '#fefefe',
    type: 'Dark',
}

const Green:ColorInterface ={
    primary: '#B4F8C8',
    primaryVariant: '#58d980',
    secondary: '#b4f8ea',
    secondaryVariant: '#43d8b6',
}

const Pink:ColorInterface ={
    primary: '#ffaaff',
    primaryVariant: '#FFAEBC',
    secondary: '#ddaaff',
    secondaryVariant: '#dd7aff',
}

const Blue:ColorInterface ={
    primary: '#A0E7E5',
    primaryVariant: '#00b4ac',
    secondary: '#d3ffff',
    secondaryVariant: '#89c4ff',
}

const Yellow:ColorInterface ={
    primary: '#ffefaa',
    primaryVariant: '#eedd6c',
    secondary: '#ccbbaa',
    secondaryVariant: '#FBE7C6',
}

const mergedPrimary: MergedInterface = {
    green: Green.primary,
    pink: Pink.primary,
    blue: Blue.primary,
    yellow: Yellow.primary,
}

export const DarkGreen: ExpandedThemeInterface = {
    ...Common,
    ...Green,
    mergedPrimary,
    name:'Dark Green',
}

export const DarkPink: ExpandedThemeInterface = {
    ...Common,
    ...Pink,
    mergedPrimary,
    name:'Dark Pink',
}

export const DarkBlue: ExpandedThemeInterface = {
    ...Common,
    ...Blue,
    mergedPrimary,
    name:'Dark Blue',
}

export const DarkYellow: ExpandedThemeInterface = {
    ...Common,
    ...Yellow,
    mergedPrimary,
    name:'Dark Yellow',
}