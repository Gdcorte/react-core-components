import {css} from 'styled-components'

export const InputCss = css`
    border: 2px solid ${({ theme })=> theme.primary };
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;

    background-color: inherit;
    color: ${({ theme })=> theme.primary };

    border-radius: 5px;
    width: 100%;
    padding-left: 8px;


    :focus-visible{ 
        outline: none; 
        border: 2px dotted ${({ theme })=> theme.primary };
    }

    :disabled{ 
        border: 2px double ${({ theme })=> theme.backgroundShade3};
        color: ${({ theme })=> theme.backgroundShade3};
    }
`