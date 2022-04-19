import { FunctionComponent } from 'react';
import styled from 'styled-components';
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
    left: 2%;

    div:first-child {
        top: 4px;
        left: 6px;

        position: absolute;
        width: 0; 
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        
        border-top: 10px solid ${({ theme }) =>  theme.danger.main };
    }

    div:last-child {
        background-color: ${({ theme }) =>  theme.danger.main };
        color: ${({ theme }) =>  theme.danger.contrast };
        padding: 2px;
        border: 2px solid ${({ theme }) =>  theme.danger.main };
        border-radius: 8px;
        position: absolute;
        top: -20px;
        width: max-content;
    }
`

export interface SimpleInputInterface {
    validInput?: boolean,
    errorMessage?: string,
    disabled?: boolean,
    type?: 'text'|'password'|'number'|'checkbox',
}

const SimpleInput: FunctionComponent<SimpleInputInterface> = ({
    validInput,
    errorMessage,
    ...props
}) => {
    return (
        <InputContainerStyled>
            <InputStyled 
                {...props}
            />
            {!validInput && 
                <SpanStyled>
                    <div></div>
                    <div>{errorMessage}</div>
                </SpanStyled>
            }
        </InputContainerStyled>
    )
}

SimpleInput.defaultProps = {
    validInput: true,
    errorMessage: 'Invalid Input',
    disabled: false,
    type: 'text',
}

export default SimpleInput