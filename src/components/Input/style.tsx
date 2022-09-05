import {css} from 'styled-components'

export const InputCss = css`
    border: 2px solid ${({ theme: {theme}})=> theme.primary.base };
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;

    background-color: inherit;
    color: ${({ theme: {theme}})=> theme.primary.base };

    border-radius: 5px;
    width: 100%;
    padding-left: 8px;


    :focus-visible{ 
        outline: none; 
        border: 2px dotted ${({ theme: {theme}})=> theme.primary.base };
    }

    :disabled{ 
        border: 2px double ${({ theme: {theme}})=> theme.primary.disabled};
        color: ${({ theme: {theme}})=> theme.primary.disabled};
    }
`