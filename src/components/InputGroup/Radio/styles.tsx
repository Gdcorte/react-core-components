import styled from 'styled-components';
import { FontHelper } from '../../../themes';

export const LabelStyled = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const CaptionStyled = styled.p<{checked:boolean}>`
    color: ${({theme: {theme}, checked})=> checked ? theme.primary.base : FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};
    margin-left: 6px;
`

export const RadioContainer = styled.div<{useRow?: boolean}>`
    display: flex;
    flex-direction: column;

    ${({useRow})=>{
        if(useRow){
            return (`
                flex-direction:row;

                label {
                    margin-right: 20px;
                }
            `)
        }
    }}
`