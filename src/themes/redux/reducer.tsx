import { CHANGE_THEME, CHANGE_COLOR } from 'themes/redux/actions'

import {ThemeActionsInterface, ThemeStoreInterface} from 'themes/redux/interface'
import {ThemeStoreInitial} from 'themes/redux'

export const themeReducer = (
    state: ThemeStoreInterface = ThemeStoreInitial, 
    action: ThemeActionsInterface
)=>{
    switch (action.type){
        case CHANGE_THEME:
            return changeThemeReducer(state, action.mode)
        case CHANGE_COLOR:           
            return changeColorReducer(state, action.color) 
        default: 
            return state
    }
}

const changeThemeReducer = (
    curr_state:ThemeStoreInterface, 
    newTheme: string
) =>{
    return {
        ...curr_state,
        mode: newTheme
    }
}

const changeColorReducer = (
    curr_state: ThemeStoreInterface, 
    newColor: string
) =>{
    return {
        ...curr_state,
        color: newColor
    }
}