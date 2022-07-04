import { FunctionComponent, ReactNode } from "react"

interface ElemOptionLinkProps {
    href: string,
    children: ReactNode,
}

const ElemOptionLink: FunctionComponent<ElemOptionLinkProps> = ({
    href,
    children
}) => {

    return (
        <a href={href}>
            {children}
        </a>
    )
}

export default ElemOptionLink