import { useDispatch, useSelector } from 'react-redux'

import {ImageIcon} from 'components/image'

import {changeMode} from 'reduxGlobal/actions'
import {StoreInterface} from 'reduxGlobal'

import styled from 'styled-components';
import { useState } from 'react';

export const ToggleStyled = styled.div`
    padding:8px;
    border: none;
    border-radius: 20%;
    cursor: pointer;

    :hover{
        background-color: ${({ theme }) => theme.backgroundShade2 };
        border: none;
    }
`

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

export const ParagraphStyled = styled.p`
    transition: width 0.8s, visibility 0.5s;

    @media only screen and (max-width:400px) {
        visibility: hidden;
        width:0px;
    }
`


const Theme = ()=>{
    const {mode} = useSelector(
        (state:StoreInterface) => {
            return {
                mode: state.theme.mode,
            }
        }
    )

    const dispatch = useDispatch()

    function changeTheming(){
        let newTheme = (mode =='dark' ? 'light' : 'dark' )
        dispatch(changeMode(newTheme))
    }

    return(
        <>
            <ToggleStyled 
                onClick={changeTheming}
            >
                <ImageIcon 
                    basePath={'/img/components/themes'}
                    localeName={mode}
                    width={20}
                    height={20}
                />
            </ToggleStyled>
        </>
    )
}

export default Theme