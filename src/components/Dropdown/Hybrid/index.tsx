import { FunctionComponent, useRef, useState } from 'react';
import { DropdownMenuProps } from '../interface';
import {  ElemDropdownContainer, ElemDropdownList, ElemDropdownMenu } from '../Elements'
import { Carrets } from '../../../icons';
import { renderBodyDropdown } from '../helper';
import SubDropdown from './SubDropdown';

export const HybridDropdown: FunctionComponent<DropdownMenuProps> = ({
    label,
    options,
    listOrientation,
    showCarret,
    closeOnClick,
})=>{
    const [isOpen, setisOpen] = useState(false);
    const masterRef = useRef(null)
    const CarretNode = Carrets[listOrientation || "down"]

    function toggleOpen(){
        setisOpen(!isOpen)
    }

    function setClosed(){
        setisOpen(false)
    }

    function setOpen(){
        setisOpen(true)
    }

    const body = renderBodyDropdown({
        options,
        label,
        SubDropdown,
        closeCallback: closeOnClick? setClosed : undefined
    })

    return(
        <ElemDropdownContainer 
            elementRef={masterRef}
            mouseEnter={setOpen}
            mouseLeave={setClosed}
        >
            <ElemDropdownMenu
                onClick={toggleOpen}
                elementRef={masterRef}
                elementKey={`main-menu-${label}`}
            >
                <div className='dropdown-menu-label'>{label}</div>
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

HybridDropdown.defaultProps = {
    listOrientation: "left",
}

export default HybridDropdown