import { FunctionComponent, SyntheticEvent } from "react";
import styles, {css} from 'styled-components'

interface AccordionContainerProps {
    option: JSX.Element,
    action?: CallableFunction,
}

const StyledItemHover = css`
    :hover{
        background-color: ${({theme: {theme}})=> theme.background.shade1};
        color: ${({theme: {theme}})=> theme.primary.base};

        svg {
            fill: ${({theme: {theme}})=> theme.primary.base};
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