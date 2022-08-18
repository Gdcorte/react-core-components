import { FunctionComponent, RefObject, useState } from 'react';
import { DropdownMenuProps } from '../interface';
import { 
    ElemDropdownMenu,
    ElemDropdownList,
    ElemDropdownSubContainer,
} from '../Elements'
import { OutsideClickHandler } from '../../../hooks/OutsideClick';
import { Carrets } from '../../../icons';
import { renderBodyDropdown } from '../helper';
import SubDropdown from './SubDropdown';

interface ClickDropdownMenuProps extends DropdownMenuProps {
    parentRef?: RefObject<HTMLObjectElement>
}

export const ClickDropdown: FunctionComponent<ClickDropdownMenuProps> = ({
    label,
    options,
    listOrientation,
    parentRef,
    showCarret,
})=>{
    const [isOpen, setisOpen] = useState(false);

    function toggleOpen(){
        setisOpen(!isOpen)
    }

    function setClosed(){
        setisOpen(false)
    }

    function setOpen(){
        setisOpen(true)
    }
    
    parentRef && OutsideClickHandler(parentRef, setClosed)

    
    const CarretNode = Carrets[listOrientation || "down"]
    const body = renderBodyDropdown({
        options,
        label,
        SubDropdown,
    })

    return(
        <ElemDropdownSubContainer
            mouseEnter={setOpen}
            mouseLeave={setClosed}
        >
            <ElemDropdownMenu
                onClick={toggleOpen}
                elementRef={parentRef}
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
        </ElemDropdownSubContainer>
    )
}

ClickDropdown.defaultProps = {
    listOrientation: "left",
    showCarret: true,
}

export default ClickDropdown