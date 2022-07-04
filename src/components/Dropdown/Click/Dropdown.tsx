import { FunctionComponent, RefObject, useRef, useState } from 'react';
import { DropdownMenuProps, isDropdownOption } from '../interface';
import { 
    ElemDropdownMenu,
    ElemDropdownList,
    ElemDropdownOption,
} from '../Elements'
import { OutsideClickHandler } from '../../../hooks/OutsideClick';

interface ClickDropdownMenuProps extends DropdownMenuProps {
    parentRef?: RefObject<HTMLObjectElement>
}

export const ClickDropdown: FunctionComponent<ClickDropdownMenuProps> = ({
    label,
    options,
    listOrientation,
    autoClose,
    parentRef,
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
        const dropdownRef = useRef(null)

        return (
            <ClickDropdown 
                key={`drop-menu-${label}-${option.label}`}
                label={option.label}
                options={option.options}
                listOrientation={option.listOrientation}
                autoClose={option.autoClose}
                parentRef={dropdownRef}
            />
        )
    }) 
    return(
        <>
            <ElemDropdownMenu
                onClick={toggleOpen}
                elementRef={parentRef}
                elementKey={`main-menu-${label}`}
            >
                {label}
            </ElemDropdownMenu>

            { isOpen &&
                <ElemDropdownList>
                    {optionsNode}
                </ElemDropdownList>
            }
        </>
    )
}

ClickDropdown.defaultProps = {
    listOrientation: "left",
    autoClose: true,
}

export default ClickDropdown