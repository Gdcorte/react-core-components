import {FunctionComponent, useMemo} from 'react'

import { useState } from 'react'

import { WrapperStyled } from './styles'

import {SimpleInput} from '../'
import { passwordStatus } from '../../../icons/password'

import styled from 'styled-components'
import { SimpleInputInterface } from '../Simple'

export const IconStyled = styled.div`
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 8px;
    right: -16px;
    top: 0;
    bottom: 0;
    vertical-align: middle;
    border-style: none;
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;

        path:last-child{
            fill: ${({theme: {theme}})=> theme.primary.base};
        }
    }
`

export interface PasswordInterface extends SimpleInputInterface { 
}

const Password: FunctionComponent<PasswordInterface> = ({
    ...props
}) =>{
    const [inputType, setinputType] = useState<'text'|'password'>('password')
    const [lockStatus, setlockStatus] = useState(true)
    
    function toggleImgIcon(){
        let newInputStatus: 'text'|'password' = 'password'

        if (inputType =='password'){
            newInputStatus = 'text'
        }
        
        setinputType(newInputStatus)
        setlockStatus(!lockStatus)
    }


    const PasswordIcon = useMemo(
      () => {
        return lockStatus ? passwordStatus.hide : passwordStatus.show
      }, [lockStatus]
    )
    
    

    return(
        <WrapperStyled>
            <SimpleInput 
                {...props}
                type={inputType}
            />
            
            <IconStyled
                className='cursor-pointer'
                onClick={toggleImgIcon}
            >
                <PasswordIcon />
            </IconStyled>
        
        </WrapperStyled>
    )
}

Password.defaultProps = {
    errorMessage: 'Invalid Password',
}

export default Password
