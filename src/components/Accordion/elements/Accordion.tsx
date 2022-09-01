import { FunctionComponent, useMemo, useState } from "react"
import { default as  AccordionContent } from "./Content"
import { SubAccordion, isSubAccordion, isAccordionItem, isEmptyTitle } from "../interface"
import styled , {css} from 'styled-components'
import { CarretDown } from "../../../icons"
import { FontHelper } from "../../../themes"

export interface AccordionMenuProps {
    option: SubAccordion,
    openMenu: string,
    changeOpenMenu: CallableFunction,
    parentLevel: number,
}

const AccordionContainer = styled.div`
    color: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};

    svg {
        fill: ${({theme: {theme}})=> FontHelper.findBestContrast(theme.background.base, [theme.fonts.dark, theme.fonts.light])};
    }

`
const AccordionTitle = styled.div`
    padding: 6px 10px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border-radius: 5px;

    :hover{
        background-color: ${({theme: {theme}})=> theme.background.shade1};
        color: ${({theme: {theme}})=> theme.primary.base};

        svg {
            fill: ${({theme: {theme}})=> theme.primary.base};
        }
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
    parentLevel,
})=>{
    const [openSubMenu, setopenSubMenu] = useState('')
    const [showCarret, setshowCarret] = useState(true)
    const currentLevel = parentLevel+1

    function changeMenu(){
        changeOpenMenu(option.uniqueKey)

        if (isEmptyTitle(option)){
            option.action && option.action()
        }

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
                        parentLevel={currentLevel}
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
                    action={option.action}
                />
            )
        }

        return (
            <></>   
        )
    }, [openSubMenu])
    
    

    return (
        <AccordionContainer
            className={`accordionContainer ${option.uniqueKey} ${option.commonClass || ""} container-lvl-${currentLevel}`}
        >
            <AccordionTitle 
                key={option.uniqueKey}
                onClick={changeMenu}
                className={`accordionTitle title-lvl-${currentLevel}`}
            >
                {option.title}
                {showCarret ?
                    <AccordionCarret /> :
                    <Spacer className={`accordionSpacer`}/>
                }
            </AccordionTitle>
            {openMenu==option.uniqueKey && 
                <AccordionBody className={`accordionBody body-lvl-${currentLevel} ${option.bodyClass || ""}`}>{
                    renderedOptions}
                </AccordionBody>
            }
        </AccordionContainer>
    )
}

export default AccordionItem