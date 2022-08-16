import { FunctionComponent, SyntheticEvent, useState } from "react";
import { useTheme } from "styled-components";
import { CarretDown, CarretUp } from "../../icons";

import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    
    >div {
        padding: 8px;
        border-radius: 50%;
        height: 20px;
        width: 20px;

        >svg {
            height: inherit;
            width: inherit;
        }
        :hover{
            background-color: ${({theme: {theme}})=> theme.background.shade1};
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
    const TypeIcon = type=='light' ? CarretUp : CarretDown

    return(
        <StyledContainer
            onClick={changeType}
        >
            <div>
                <TypeIcon />
            </div>
        </StyledContainer>
    )
}

export default ThemeSwitcher