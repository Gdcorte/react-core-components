import styled from 'styled-components';
import { FontHelper } from '../../../themes';

export const WrapperStyled = styled.div`
    display: flex;
    flex: 1;
    position: relative;
`

export const InputStyled = styled.input`
    border-radius: 5px;
    border: 1px solid ${({ theme: {theme}}) => theme.background.base};
    width: 100%;
    padding-left: 8px;
    color: ${({ theme: {theme}}) =>  FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light]) };

    :focus-visible{
        outline: none;
        border:2px dotted ${({ theme: {theme}}) => theme.background.base};
    }
`

export const IconStyled = styled.div`
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;
    right: 4px;
    top: 0;
    bottom: 0;
    vertical-align: middle;
    border-style: none;
    cursor: pointer;
`
