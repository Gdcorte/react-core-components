import { FunctionComponent } from "react"
import { OutputTheme, ShaderManager, TestTheme, ThemeManager } from ".."

import styled from 'styled-components'

const StyledBlock = styled.div`
    height: 1rem;
    padding: 8px;
    margin-top: 2px;
`

const StyledContainer = styled.div`
    width: 10vw;
`

interface PalleteColor {
    colorName: keyof OutputTheme
}

const PalleteColor: FunctionComponent<PalleteColor> = ({
    colorName
}) => {
    const themeManager = new ThemeManager()
    const testingTheme = themeManager.buildTheme(TestTheme)

    const myJsxElement = Object.entries(testingTheme[colorName]).map(([presetName, presetColor]:[string, string])=>{
        console.log(`${colorName}-${presetName}`, presetColor)
        return (
            <StyledBlock 
                key={`${colorName}-${presetName}`} 
                style={{backgroundColor: presetColor, 
                color:ShaderManager.findBestContrast(presetColor, testingTheme.light.base, testingTheme.dark.base)}}>
                {presetName}
            </StyledBlock>
        )
    })

    return (
        <StyledContainer>
            <div>
                {colorName}
                {myJsxElement}
            </div>
        </StyledContainer>
    )
}

export default PalleteColor