import { useDispatch, useSelector } from 'react-redux'

import { SimpleDropdown } from 'components/dropdown'

import { useTranslation } from 'next-i18next'

// import {ColorLink} from './ColorLink'
// import {storeType} from 'redux/store'

// import {
    // DropDownStyled, 
    // DropDownItemStyled,
    // DropDownMenuStyled,
    // DropDownToggleStyled,
    // ParagraphStyled,
    // TextVariants, 
// } from './style'

// import {changeColor} from '../../../redux/actions/'

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import styled from 'styled-components';
import { ExpandedThemeInterface } from 'themes/interfaces';
import { ColorOption } from 'components/color';
import { changeColor } from 'globalRedux/actions';

export const TextVariants = {
    expanded: {
        opacity: 1,
        display: "flex",
        transition: {
            duration: 0.3,
        }
    },
    collapsed: {
        opacity: 0,
        transitionEnd: {
            display: "none"
        },
        transition:{
            duration: 0.3
        }
    }
};

const Color = ()=>{
    const dispatch = useDispatch()

    const { t } = useTranslation('common')

    const themeContext = useContext(ThemeContext);

    const colorList = Object.keys(themeContext.mergedPrimary)
        .filter(colorName => themeContext.mergedPrimary[colorName] != themeContext.primary)
        .map(colorName =>{
        let colorCode = themeContext.mergedPrimary[colorName]
        return {
            value: colorCode,
            name: colorName,
            label: <ColorOption colorCode={colorCode} />
        }
    })

    function changeColoring(event: any){
        dispatch(changeColor(event))
    }

    return(
        <>
            <SimpleDropdown
                options={colorList}
                selectedOption={<ColorOption colorCode={themeContext.primary} />}
                onSelect={changeColoring}
            />
        </>
    )
}

export default Color