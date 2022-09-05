import { FunctionComponent } from "react";
import { ElemDropdownOption } from "../Elements";
import { 
    DropdownMenuProps, 
    DropdownOptionProps, 
    isDropdownOption 
} from "../interface";

function emptyCallback(){ return }

export function renderBodyDropdown({
    options,
    label,
    SubDropdown,
}:{
    options: (DropdownOptionProps | DropdownMenuProps)[],
    label: string,
    SubDropdown: FunctionComponent<DropdownMenuProps>,
}){

    const optionsNode = options.map(option => {
        if ( isDropdownOption(option) ){
            return (
                <ElemDropdownOption
                    key={`drop-opt-${Math.random().toFixed(5)}-${label}-${option.data}`}
                    href={option.href}
                    selected={option.selected}
                    onClick={option.onClick}
                    data={option.data}
                >
                    {option.label}
                </ElemDropdownOption>
            )
        }

        return (
            <SubDropdown
                key={`drop-menu-${label}-${option.label}`}
                label={option.label}
                options={option.options}
                listOrientation={option.listOrientation}
            />
        )
    }) 

    return optionsNode
}