import { FunctionComponent, ReactNode, RefObject } from "react"
import { DropdownContainerCss } from '../css'
import styled from 'styled-components'


const StyledContainer = styled.div`
    ${DropdownContainerCss}
`
interface ElementContainerProps {
    children: ReactNode,
    elementRef?: RefObject<HTMLObjectElement>
}

const ElemContainer:FunctionComponent<ElementContainerProps> = ({
    children,
    elementRef,
}) => {

    return (
        <StyledContainer className="dropdown-container" ref={elementRef}>
            {children}
        </StyledContainer>
    )
}

export default ElemContainer