export interface ButtonColorInterface {
    background: string,
    color: string,
    actionableColor: string,
    selected: string,
    focused: string,
}

export const ButtonDefaultColor: ButtonColorInterface = {
    background: "#34C472",
    color: "#262626",
    actionableColor: "#262626",
    selected: "#3dc434",
    focused: "#34c4bb",
}

export const ButtonSecondaryColor: ButtonColorInterface = {
    background: "#0277db",
    color: "#fefefe",
    actionableColor: "#262626",
    selected: "#00d7be",
    focused: "#7248fe",
}

export const ButtonSuccessColor: ButtonColorInterface = {
    background: "#4ce1b6",
    color: "#363537",
    actionableColor: "#262626",
    selected: "#4ce1b6",
    focused: "#4ce1b6",
}

export const ButtonInfoColor: ButtonColorInterface = {
    background: "#70bbfd",
    color: "#fefefe",
    actionableColor: "#262626",
    selected: "#70bbfd",
    focused: "#70bbfd",
}

export const ButtonWarningColor: ButtonColorInterface = {
    background: "#f6da6e",
    color: "#363537",
    actionableColor: "#262626",
    selected: "#f6da6e",
    focused: "#f6da6e",
}

export const ButtonDangerColor: ButtonColorInterface = {
    background: "#ff4861",
    color: "#fefefe",
    actionableColor: "#262626",
    selected: "#ff4861",
    focused: "#ff4861",
}

interface ButtonColorMapInterface {
    [key:string]: ButtonColorInterface,
    primary: ButtonColorInterface,
}

export const buttonColorMap: ButtonColorMapInterface = {
    primary: ButtonDefaultColor,
    secondary: ButtonSecondaryColor,
    info: ButtonInfoColor,
    success: ButtonSuccessColor,
    warning: ButtonWarningColor,
    danger: ButtonDangerColor,
}

