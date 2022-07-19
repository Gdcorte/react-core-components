import { FunctionComponent, useEffect, useMemo, useState } from "react"
import { AccordionContent } from "../elements"
import { SubAccordion, AccordionItemProps, isSubAccordion, isAccordionItem } from "../interface"
import styled , {css} from 'styled-components'
import { CarretDown } from "../../../icons"

export interface AccordionMenuProps {
    option: SubAccordion,
    openMenu: string,
    changeOpenMenu: CallableFunction,
}

const AccordionContainer = styled.div`
    color: ${({theme})=> theme.text};

    svg {
        fill: ${({theme})=> theme.text};
    }

`
const AccordionTitle = styled.div`
    padding: 6px 10px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border-radius: 10px;

    :hover{
        background-color: ${({theme})=> theme.backgroundShade0}
    }
`

const CarretCss = css`
    margin-left: 4px;
    width: 10px !important;
    height: 10px !important;
`

const AccordionCarret = styled(CarretDown)`
    ${CarretCss}
`

const Spacer = styled.div`
    ${CarretCss}
`

const AccordionBody = styled.div`
    border-radius: 10px;
    padding-left: 10px;
`

const AccordionItem: FunctionComponent<AccordionMenuProps> = ({
    option,
    openMenu,
    changeOpenMenu,
})=>{
    const [openSubMenu, setopenSubMenu] = useState('')
    const [showCarret, setshowCarret] = useState(true)

    function changeMenu(){
        changeOpenMenu(option.uniqueKey)
    }

    function changeOpenSubMenu(newMenu: string){
        if (openSubMenu == newMenu) {
            setopenSubMenu('')
            return
        }

        setopenSubMenu(newMenu)
    }

    const renderedOptions = useMemo(() => {
        if (isSubAccordion(option)){
            return option.content.map((value) => {
                return (
                    <AccordionItem 
                        option={value}
                        openMenu={openSubMenu}
                        changeOpenMenu={changeOpenSubMenu}
                    />
                )
            })
        }

        setshowCarret(false)

        if (isAccordionItem(option)){
            return (
                <AccordionContent 
                    key={option.uniqueKey}
                    option={option.description}
                />
            )
        }

        return (
            <></>   
        )
    }, [openSubMenu])
    
    

    return (
        <AccordionContainer
            className={`accordionContainer ${option.uniqueKey} ${option.commonClass}`}
        >
            <AccordionTitle 
                key={option.uniqueKey}
                onClick={changeMenu}
                className={`accordionTitle`}
            >
                {option.title}
                {showCarret ?
                    <AccordionCarret /> :
                    <Spacer className={`accordionSpacer`}/>
                }
            </AccordionTitle>
            {openMenu==option.uniqueKey && 
                <AccordionBody className={`accordionBody ${option.bodyClass}`}>{
                    renderedOptions}
                </AccordionBody>
            }
        </AccordionContainer>
    )
}

export default AccordionItem