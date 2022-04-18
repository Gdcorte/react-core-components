import { FunctionComponent } from "react";
import styled from 'styled-components'

export const ContainerStyled = styled.div<{ pointer?: boolean, expand?: boolean, orientation?: string }>`
    ${({ expand }) => expand && 'width: 100%;'};
    margin-bottom: 4px;
    display: flex;
    flex-direction: ${({orientation})=> orientation || 'column'};
`

export const TitleStyled = styled.p<{ bold?: boolean }>`
    color: ${({ theme, bold }) => bold ? theme.primary : theme.text};
    font-weight: ${({ bold }) => bold ? 'bold' : 'unset'};
    font-size: 0.8rem;
    margin: 0;
    margin-right: 8px;
`

export interface InputContainerInterface {
    label:string,
    orientation?: 'column'|'row',
    bold?: boolean,
    key?: string,
    usePointer?: boolean,
    expand?: boolean,
}

const InputContainer:FunctionComponent<InputContainerInterface> = ({ 
    children,
    orientation,
    label,
    bold,
    usePointer,
    expand
}) => {

    return(
        <> 
            <ContainerStyled
                pointer={usePointer}
                expand={expand}
                orientation={orientation}
            >
                
                <TitleStyled 
                    bold={bold}
                >
                    {label}:
                </TitleStyled>
                
                {children}
            </ContainerStyled>
        </>
    )
}

InputContainer.defaultProps = {
    bold: false,
    usePointer: true,
    key:undefined,
}

export default InputContainer