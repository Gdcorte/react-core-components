import {FunctionComponent, useContext} from 'react'

import { ThemeContext } from 'styled-components';

import {LockedSvg, UnlockedSvg} from '../../Icons'

interface IconInterface {
    locked: boolean,
}

interface ColoringObj {
    primary: string,
}

export const PasswordIcon:FunctionComponent<IconInterface> = ({
    locked,
}) => {
    
    const themeContext:ColoringObj = useContext(ThemeContext);
    const height = 20
    const width = 20

    return (
        <>
            {locked ?
                <LockedSvg
                    color={themeContext.primary}
                    height={height}
                    width={width}
                />
                :
                <UnlockedSvg
                    color={themeContext.primary}
                    height={height}
                    width={width}
                />
            }
        </>
    )
}