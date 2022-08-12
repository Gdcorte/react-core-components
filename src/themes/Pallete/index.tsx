import { FunctionComponent } from "react"
import { OutputTheme, TestTheme, ThemeManager } from ".."
import PalleteColor from "./PalleteColor"
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    >div {
        margin-right: 16px;
    }
`

const PalleteCreator: FunctionComponent = ({}) => {

    return (
        <StyledContainer>  
            <PalleteColor colorName={"light" as keyof OutputTheme} />
            <PalleteColor colorName={"dark" as keyof OutputTheme} />

            <PalleteColor colorName={"primary" as keyof OutputTheme} />
            <PalleteColor colorName={"secondary" as keyof OutputTheme} />

            <PalleteColor colorName={"info" as keyof OutputTheme} />
            <PalleteColor colorName={"success" as keyof OutputTheme} />
            <PalleteColor colorName={"warning" as keyof OutputTheme} />
            <PalleteColor colorName={"danger" as keyof OutputTheme} />
        </StyledContainer>
    )
}

export default PalleteCreator