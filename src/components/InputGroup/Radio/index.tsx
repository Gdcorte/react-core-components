import { FunctionComponent, useEffect, useState } from 'react'
import {LabelStyled, CaptionStyled, RadioContainer} from './styles'

import RadioMark from './Checkmark'

export interface RadioInputInterface {
    options: {
        label: string,
        value: string,
    }[]
    defaultValue?: string,
    changeCallback: CallableFunction,
}

const RadioButton: FunctionComponent<RadioInputInterface> = ({
    options,
    defaultValue,
    changeCallback,
    ...props
}) =>{
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined)


    useEffect(() => {
      setSelectedValue(defaultValue)

    }, [defaultValue])
    

    function changeSelected(value: string){
        setSelectedValue(value)
        changeCallback(value)
    }

    return(
        <RadioContainer>
            {options.map(singleOption => {
                return(
                    <LabelStyled
                        key={`radio-${singleOption.value}`}
                    >
                        <RadioMark
                            checked={selectedValue == singleOption.value} 
                            onChange={()=>changeSelected(singleOption.value)}
                            {...props}
                        />

                        <CaptionStyled 
                            checked={selectedValue == singleOption.value}>
                            {singleOption.label}
                        </CaptionStyled>
                    </LabelStyled>
                )
            })}
        </RadioContainer>
    )
}

export default RadioButton