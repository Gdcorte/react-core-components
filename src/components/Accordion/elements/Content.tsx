import { FunctionComponent, MouseEventHandler, SyntheticEvent } from "react";
import { AccordionItemProps } from "../interface";
import styles, {css} from 'styled-components'

interface AccordionContainerProps {
    option: JSX.Element,
    action?: CallableFunction,
}

const StyledItemHover = css`
    :hover{
        background-color: ${({theme})=> theme.backgroundShade0};
        color: ${({theme})=> theme.primary};

        svg {
            fill: ${({theme})=> theme.primary};
        }
    }
`

const StyledItems = styles.div<{
    hasAction: boolean
}>`

    padding: 8px;
    border-radius: 5px;
    ${({hasAction})=> hasAction && 'cursor: pointer;'};

    ${({hasAction})=> hasAction && StyledItemHover}
`

const AccordionContent: FunctionComponent<AccordionContainerProps> = ({
    option,
    action,
})=>{
    function accordionItemAction(event: SyntheticEvent){
        action && action(event)
    }

    return (
        <StyledItems
            hasAction={Boolean(action)}
            onClick={accordionItemAction}
        >
            {option}
        </StyledItems>
    )
}

export default AccordionContent