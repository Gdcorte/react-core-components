import { DateTimeStyled } from './style'
import moment from 'moment'

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
        <DateTimeStyled
            dateFormat={props.dateFormat || 'YYYY/MM/DD'}
            value={moment(initialValue)}
            onChange={momentDateConvert}
            closeOnSelect={true}
            inputProps={{disabled: disabled}}
            {...props}
        />
    )
}

export default ReactDateTime