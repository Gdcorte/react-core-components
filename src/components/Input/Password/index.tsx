import {FunctionComponent} from 'react'

// import styles from '../../../../styles/Inputs.module.css'
import { useState } from 'react'

import { WrapperStyled, IconStyled } from './styles'

import {SimpleInput} from '../'

import { PasswordIcon } from './Icon'

export interface PasswordInterface { 
    validInput?: boolean,
    errorMessage?: string,
    value: string,
    onChange: CallableFunction,
}

const Password: FunctionComponent<PasswordInterface> = ({
    validInput,
    errorMessage,
    ...props
}) =>{
    const [inputType, setinputType] = useState('password')
    const [lockStatus, setlockStatus] = useState(true)
    
    function toggleImgIcon(){
        let newInputStatus = 'password'

        if (inputType =='password'){
            newInputStatus = 'text'
        }

        setinputType(newInputStatus)
        setlockStatus(!lockStatus)
    }

    return(
        <WrapperStyled>
            <SimpleInput 
                {...props}
                validInput={validInput}
                type={inputType}
            />
            
            <IconStyled
                className='cursor-pointer'
                onClick={toggleImgIcon}
            >
                <PasswordIcon locked={lockStatus} />
            </IconStyled>
        
        </WrapperStyled>
    )
}

Password.defaultProps = {
    validInput: true,
    errorMessage: '',
}

export default Password
