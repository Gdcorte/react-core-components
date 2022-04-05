import {css} from 'styled-components'

export const InputCss = css`
    border: 2px solid ${({ theme })=> theme.primary };

    background-color: ${({ theme })=> theme.background };
    color: ${({ theme })=> theme.primary };s

    border-radius: 5px;
    width: 100%;
    padding-left: 8px;


    :focus-visible{ 
        outline: none; 
        border: 2px dotted ${({ theme })=> theme.primary };
    }

    :disabled{ 
        border:none; 
        background-color: ${({ theme })=> theme.alternate };
    }
`