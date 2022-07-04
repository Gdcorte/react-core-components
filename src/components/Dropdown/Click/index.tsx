import { FunctionComponent, useRef } from 'react';
import { DropdownMenuProps } from '../interface';
import {  ElemDropdownContainer } from '../Elements'
import {default as ElemDropdown } from './Dropdown'

export const ClickDropdown: FunctionComponent<DropdownMenuProps> = ({
    label,
    options,
    listOrientation,
    autoClose,
})=>{

    const masterRef = useRef(null)

    return(
        <ElemDropdownContainer elementRef={masterRef}>
            <ElemDropdown
                label={label}
                options={options}
                parentRef={masterRef}
            />
        </ElemDropdownContainer>
    )
}

ClickDropdown.defaultProps = {
    listOrientation: "left",
    autoClose: true,
}

export default ClickDropdown