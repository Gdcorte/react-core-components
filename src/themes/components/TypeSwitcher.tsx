import { FunctionComponent, SyntheticEvent, useState } from "react";
import { useTheme } from "styled-components";


import styled from 'styled-components'
import { DarkTheme, LightTheme } from "../../icons/theme";

const StyledContainer = styled.div`
    display: flex;
    
    >div {
        cursor: pointer; 
        padding: 8px;
        border-radius: 50%;
        height: 24px;
        width: 24px;

        >svg {
            height: inherit;
            width: inherit;
        }
        :hover{
            background-color: ${({theme: {theme}})=> theme.background.shade4};
        }
    }

`

export interface ThemeSwitcherProps {
    typeChangeCallback: CallableFunction
}

const ThemeSwitcher: FunctionComponent<ThemeSwitcherProps> = ({
    typeChangeCallback,
})=>{
    const {
        theme: { type }
    } = useTheme()

    function changeType(){
        let newType = type=='light' ? 'dark' : 'light'

        typeChangeCallback(newType)
    }
    const TypeIcon = type=='light' ? LightTheme : DarkTheme

    return(
        <StyledContainer
            onClick={changeType}
            className={`theme-type-switcher-${type}`}
        >
            <div>
                <TypeIcon />
            </div>
        </StyledContainer>
    )
}

export default ThemeSwitcher