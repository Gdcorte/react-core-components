import { StyledDateTimeContainer } from './style'
import moment from 'moment'
import DateTime from 'react-datetime'

import "react-datetime/css/react-datetime.css";
import { FunctionComponent } from 'react';
import { DatetimepickerProps } from 'react-datetime';

export interface DateTimeInterface extends DatetimepickerProps {
    disabled: boolean
    onChangeAsDate: CallableFunction,
}

export const ReactDateTime: FunctionComponent<DateTimeInterface> = ({ 
    initialValue, 
    onChangeAsDate, 
    disabled, 
    ...props 
}) => {

    function momentDateConvert(value: string | moment.Moment){
        if (typeof value === 'string'){
            onChangeAsDate(new Date(value))
            return
        }

        onChangeAsDate( value.toDate() )
    }

    return(
        <StyledDateTimeContainer>
            {/* @ts-ignore: Don't know how to properly solve this (DateTime cannot be used as JSX.Element) */}
            <DateTime
                dateFormat={props.dateFormat || 'YYYY/MM/DD'}
                value={moment(initialValue)}
                onChange={momentDateConvert}
                closeOnSelect={true}
                inputProps={{disabled: disabled}}
                {...props}
            />
        </StyledDateTimeContainer>
    )
}

export default ReactDateTime