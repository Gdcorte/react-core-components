import { FunctionComponent } from "react";
import { HybridDrowdown } from "../../components/Dropdown";
import styled, { useTheme } from 'styled-components'
import { DropdownOptionProps } from "../../components/Dropdown/interface";

const StyledColorBlock = styled.div<{
    color: string,
}>`
width: 25px;
height: 25px;
border-radius: 50%; 
background-color: ${({color})=>color};

`

const StyledContainer = styled.div`
    .dropdown-options {
        justify-content: center;
    }
`

export interface ColorSwitcherProps {
    newColorCallback: CallableFunction,
}

const ColorSwitcher: FunctionComponent<ColorSwitcherProps> = ({
    newColorCallback
})=>{

    function changeToNewColor(newColor: string){
        newColorCallback(newColor)
        return
    }

    const {theme, presets} = useTheme()

    const colors = Object.entries(presets).filter(
            ([_, colorValue]) => colorValue != theme.primary.base
        ).map( ([colorName, colorValue])=>{
        
        let colorOption: DropdownOptionProps = {
            label: <StyledColorBlock color={colorValue} />,
            href: '',
            onClick: changeToNewColor,
            data: colorName
        }

        return colorOption
    })
    
    return(
        <StyledContainer>
            <HybridDrowdown
                label={<StyledColorBlock color={theme.primary.base} />}
                options={colors}
                showCarret={true}
                listOrientation={'down'}
            />
        </StyledContainer>
    )
}

export default ColorSwitcher