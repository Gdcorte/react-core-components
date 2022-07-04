import { css } from 'styled-components'

const HoverBehaviuour = css`
    :hover {
        background-color: ${({theme})=> theme.backgroundShade1};
        color: ${({theme})=> theme.primary};
        text-decoration-style: dotted;
        text-decoration-line: underline;
        text-underline-offset: 4px;
        
        svg {
            color: ${({theme})=> theme.primary};
        }
    }
`

const selectedBehaviour = css<{
    selected?:boolean, 
}>`
    ${({selected, theme})=> selected && `
        color: ${theme.primary};
    `}
`

export const DropdownContainerCss = css`
    position: relative; 
    width: fit-content;
    display: flex;
`

export const DropDownMenuCss = css`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 8px;
    z-index: 0;
    
    svg {
        color: ${({theme})=> theme.backgroundShade0};
        width: 20px;
        height: 20px;
    }

    ${HoverBehaviuour};
    ${selectedBehaviour};
`

export const DropDownListCss = css`
    position: absolute;
    max-width: min-content;
    min-width: -webkit-fill-available;
    background-color: ${({theme})=> theme.background};
    color: ${({theme})=> theme.text};
    padding: 6px 0px;
    border-radius: 5px;
    border: 1px solid ${({theme})=> theme.backgroundShade2};
    z-index:10000;
    top: 100%;
`

export const DropDownOptionCss = css`
    display: flex;
    padding: 4px;
    color: ${({theme})=> theme.text};
    text-decoration: none;

    ${HoverBehaviuour};
    ${selectedBehaviour};
`