import { FunctionComponent, RefObject, useState } from 'react';
import { DropdownMenuProps } from '../interface';
import { 
    ElemDropdownMenu,
    ElemDropdownList,
    ElemDropdownSubContainer,
} from '../Elements'
import { Carrets } from '../../../icons';
import { renderBodyDropdown } from '../helper';

interface ClickDropdownMenuProps extends DropdownMenuProps {
    parentRef?: RefObject<HTMLObjectElement>
}

export const SubDropdown: FunctionComponent<ClickDropdownMenuProps> = ({
    label,
    options,
    listOrientation,
    parentRef,
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
        <ElemDropdownSubContainer
        mouseEnter={setOpen}
        mouseLeave={setClosed}
    >
            <ElemDropdownMenu
                elementRef={parentRef}
                elementKey={`main-menu-${label}`}
            >
                <div>{label}</div>    
                {showCarret ? <CarretNode /> : <></>}
            </ElemDropdownMenu>

            { body && isOpen ?
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

SubDropdown.defaultProps = {
    listOrientation: "left",
    showCarret: true,
}

export default SubDropdown