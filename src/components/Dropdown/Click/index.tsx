import { FunctionComponent, useRef, useState } from 'react';
import { DropdownMenuProps } from '../interface';
import {  ElemDropdownContainer, ElemDropdownList, ElemDropdownMenu } from '../Elements'
import { Carrets } from '../../../icons';
import { renderBodyDropdown } from '../helper';
import { OutsideClickHandler } from '../../../hooks/OutsideClick';
import SubDropdown from './SubDropdown'

export const ClickDropdown: FunctionComponent<DropdownMenuProps> = ({
    label,
    options,
    listOrientation,
    showCarret,
})=>{   
    const [isOpen, setisOpen] = useState(false);
    const masterRef = useRef(null)

    function toggleOpen(){
        setisOpen(!isOpen)
    }

    function setClosed(){
        setisOpen(false)
    }

    const body = renderBodyDropdown({
        options,
        label,
        SubDropdown,
    })
    const CarretNode = Carrets[listOrientation || "down"]
    
    OutsideClickHandler(masterRef, setClosed)

    return(
        <ElemDropdownContainer 
            elementRef={masterRef}
        >
            <ElemDropdownMenu
                onClick={toggleOpen}
                elementRef={masterRef}
                elementKey={`main-menu-${label}`}
            >
                <div>{label}</div>
                {showCarret ? <CarretNode /> : <></>}  
            </ElemDropdownMenu>

            { body.length && isOpen ?
                <ElemDropdownList
                    listOrientation={listOrientation}
                >
                    {body}
                </ElemDropdownList>
                : <></>
            }
        </ElemDropdownContainer>
    )
}

ClickDropdown.defaultProps = {
    listOrientation: "left",
}

export default ClickDropdown