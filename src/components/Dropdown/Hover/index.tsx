import { FunctionComponent, useState } from 'react';
import { Carrets } from '../../../icons';
import { 
    ElemDropdownContainer, 
    ElemDropdownList, 
    ElemDropdownMenu, 
} from '../Elements';
import { renderBodyDropdown } from '../helper';
import { DropdownMenuProps } from '../interface';
import SubDropdown from './SubDropdown'
export interface HoverDropdownMenuProps extends DropdownMenuProps {
}

export const HoverDropdown: FunctionComponent<HoverDropdownMenuProps> = ({
    label,
    options,
    listOrientation,
    showCarret,
})=>{

    const [isOpen, setisOpen] = useState(false);

    function setOpen(){
        setisOpen(true)
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

    return(
        <ElemDropdownContainer
            mouseEnter={setOpen}
            mouseLeave={setClosed}
        >
            <ElemDropdownMenu
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

HoverDropdown.defaultProps = {
    listOrientation: "down",
    showCarret: true,
}

export default HoverDropdown
