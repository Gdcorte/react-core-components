import { FunctionComponent, useState } from 'react';
import { Carrets } from '../../../icons';
import { 
    ElemDropdownContainer, 
    ElemDropdownList, 
    ElemDropdownMenu, 
    ElemDropdownOption, 
    ElemDropdownSubContainer 
} from '../Elements';
import { DropdownMenuProps, isDropdownOption } from '../interface';

export interface HoverDropdownMenuProps extends DropdownMenuProps {
    subDropdown?: boolean
}

export const HoverDropdown: FunctionComponent<HoverDropdownMenuProps> = ({
    label,
    options,
    listOrientation,
    subDropdown,
    showCarret,
})=>{

    const [isOpen, setisOpen] = useState(false);

    function setOpen(){
        setisOpen(true)
    }

    function setClosed(){
        setisOpen(false)
    }
    
    const optionsNode = options.map(option => {
        if ( isDropdownOption(option) ){
            return (
                <ElemDropdownOption 
                    key={`drop-opt-${label}-${option.label}`}
                    href={option.href}
                    selected={option.selected}
                    onClick={setClosed}
                >
                    {option.label}
                </ElemDropdownOption>
            )
        }

        return (
            <HoverDropdown 
                subDropdown={true}
                key={`drop-menu-${label}-${option.label}`}
                label={option.label}
                options={option.options}
                listOrientation={option.listOrientation}
            />
        )
    }) 

    const CarretNode = Carrets[listOrientation || "down"]
    const ContainerNode = subDropdown ? ElemDropdownSubContainer : ElemDropdownContainer

    return(
        <ContainerNode
            className={`${subDropdown && "dropdown-subcontainer"}`}
            mouseEnter={setOpen}
            mouseLeave={setClosed}
        >
            <ElemDropdownMenu
                elementKey={`main-menu-${label}`}
            >
                <div>{label}</div>    
                {showCarret ? <CarretNode /> : <></>}
            </ElemDropdownMenu>

            { isOpen ?
                <ElemDropdownList
                    listOrientation={listOrientation}
                >
                    {optionsNode}
                </ElemDropdownList>
                : <></>
            }
        </ContainerNode>
    )
}

HoverDropdown.defaultProps = {
    listOrientation: "down",
    showCarret: true,
    subDropdown: false
}

export default HoverDropdown
