import { FunctionComponent } from "react";
import { AccordionItemProps } from "../interface";


interface AccordionContainerProps {
    option: JSX.Element,
}

const AccordionContent: FunctionComponent<AccordionContainerProps> = ({
    option,
})=>{

    return (
        <div>
            {option}
        </div>
    )
}

export default AccordionContent