import { FunctionComponent, ReactNode } from "react"
import { DropDownListCss } from '../css'
import styled from 'styled-components'


const StyledList = styled.div`
    ${DropDownListCss}
`
interface ElemListProps {
    children: ReactNode
}

const ElemList: FunctionComponent<ElemListProps> = ({
    children
}) => {
    return (
        <StyledList className="dropdown-list">
            {children}
        </StyledList>
    )
}

export default ElemList
