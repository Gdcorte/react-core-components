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
            main: {
                bg: theme.primary,
                text: theme.background,
            },
            hover: {
                bg: theme.secondary,
                text: theme.background,
            },
            click: {
                bg: theme.secondaryVariant,
                text: theme.background,
            },
            focus: {
                bg: theme.primaryVariant,
                text: theme.background,
            },
            disabled: {
                bg: `${theme.primary}30`,
                text: `${theme.background}30`,
            },
        }

        switch(variant){
            case "info":
            case "danger":
            case "warning":
            case "success":
                buttonColors = {
                    main: {
                        bg: theme[variant].main,
                        text: theme[variant].contrast,
                    },
                    hover: {
                        bg: `${theme[variant].main}bb`,
                        text: theme[variant].contrast,
                    },
                    click: {
                        bg: `${theme[variant].main}99`,
                        text: theme[variant].contrast,
                    },
                    focus: {
                        bg: `${theme[variant].main}cc`,
                        text: theme[variant].contrast,
                    },
                    disabled: {
                        bg: `${theme[variant].main}70`,
                        text: `${theme[variant].contrast}`,
                    },
                }
        }

        return buttonColors
    }, [theme.primary, variant])

    return (
    <BaseButton
        className={className}
        onClick={disabled ?  ()=>{} : onClick}
        disabled={disabled}
        colors={buttonColors}
        inverse={inverse || variant=="secondary"}
        shape={shape}
        radius={radius}
        fontSize={fontSize}
    >
        {children}
    </BaseButton>
    );
};

export default ThemedButton;