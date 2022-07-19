import { FunctionComponent, useMemo, useState } from "react"
import { AccordionItem } from "./elements"
import { Accordion } from "./interface"
import styled from 'styled-components'

export interface AccordionMenuProps {
    accordionOptions: Accordion
}


const StyledMenuContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: fit-content;
`

const AccordionMenu: FunctionComponent<AccordionMenuProps> = ({
    accordionOptions,
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
                    />
                )
        })
    }, [openMenu])
    
    

    return (
        <StyledMenuContainer>
            {renderedOptions}
        </StyledMenuContainer>
    )
}

export default AccordionMenu