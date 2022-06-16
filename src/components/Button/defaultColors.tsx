interface ButtonStateColor {
    bg: string,
    text: string,
}

export interface ButtonColorInterface {
    main: ButtonStateColor,
    hover: ButtonStateColor,
    click: ButtonStateColor,
    focus: ButtonStateColor,
    disabled: ButtonStateColor,
}

export const ButtonDefaultColor: ButtonColorInterface = {
    main: {
        bg: "#34C472",
        text: "#262626",
    },
    hover: {
        bg: "#0277db",
        text: "#560056",
    },
    click: {
        bg: "#F4c4EE",
        text: "#666600",
    },
    focus: {
        bg: "#ffee77",
        text: "#006666",
    },
    disabled: {
        bg: "#ccc",
        text: "#666",
    },
}

