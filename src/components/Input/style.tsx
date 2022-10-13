import {css} from 'styled-components'

export const InputCss = css`
    border: 2px solid ${({ theme: {theme}})=> theme.primary.base };
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;

    background-color: inherit;
    color: ${({ theme: {theme}})=> theme.primary.base };

    border-radius: 5px;


    :focus-visible{ 
        outline: none; 
        border: 2px dotted ${({ theme: {theme}})=> theme.primary.base };
    }

    :disabled{ 
        border: 2px double ${({ theme: {theme}})=> theme.primary.disabled};
        color: ${({ theme: {theme}})=> theme.primary.disabled};
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`