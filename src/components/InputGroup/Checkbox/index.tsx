import { FunctionComponent, useState } from 'react'
import {LabelStyled, CaptionStyled} from './styles'

import Checkmark from './Checkmark'

export interface CheckboxInputInterface {
    label: string | JSX.Element,
    defaultChecked?: boolean,
    changeCallback: CallableFunction,
}

const CheckboxInbox: FunctionComponent<CheckboxInputInterface> = ({
    changeCallback,
    label,
    defaultChecked,
}) =>{

    const [checked, setChecked] = useState(defaultChecked)

    function changeState(){
        let checkState = !checked
        setChecked(checkState)

        changeCallback(checkState)
    }

    return(
        <>
            <LabelStyled 
            >
                <Checkmark
                    checked={checked}
                    onChange={changeState}
                />

                <CaptionStyled 
                    className={'margin-left'}
                    checked={checked || false}
                >
                    {label}
                </CaptionStyled>
            </LabelStyled>
        </>
    )
}

CheckboxInbox.defaultProps = {
    defaultChecked: false,
}

export default CheckboxInbox