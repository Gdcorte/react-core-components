import styled from 'styled-components';

import { FunctionComponent, useEffect, useState } from 'react';
import { CarretDown } from 'icon/carret'
import { BaseDropdownCss } from './css'

const DropdownContainerStyled = styled.div`
    ${BaseDropdownCss.container};
`

const DropdownMenuStyled = styled.div`
    ${BaseDropdownCss.menu};s
`

const DropdownListStyled = styled.div`
    ${BaseDropdownCss.list};
`

const DropdownOptionStyled = styled.div`
    ${BaseDropdownCss.options};
`

export interface SimpleDropdownOptionInterface {
    value: any,
    label: any,
    name: string,
}

interface DropdownInterface {
    options: SimpleDropdownOptionInterface[],
    selectedOption: any,
    onSelect?: CallableFunction,
    forceLeft?: boolean,
    forceClose?: boolean,
}

const SimpleDropdown: FunctionComponent<DropdownInterface> = ({
    options,
    selectedOption,
    onSelect,
    forceLeft,
    forceClose,
})=>{
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
        if (forceClose){
            setisOpen(false)
        }
    }, [forceClose]);

    function changeSelection(event: string){

        if (onSelect){
            onSelect(event)
            toggleOpen()
        }
    }

    function toggleOpen(){
        setisOpen(!isOpen)
    }

    return(
        <DropdownContainerStyled
            onMouseLeave={() => setisOpen(false)}
        >
            <DropdownMenuStyled 
                className='menuOverride'
                onClick={toggleOpen}
            >
                <DropdownOptionStyled>
                    {selectedOption}
                </DropdownOptionStyled>

                <CarretDown />
            </DropdownMenuStyled>
            { isOpen &&
                <DropdownListStyled>
                    { options.map( (singleOption: SimpleDropdownOptionInterface) =>{
                        return (
                            <DropdownOptionStyled
                                key={`dd-${singleOption.value}=${singleOption.name}`}
                                onClick={() => 
                                    changeSelection(singleOption.name)}
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

SimpleDropdown.defaultProps = {
    onSelect: undefined,
    forceLeft: false,
    forceClose: false,
}

export default SimpleDropdown