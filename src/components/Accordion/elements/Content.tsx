import { FunctionComponent, MouseEventHandler, SyntheticEvent } from "react";
import { AccordionItemProps } from "../interface";
import styles from 'styled-components'

interface AccordionContainerProps {
    option: JSX.Element,
    action?: CallableFunction,
}

const StyledItems = styles.div<{
    hasAction: boolean
}>`

    padding: 8px;
    border-radius: 5px;
    ${({hasAction})=> hasAction && 'cursor: pointer;'}

    :hover{
        background-color: ${({theme})=> theme.backgroundShade0}
    }
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