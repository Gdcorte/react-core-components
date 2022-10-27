import { FunctionComponent, HTMLProps } from "react";
import styled from 'styled-components'
import { FontHelper } from "../../themes";

export const ContainerStyled = styled.div<{orientation?: string }>`
    margin-bottom: 4px;
    display: flex;
    flex-direction: ${({orientation})=> orientation || 'column'};
    cursor: default;
`

export const TitleStyled = styled.p<{ bold?: boolean }>`
    color: ${({ theme: {theme}, bold }) => FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};
    font-weight: ${({ bold }) => bold ? 'bold' : 'unset'};
    font-size: 0.8rem;
    margin: 0;
    margin-right: 8px;
`

export interface InputContainerInterface extends HTMLProps<HTMLDivElement> {
    label:string,
    children: JSX.Element | JSX.Element[]
    orientation?: 'column'|'row',
    bold?: boolean,
    key?: string,
}

const Label:FunctionComponent<InputContainerInterface> = ({ 
    children,
    orientation,
    label,
    bold,
    className,
}) => {

    return(
        <> 
            <ContainerStyled
                orientation={orientation}
                className={className}
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

Label.defaultProps = {
    bold: false,
    key:undefined,
}

export default Label