import styled from 'styled-components';
import { FontHelper } from '../../../themes';

export const LabelStyled = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const CaptionStyled = styled.p<{checked: boolean}>`
    color: ${({theme: {theme}, checked})=> checked ? theme.primary.shade3 : FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};
    margin-left: 6px;
`
