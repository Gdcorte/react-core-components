import styled, { ThemeConsumer } from 'styled-components'
import { FontHelper } from '../../themes'

import {InputCss} from '../Input/style'

export const StyledDateTimeContainer = styled.div`
    input{
        ${InputCss};
        
        :focus{
            box-shadow: none;
            border: 2px dashed ${({theme: {theme}})=> theme.primary.base};
            background-color: ${({theme: {theme}})=> theme.background.base};
            color: ${({theme: {theme}})=> theme.primary.base};
        }
    }

    .rdtPicker{
        color: ${({theme: {theme}})=> theme.primary.shade3};
        background-color: ${({theme: {theme}})=> theme.background.base};
        border: 2px solid ${({theme: {theme}})=> theme.primary.shade3};
        border-radius: 5px;

        .rdtTimeToggle{
            color: ${({theme: {theme}})=> theme.primary.base};
        }
    }

    div.rdtDays {
        thead {
            color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};
            border-bottom: 1px solid ${({theme: {theme}})=> theme.primary.base};
        }

        tfoot{
            border-top: 1px solid ${({theme: {theme}})=> theme.primary.base};
        }

        th{
            border-bottom: none;
        }

        .rdtPicker th.dow {
        }

        thead tr:first-of-type th {
            color: ${({theme: {theme}})=> theme.primary.base};


            :hover{
                color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.primary.shade3, [theme.fonts.dark, theme.fonts.light])};
                background-color: ${({theme: {theme}})=> theme.primary.shade3};
                border-radius: 5px;
            }

            &.rdtPrev:hover,&.rdtNext:hover{
                border-radius: 50%;
            }
        }

        td.rdtToday:before{
            border-bottom: 7px solid ${({theme: {theme}})=> theme.primary.base};
        }

        td.rdtOld, td.rdtNew{
            color: ${({theme: {theme}})=>theme.background.base} !important;
            cursor: default;

            :hover{
                color: ${({theme: {theme}})=>theme.background.base};
                background-color: ${({theme: {theme}})=>theme.background.base};
            }
        }

        td.rdtActive{
            border-radius: 5px 20px 5px;
            background-color: ${({theme: {theme}})=> theme.primary.shade2};
            color: ${({theme: {theme}})=> theme.background.base};
        }

        td:hover{
            color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.primary.shade3, [theme.fonts.dark, theme.fonts.light])};
            background-color: ${({theme: {theme}})=> theme.primary.shade3};
            border-radius: 5px;
        }
        
        tfoot{
            margin: 4px 0px;
            border-top: 1px solid ${({theme: {theme}})=> theme.primary.base};
        }
    }

    .rdtTime{

        thead {
            color: ${({theme: {theme}})=> theme.primary.base};
            border-bottom: 1px solid ${({theme: {theme}})=> theme.primary.base};
            font-weight: bold;

            td{
                color: ${({theme: {theme}})=> theme.primary.base};
                cursor: pointer;
                
                :hover{
                    color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.primary.shade3, [theme.fonts.dark, theme.fonts.light])};
                    background-color: ${({theme: {theme}})=> theme.primary.shade3};
                    border-radius:5px;
                    font-weight: normal;
                }
            }

        }

        .rdtCount,.rdtCounterSeparator{
            color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};
        }

        .rdtBtn{
            color: ${({theme: {theme}})=> theme.primary.base};
            :hover{
                border-radius: 20px;
                color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.primary.shade3, [theme.fonts.dark, theme.fonts.light])};
                background-color: ${({theme: {theme}})=> theme.primary.shade3};
            }
        }
    }

    .rdtMonths,.rdtYears{
        th{
            border-bottom: none;
        }
        
        thead {
            color: ${({theme: {theme}})=> theme.primary.base};
            border-bottom: 1px solid ${({theme: {theme}})=> theme.primary.base};
        }
        
        td.rdtActive{
            border-radius: 5px 20px 5px;
            background-color: ${({theme: {theme}})=> { return  theme.primary }};
            color: ${({theme: {theme}})=> theme.background.base};
        }

        td{
            :hover{
                color: ${({theme: {theme}})=> theme.background.base};
                background-color: ${({theme: {theme}})=> theme.secondary};
                border-radius:5px;
            }
        }

        thead tr:first-of-type th {
            color: ${({theme: {theme}})=> theme.primary.base};


            :hover{
                color: ${({theme: {theme}})=> theme.background.base};
                background-color: ${({theme: {theme}})=> theme.secondary};
                border-radius: 5px;
            }

            &.rdtPrev:hover,&.rdtNext:hover{
                border-radius: 50%;
            }
        }
    }
`