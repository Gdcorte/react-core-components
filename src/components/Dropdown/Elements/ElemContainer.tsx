import { FunctionComponent, MouseEventHandler, ReactNode, RefObject } from "react"
import { DropdownContainerCss } from '../css'
import styled from 'styled-components'


const StyledContainer = styled.div`
    ${DropdownContainerCss}
`
interface ElementContainerProps {
    children: JSX.Element|JSX.Element[],
    elementRef?: RefObject<HTMLObjectElement>
    mouseEnter?: MouseEventHandler<HTMLDivElement>,
    mouseLeave?: MouseEventHandler<HTMLDivElement>,
}

const ElemContainer:FunctionComponent<ElementContainerProps> = ({
    children,
    elementRef,
    mouseEnter,
    mouseLeave
}) => {

    return (
        <StyledContainer 
            className="dropdown-container" 
            ref={elementRef}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {children}
        </StyledContainer>
    )
}

export default ElemContainer