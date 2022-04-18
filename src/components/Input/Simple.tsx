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
    top: -24px;
    left: 90%;

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

const SimpleInput = ({
    validInput=true,
    errorMessage='Invalid Input',
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

export default SimpleInput