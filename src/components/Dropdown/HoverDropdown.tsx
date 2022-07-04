import styled from 'styled-components';

import { FunctionComponent, useEffect, useState } from 'react';
import { ElemDropdownContainer, ElemDropdownMenu, ElemDropdownOption, ElemDropdownList } from './Elements';
import { DropdownMenuProps, isDropdownOption } from './interface';


export const HoverDropdown: FunctionComponent<DropdownMenuProps> = ({
    label,
    options,
    listOrientation,
    autoClose,
})=>{
    const [isOpen, setisOpen] = useState(false);
    const optionsNode = options.map(option => {
        if ( isDropdownOption(option) ){
            return (
                <ElemDropdownOption 
                    href={option.href}
                >
                    {option.label}
                </ElemDropdownOption>
            )
        }

        return (
            <HoverDropdown 
                label={option.label}
                options={option.options}
                listOrientation={option.listOrientation}
                autoClose={option.autoClose}
            />
        )
    }) 

    return(
        <ElemDropdownContainer>
            {listOrientation}

            <ElemDropdownMenu>
                {label}
            </ElemDropdownMenu>

            <ElemDropdownList>
                {optionsNode}
            </ElemDropdownList>
        </ElemDropdownContainer>
    )
}

HoverDropdown.defaultProps = {
    listOrientation: "left",
    autoClose: true,
}

export default HoverDropdown