import {FlattenSimpleInterpolation} from 'styled-components'


export type DropdownOptionProps = {
    href: string,
    label: any,
    selected?: boolean,
    onClick?: CallableFunction,
    data?:string,
}

export type DropdownListOrientation = "up"|"down"|"left"|"right"

export type DropdownMenuProps = {
    label: any,
    listOrientation?: DropdownListOrientation
    selected?: boolean,
    options: (DropdownOptionProps | DropdownMenuProps)[],
    showCarret?: boolean,
    closeOnClick?: boolean,
}

export function isDropdownOption(option: DropdownMenuProps | DropdownOptionProps): option is DropdownOptionProps {
    return (option as DropdownOptionProps).href !== undefined
}

export interface DropDownCssInterface {
    [key: string]: any,
    container: any,
    menu: any,
    list: any,
    options: any,
}