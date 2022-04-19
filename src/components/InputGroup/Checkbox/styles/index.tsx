import styled from 'styled-components';

export const LabelStyled = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const CaptionStyled = styled.p<{checked: boolean}>`
    color: ${({theme, checked})=> checked ? theme.primary : theme.text};
    font-size: 12px;
    margin-left: 6px;
`
