import styled from "styled-components"
import { ButtonColorInterface } from "./defaultColors";

export const ButtonStyled = styled.button<{
    colors:ButtonColorInterface, 
    inverse?:boolean, 
    edges?: string, 
    edgeSize?:string,
    fontSize?: string,
}>`
    padding: 8px;
    font-size: ${({fontSize})=> fontSize || '1rem'};
    background-color: ${({colors, inverse}) => inverse ? 'transparent' : colors.background};
    color: ${({colors, inverse}) => inverse ? colors.actionableColor : colors.color};
    border: medium double ${({colors, inverse}) => inverse ? colors.background : 'transparent'};
    ${({edges, edgeSize})=>{
        switch(edges){
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
                    width: ${edgeSize || '80px'};
                    height: ${edgeSize || '80px'};
                `;
            default: // Defaults to 'rectangle'
                return 'border-radius: 5px;';
        }
    }}


    :hover,
    :focus{ 
        background-color: ${({colors, inverse}) => inverse ? colors.background : 'transparent'};
        color: ${({colors, inverse}) => inverse ? colors.color : colors.actionableColor};
        border: medium double ${({colors, inverse}) => inverse ? 'transparent' : colors.background};
    }

    :focus{
        background-color: ${({colors, inverse}) => inverse ? colors.focused : 'transparent'};
        border: medium double ${({colors, inverse}) => inverse ? 'transparent' : colors.focused};
    }

    :disabled{
        background-color: ${({colors, inverse}) => inverse ? 'transparent' : `${colors.background}30`};
        color: ${({colors}) => colors.color}30;

        border: medium double ${({colors, inverse}) => inverse ? `${colors.background}30` : 'transparent'};
    }
` 