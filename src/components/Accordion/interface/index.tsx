export interface AccordionBaseProps {
    title: string | JSX.Element,
    action?: CallableFunction,
    uniqueKey: string,
    commonClass?: string,
    bodyClass?: string,
}

export interface AccordionItemProps extends AccordionBaseProps {
    description: JSX.Element
}

export interface SubAccordionProps extends AccordionBaseProps{
    content: SubAccordion[],
}

export type SubAccordion = SubAccordionProps | AccordionItemProps | AccordionBaseProps

export function isSubAccordion(option: SubAccordion): option is SubAccordionProps{
    return (option as SubAccordionProps).content !== undefined
}

export function isAccordionItem(option: SubAccordion): option is AccordionItemProps{
    return (option as AccordionItemProps).description !== undefined
}

export type Accordion = SubAccordion[]