import { FunctionComponent, ReactNode } from "react"
import { DropDownListCss } from '../css'
import styled from 'styled-components'
import { DropdownListOrientation } from "../interface"


const StyledList = styled.div`
    ${DropDownListCss}
`
interface ElemListProps {
    children: JSX.Element|JSX.Element[],
    listOrientation?: DropdownListOrientation
}

const ElemList: FunctionComponent<ElemListProps> = ({
    children,
    listOrientation,
}) => {
    return (
        <StyledList 
            className={`dropdown-list open-${listOrientation}`}
        >
            {children}
        </StyledList>
    )
}

ElemList.defaultProps ={
    listOrientation: "down",
}

export default ElemList
