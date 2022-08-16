import { FunctionComponent, MouseEventHandler, ReactNode } from "react"
import { DropdownSubContainerCss } from '../css'
import styled from 'styled-components'


const StyledSubContainer = styled.div`
    ${DropdownSubContainerCss}
`
interface ElementSubContainerProps {
    children: JSX.Element|JSX.Element[],
    className?: string,
    mouseEnter?: MouseEventHandler<HTMLDivElement>,
    mouseLeave?: MouseEventHandler<HTMLDivElement>,
}

const ElemContainer:FunctionComponent<ElementSubContainerProps> = ({
    children,
    className,
    mouseEnter,
    mouseLeave,
}) => {

    return (
        <StyledSubContainer 
            className={`dropdown-subcontainer ${className}`}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {children}
        </StyledSubContainer>
    )
}

export default ElemContainer