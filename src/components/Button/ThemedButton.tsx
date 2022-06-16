import { FunctionComponent, useMemo } from "react";
import { ButtonColorInterface } from "./defaultColors";
import { BaseButton, ButtonProps } from './BaseButton'
import { useTheme } from "styled-components";

export interface ThemedButtonProps extends ButtonProps {
  variant?: "primary"|"secondary"|"info"|"success"|"warning"|"danger",
}

export const ThemedButton: FunctionComponent<ThemedButtonProps> = ({
  variant,
  inverse,
  shape,
  radius,
  fontSize,
  onClick,
  disabled,
  className,
  children,
}) => {

    const theme = useTheme()

    const buttonColors = useMemo(() => {
        var buttonColors:ButtonColorInterface = {
            background: theme.primary, 
            color: theme.background, 
            actionableColor: theme.primaryVariant, 
            selected: theme.secondary, 
            focused: theme.secondary,
        }

        let alertType = undefined
        switch (variant){
            case 'primary':
                break

            case 'secondary':
                buttonColors = {
                    background: theme.secondary, 
                    color: theme.background, 
                    actionableColor: theme.secondaryVariant, 
                    selected: theme.primary, 
                    focused: theme.primary,
                }
                break
            
            default:
                alertType = variant
                break;
        }

        if (alertType){
            buttonColors = {
                background: theme[alertType].main, 
                color: theme[alertType].contrast, 
                actionableColor: theme[alertType].main, 
                selected: theme[alertType].main, 
                focused: theme[alertType].main,
            }

        }

        return buttonColors
    }, [theme.primary, variant])

    return (
    <BaseButton
        className={className}
        onClick={onClick}
        disabled={disabled}
        colors={buttonColors}
        inverse={inverse}
        shape={shape}
        radius={radius}
        fontSize={fontSize}
    >
        {children}
    </BaseButton>
    );
};

export default ThemedButton;