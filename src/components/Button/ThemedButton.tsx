import { FunctionComponent, useMemo } from "react";
import { ButtonColorInterface } from "./defaultColors";
import { BaseButton, ButtonProps } from "./BaseButton";
import { useTheme } from "styled-components";
import { FontHelper } from "../../themes";

export interface ThemedButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
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
  name,
  selected,
}) => {
  const { theme } = useTheme();

  const buttonColors = useMemo(() => {
    if (!variant) {
      variant = "primary";
    }

    let fonts = [theme.fonts.light, theme.fonts.dark];

    var buttonColors: ButtonColorInterface = {
      main: {
        bg: theme[variant].base,
        text: FontHelper.findBestContrast(theme[variant].base, fonts),
      },
      hover: {
        bg: theme[variant].hover,
        text: FontHelper.findBestContrast(theme[variant].hover, fonts),
      },
      click: {
        bg: theme[variant].selected,
        text: FontHelper.findBestContrast(theme[variant].selected, fonts),
      },
      focus: {
        bg: theme[variant].focus,
        text: FontHelper.findBestContrast(theme[variant].focus, fonts),
      },
      disabled: {
        bg: `${theme[variant].disabled}`,
        text: `${FontHelper.findBestContrast(theme[variant].disabled, [
          theme.fonts.light,
          `${theme.fonts.dark}80`,
        ])}`,
      },
    };

    return buttonColors;
  }, [theme.primary.base, variant]);

  return (
    <BaseButton
      className={className}
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
      colors={buttonColors}
      inverse={inverse || variant == "secondary"}
      shape={shape}
      radius={radius}
      fontSize={fontSize}
      name={name}
      selected={selected}
    >
      {children}
    </BaseButton>
  );
};

export default ThemedButton;
