import { FunctionComponent, SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontHelper } from '../../themes';
import { InputCss } from './style'


const InputContainerStyled = styled.div`
    width: inherit;
    position: relative;
    
`

const InputStyled = styled.input`
    ${InputCss}


`

const SpanStyled = styled.span`
    position: relative;
    top: -30px;
    left: 0%;

    div:first-child {
        top: 4px;
        left: 6px;

        position: absolute;
        width: 0; 
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        
        border-top: 10px solid ${({ theme: {theme} }) =>  theme.danger.base };
    }

    div:last-child {
        background-color: ${({ theme: {theme} }) =>  theme.danger.base };
        color: ${({ theme: {theme} }) =>  FontHelper.findBestContrast(theme.danger.base, [theme.fonts.dark, theme.fonts.light]) };
        padding: 2px;
        border: 2px solid ${({ theme: {theme} }) =>  theme.danger.base };
        border-radius: 8px;
        position: absolute;
        top: -20px;
        width: max-content;
    }
`

export interface SimpleInputInterface {
    useValue?: string,
    onValueChange: CallableFunction,
    useValidator?: CallableFunction,
    errorMessage?: string,
    disabled?: boolean,
    className?: string,
    autocomplete?: string,
    type?: 'text'|'password'|'number'|'checkbox',
    inputmode?: "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal",
}

const SimpleInput: FunctionComponent<SimpleInputInterface> = ({
    useValue,
    onValueChange,
    useValidator,
    errorMessage,
    disabled,
    className,
    type,
    autocomplete,
    inputmode,
}) => {
    const [validInput, setvalidInput] = useState(true)
    const [currValue, setCurrValue] = useState(useValue || '')

    function updateValue(event: SyntheticEvent<HTMLInputElement>){
        let newValue = event.currentTarget.value

        if (useValidator){
            setvalidInput(useValidator(newValue))
        }

        onValueChange(newValue)
        setCurrValue(newValue)
    }

    useEffect(() => {
        if (useValidator){
            setvalidInput(useValidator(useValue))
        }
    }, [])

    return (
        <InputContainerStyled>
            <InputStyled 
                className={`InputElement ${className || ""}`} 
                disabled={disabled}
                type={type}
                value={currValue}
                onChange={updateValue}
                autoComplete={autocomplete}
                inputMode={inputmode}
            />
            {!validInput && 
                <SpanStyled className={`InputErrorMessage`}>
                    <div></div>
                    <div>{errorMessage}</div>
                </SpanStyled>
            }
        </InputContainerStyled>
    )
}

SimpleInput.defaultProps = {
    errorMessage: 'Invalid Input',
    disabled: false,
    type: 'text',
    autocomplete: 'enabled',
}

export default SimpleInput