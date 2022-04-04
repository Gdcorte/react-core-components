import {BaseAlerts} from '../../themes'

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
    background: BaseAlerts.success.main,
    color: BaseAlerts.success.contrast,
    actionableColor: BaseAlerts.success.main,
    selected: BaseAlerts.success.main,
    focused: BaseAlerts.success.main,
}

export const ButtonInfoColor: ButtonColorInterface = {
    background: BaseAlerts.info.main,
    color: BaseAlerts.info.contrast,
    actionableColor: BaseAlerts.info.main,
    selected: BaseAlerts.info.main,
    focused: BaseAlerts.info.main,
}

export const ButtonWarningColor: ButtonColorInterface = {
    background: BaseAlerts.warning.main,
    color: BaseAlerts.warning.contrast,
    actionableColor: BaseAlerts.warning.main,
    selected: BaseAlerts.warning.main,
    focused: BaseAlerts.warning.main,
}

export const ButtonDangerColor: ButtonColorInterface = {
    background: BaseAlerts.danger.main,
    color: BaseAlerts.danger.contrast,
    actionableColor: BaseAlerts.danger.main,
    selected: BaseAlerts.danger.main,
    focused: BaseAlerts.danger.main,
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

