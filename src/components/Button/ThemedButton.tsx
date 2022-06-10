import { FunctionComponent, useMemo } from "react";
import { ButtonColorInterface } from "./defaultColors";
import { Button, ButtonProps } from './Button'
import { useTheme } from "styled-components";

export const ThemedButton: FunctionComponent<ButtonProps> = ({
  colors,
  variant,
  inverse,
  edges,
  edgeSize,
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
    <Button
        className={className}
        onClick={onClick}
        disabled={disabled}
        colors={buttonColors}
        inverse={inverse}
        edges={edges}
        edgeSize={edgeSize}
        fontSize={fontSize}
    >
        {children}
    </Button>
    );
};

export default ThemedButton;