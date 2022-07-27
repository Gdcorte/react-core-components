import { FunctionComponent, ReactNode, RefObject, SyntheticEvent } from "react"

import { DropDownMenuCss } from '../css'
import styled from 'styled-components'


const StyledMenu = styled.div`
    ${DropDownMenuCss}
`
interface ElemMenuProps {
    children: JSX.Element,
    onClick?: CallableFunction,
    elementRef?: RefObject<HTMLObjectElement>
    elementKey?: string
}

const ElemMenu: FunctionComponent<ElemMenuProps> = ({
    children,
    onClick,
    elementRef,
    elementKey,
}) => {
    function executeClick(event: SyntheticEvent){
        if(onClick){
            onClick(event)
        }
    }
    return (
        <StyledMenu 
            className="dropdown-menu"  
            onClick={executeClick} 
            ref={elementRef} 
            key={elementKey}
            id={elementKey}
        >
            {children}
        </StyledMenu>
    )
}

export default ElemMenu