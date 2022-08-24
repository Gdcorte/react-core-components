import { FunctionComponent, useEffect, useState } from 'react'
import {LabelStyled, CaptionStyled, RadioContainer} from './styles'

import RadioMark from './Radiomark'

export interface RadioInputInterface {
    options: {
        label: string | JSX.Element,
        value: string,
    }[]
    defaultValue?: string,
    useRow?: boolean,
    changeCallback: CallableFunction,
}

const RadioButton: FunctionComponent<RadioInputInterface> = ({
    options,
    defaultValue,
    changeCallback,
    useRow,
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

    const RadioOptions = options.map(singleOption => {
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
    })

    return(
        <RadioContainer
            useRow={useRow}
        >
            {RadioOptions}
        </RadioContainer>
    )
}

export default RadioButton