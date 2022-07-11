import { FunctionComponent, ReactNode, SyntheticEvent } from "react"
import { DropDownOptionCss } from '../css'
import styled from 'styled-components'


const StyledOption = styled.a`
    ${DropDownOptionCss}
`
interface ElemOptionProps {
    href: string,
    selected?: boolean,
    children: ReactNode,
    onClick?: CallableFunction,
}

const ElemOption: FunctionComponent<ElemOptionProps> = ({
    href,
    children,
    selected,
    onClick,
}) => {

    function clickAction(event: SyntheticEvent){
        if (onClick){
            onClick(event)
        }
    }

    return (
        <StyledOption 
            href={href} 
            selected={selected} 
            onClick={clickAction}
        >
            {children}
        </StyledOption>
    )
}

ElemOption.defaultProps = {
    selected: false
}

export default ElemOption