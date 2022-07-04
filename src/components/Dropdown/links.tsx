import styled from 'styled-components';

import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { CarretDown, CarretRight } from 'icon/carret'
import { HoverDropdownCss } from './css'
import Link from 'next/link';

const DropdownContainerStyled = styled.div`
    ${HoverDropdownCss.container};

    .disabled {
        pointer-events: none;
    }
`

const DropdownMenuStyled = styled.div`
    ${HoverDropdownCss.menu};
`

const DropdownListStyled = styled.div`
    ${HoverDropdownCss.list};
`

const DropdownOptionStyled = styled.div`
    ${HoverDropdownCss.options};
`

export interface LInksDropdownOptionInterface {
    key: any,
    label: any,
}

export interface DropdownInterface {
    options: LInksDropdownOptionInterface[],
    selectedOption: any,
    menuLink?: string,
    direction?: string,
    forceClose?: boolean,
}

interface CarretInterface {
    [key: string]: ReactElement,
}

const carretOptions: CarretInterface = {
    down: <CarretDown />,
    right: <CarretRight />
}

const LinksDropdown: FunctionComponent<DropdownInterface> = ({
    options,
    selectedOption,
    direction,
    forceClose,
    menuLink,
})=>{
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
      if (forceClose){
          setisOpen(false)
      }
    }, [forceClose]);
    

    function toggleOpen(){
        setisOpen(!isOpen)
    }

    return(
        <DropdownContainerStyled
            className={`
                ${!menuLink && 'disabled'}
            `}
            onClick={toggleOpen}
            onMouseEnter={() => setisOpen(true)}
            onMouseLeave={() => setisOpen(false)}
        >
            <Link
                href={menuLink ? menuLink: ''}
                passHref
            >
                <a>
                    <DropdownMenuStyled 
                        className='menuOverride'
                        >
                        <DropdownOptionStyled>
                            {selectedOption}
                        </DropdownOptionStyled>

                        {
                            (direction && carretOptions[direction]) 
                            || <CarretDown />
                        }
                    </DropdownMenuStyled>
                </a>
            </Link>
            { isOpen &&
                <DropdownListStyled className={`${direction} customListStyle`} >
                    { options.map( (singleOption: LInksDropdownOptionInterface) =>{
                        return (
                            <DropdownOptionStyled
                                key={`ldd-${singleOption.key}`}
                                className={`customOptionAlign`}
                            >
                                {singleOption.label}
                            </DropdownOptionStyled>
                        )
                    })}
                </DropdownListStyled>
            }
        </DropdownContainerStyled>
    )
}

LinksDropdown.defaultProps = {
    direction: 'down',
    forceClose: false,
}

export default LinksDropdown