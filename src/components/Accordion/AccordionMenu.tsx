import { FunctionComponent, useMemo, useState } from "react"
import { AccordionItem } from "./elements"
import { Accordion } from "./interface"
import styled from 'styled-components'

export interface AccordionMenuProps {
    accordionOptions: Accordion,
    className?: string,
}


const StyledMenuContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: fit-content;
`

const AccordionMenu: FunctionComponent<AccordionMenuProps> = ({
    accordionOptions,
    className,
})=>{
    const [openMenu, setopenMenu] = useState('')

    function changeOpenMenu(newMenu: string){
        if (openMenu == newMenu) {
            setopenMenu('')
            return
        }

        setopenMenu(newMenu)
    }

    const renderedOptions = useMemo(() => {
        return accordionOptions.map((option) => {
                return (
                    <AccordionItem 
                        key={`item-${option.uniqueKey}`}
                        option={option}
                        openMenu={openMenu}
                        changeOpenMenu={changeOpenMenu}
                        parentLevel={0}
                    />
                )
        })
    }, [openMenu])
    
    

    return (
        <StyledMenuContainer className={`accordion-base lvl-0 ${className || ""}`}>
            {renderedOptions}
        </StyledMenuContainer>
    )
}

export default AccordionMenu