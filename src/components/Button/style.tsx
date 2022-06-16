import styled, {css} from "styled-components"
import { ButtonColorInterface } from "./defaultColors";


const buttonHover = css<{
    colors:ButtonColorInterface, 
    inverse?:boolean, 
}>`
    :hover{ 
        background-color: ${({colors, inverse}) => inverse ? 'transparent' : colors.hover.bg };
        color: ${({colors, inverse}) => inverse ? colors.hover.bg : colors.hover.text};
        border: medium double ${({colors, inverse}) => inverse ? colors.hover.bg : 'transparent'};
    }
`

const buttonClick = css<{
    colors:ButtonColorInterface, 
    inverse?:boolean, 
}>`
    :active{
        background-color: ${({colors, inverse}) => inverse ? 'transparent' : colors.click.bg};
        border: medium double ${({colors, inverse}) => inverse ? colors.click.bg : 'transparent'};
        color: ${({colors, inverse}) => inverse ? colors.click.bg : colors.click.text};
    }
`

const buttonFocus = css<{
    colors:ButtonColorInterface, 
    inverse?:boolean, 
}>`
    :focus{ 
        background-color: ${({colors, inverse}) => inverse ? 'transparent' : colors.focus.bg};
        color: ${({colors, inverse}) => inverse ? colors.focus.bg : colors.focus.text};
        border: medium double ${({colors, inverse}) => inverse ? colors.focus.bg : 'transparent'};
    }
`

const buttonDisabled = css<{
    colors:ButtonColorInterface, 
    inverse?:boolean, 
}>`
    :disabled{
        background-color: ${({colors, inverse}) => inverse ? 'transparent' : colors.disabled.bg};
        color: ${({colors, inverse}) => inverse ? colors.disabled.bg : colors.disabled.text};

        border: medium double ${({colors, inverse}) => inverse ? colors.disabled.bg : 'transparent'};
    }
`

const buttonBaseStyle = css<{
    colors:ButtonColorInterface, 
    inverse?:boolean, 
    shape?: string, 
    radius?:string,
    fontSize?: string,
    disableFocus?: boolean,
}>`
    padding: 8px;
    font-size: ${({fontSize})=> fontSize || '1rem'};
    background-color: ${({colors, inverse}) => inverse ? 'transparent' : colors.main.bg};
    color: ${({colors, inverse}) => inverse ? colors.main.bg : colors.main.text};
    border: medium double ${({colors, inverse}) => inverse ? colors.main.bg : 'transparent'};
    ${({shape, radius})=>{
        switch(shape){
            case 'pill':
                return 'border-radius: 50px;';
            case 'oval':
                return `
                    border-radius: 50%;
                    padding: 8px 12px;
                `;
            case 'round':
                return `
                    border-radius: 50%;
                    width: ${radius || '80px'};
                    height: ${radius || '80px'};
                `;
            default: // Defaults to 'rectangle'
                return 'border-radius: 5px;';
        }
    }}
`

export const ButtonStyled = styled.button<{
    colors:ButtonColorInterface, 
    inverse?:boolean, 
    shape?: string, 
    radius?:string,
    fontSize?: string,
    disableFocus?: boolean,
}>`
    ${buttonBaseStyle}
    
    ${buttonHover}

    ${({disableFocus})=> !disableFocus && buttonFocus}

    ${buttonClick}

    ${buttonDisabled}
` 