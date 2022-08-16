import { css } from 'styled-components'
import { FontHelper } from '../../../themes'

const HoverBehaviuour = css`
    :hover {
        background-color: transparent;
        color: ${({theme: {theme}})=> theme.primary.base};
        text-decoration-style: dotted;
        text-decoration-line: underline;
        text-underline-offset: 4px;
        
        svg {
            fill: ${({theme: {theme}})=> theme.primary.base};
        }
    }
`

const selectedBehaviour = css<{
    selected?:boolean, 
}>`
    ${({selected, theme: {theme}})=> selected && `
        color: ${theme.primary.shade1};

        svg {
            fill: ${theme.primary.shade1};
        }
    `}
`

export const DropdownContainerCss = css`
    position: relative; 
    width: fit-content;
    display: flex;

    
`

export const DropdownSubContainerCss = css`
    position: relative; 
    display: flex;

    .dropdown-menu {
        width: 100%;
        border-radius: 0px;

        :hover {
            background-color: ${({theme: {theme}})=> theme.background.shade1};
        }
    }
`

export const DropDownMenuCss = css`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 8px;
    z-index: 0;
    font-size: 1rem;
    color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};

    div {
        margin: 0px 8px 0px 0px;
    }

    svg {
        fill: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};
        width: 0.8rem;
        height: 0.8rem;
    }

    ${HoverBehaviuour};
    ${selectedBehaviour};

`

export const DropDownListCss = css`
    position: absolute;
    max-width: min-content;
    min-width: -webkit-fill-available;
    background-color: ${({theme: {theme}})=> theme.background.base};
    color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};
    padding: 6px 0px;
    border-radius: 5px;
    border: 1px solid ${({theme: {theme}})=> theme.background.shade1};
    z-index:10000;

    &.open-up{
        bottom: 100%;
        display: flex;
        flex-direction: column-reverse;
    }

    &.open-down{
        top: 100%;
    }

    &.open-left{
        right: 100%;
    }

    &.open-right{
        left: 100%;
    }
`

export const DropDownOptionCss = css`
    display: flex;
    padding: 4px;
    color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};
    text-decoration: none;

    ${HoverBehaviuour};
    ${selectedBehaviour};

    :hover{
        background-color: ${({theme: {theme}})=> theme.background.shade1};
    }
`