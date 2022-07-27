import { FunctionComponent, RefObject, useRef, useState } from 'react';
import { DropdownMenuProps, isDropdownOption } from '../interface';
import { 
    ElemDropdownMenu,
    ElemDropdownList,
    ElemDropdownOption,
    ElemDropdownSubContainer,
} from '../Elements'
import { OutsideClickHandler } from '../../../hooks/OutsideClick';
import { Carrets } from '../../../icons';

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
    
    parentRef && OutsideClickHandler(parentRef, setClosed)

    const optionsNode = options.map(option => {
        if ( isDropdownOption(option) ){
            return (
                <ElemDropdownOption 
                    key={`drop-opt-${label}-${option.label}`}
                    href={option.href}
                    selected={option.selected}
                    onClick={toggleOpen}
                >
                    {option.label}
                </ElemDropdownOption>
            )
        }

        return (
            <ElemDropdownSubContainer>
                <ClickDropdown 
                    key={`drop-menu-${label}-${option.label}`}
                    label={option.label}
                    options={option.options}
                    listOrientation={option.listOrientation}
                />
            </ElemDropdownSubContainer>
        )
    }) 
    const CarretNode = Carrets[listOrientation || "down"]

    return(
        <>
            <ElemDropdownMenu
                onClick={toggleOpen}
                elementRef={parentRef}
                elementKey={`main-menu-${label}`}
            >
                <div>{label}</div>    
                {showCarret && <CarretNode />}
            </ElemDropdownMenu>

            { isOpen &&
                <ElemDropdownList
                    listOrientation={listOrientation}
                >
                    {optionsNode}
                </ElemDropdownList>
            }
        </>
    )
}

ClickDropdown.defaultProps = {
    listOrientation: "left",
    showCarret: true,
}

export default ClickDropdown