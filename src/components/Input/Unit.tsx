import { SimpleInput } from './'
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { SimpleInputInterface } from './Simple';
import { FontHelper } from '../../themes';

export const ContainerStyled = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`

export const UnitStyled = styled.p`
    color: ${({ theme: {theme}}) =>  FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light]) };
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
`

export interface WithUnitInterface extends SimpleInputInterface {
    unitName: string,
}

const WithUnitInput: FunctionComponent<WithUnitInterface> = ({
    unitName,
    ...props
}) => {
    return (
        <ContainerStyled>
            <SimpleInput 
                {...props}
            />
            <UnitStyled>{unitName}</UnitStyled>
        </ContainerStyled>
    )
}

export default WithUnitInput