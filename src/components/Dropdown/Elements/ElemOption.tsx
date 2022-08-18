import { FunctionComponent, ReactNode, SyntheticEvent } from "react"
import { DropDownOptionCss } from '../css'
import styled from 'styled-components'


const StyledOption = styled.a`
    ${DropDownOptionCss}
`
interface ElemOptionProps {
    href: string,
    selected?: boolean,
    children: JSX.Element|JSX.Element[],
    onClick?: CallableFunction,
    data?: string,
}

const ElemOption: FunctionComponent<ElemOptionProps> = ({
    href,
    children,
    selected,
    onClick,
    data,
}) => {
    function validHref(link: string | null): boolean{
        if (!link){
            return false
        }

        if(['', '#'].includes(link)){
            return false
        }

        return true
    }

    function clickAction(event: SyntheticEvent){
        let link = event.currentTarget.getAttribute('href')
        
        if (validHref(link)){
            return
        }
        
        event.preventDefault()
        let customData = event.currentTarget.getAttribute('data-string')
        console.log(event.currentTarget)
        if (onClick){
            onClick(customData)
        }
        
    }

    return (
        <StyledOption 
            href={href} 
            selected={selected} 
            onClick={clickAction}
            data-string={`${data || 'no-data'}`}
            className={`dropdown-options`}
        >
            {children}
        </StyledOption>
    )
}

ElemOption.defaultProps = {
    selected: false
}

export default ElemOption