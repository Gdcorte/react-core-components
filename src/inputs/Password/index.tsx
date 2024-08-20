import { useState } from "react";
import styled from "styled-components";
import { CustomColor } from "../../interface";
import SimpleInput, { SimpleInputProps } from "../Simple";
import { BaseInputStyle } from "../style";
import { convertStatusFlagToClass } from "../utils";
import LockedIcon from "./Locked";
import UnlockedIcon from "./Unlocked";

const IconBox = styled.div<CustomColor>`
  display: flex;

  ${BaseInputStyle};

  stroke: ${({ theme, customColor }) =>
    customColor ?? theme.background.contrast};

  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
  }
`;

const Frame = styled.div<{ iconPos?: "left" | "right" }>`
  display: flex;
  flex: 1 1 0;
  flex-direction: ${({ iconPos }) =>
    iconPos === "left" ? "row-reverse" : "row"};

  input {
    ${({ iconPos }) =>
      iconPos === "left"
        ? "border-radius: 0px 5px 5px 0px ;"
        : "border-radius: 5px 0px 0px 5px;"};
  }

  ${IconBox} {
    ${({ iconPos }) =>
      iconPos === "left"
        ? `border-radius: 5px 0px 0px 5px;
        border-right: none;
        `
        : `border-radius: 0px 5px 5px 0px;
        border-left: none;`};
  }
`;

export type PasswordInputProps = {
  iconPos?: "left" | "right";
} & Omit<SimpleInputProps, "type">;

type Props = PasswordInputProps & CustomColor;

export default function PasswordInput({
  iconPos,
  disabled,
  customColor,
  ...props
}: Props) {
  const [type, setType] = useState<"password" | "text">("password");

  function handleTypeChange() {
    if (disabled === true) return;

    setType(type === "password" ? "text" : "password");
  }

  return (
    <Frame className="password-input-frame" iconPos={iconPos}>
      <SimpleInput
        disabled={disabled}
        customColor={customColor}
        {...props}
        type={type}
      />
      <IconBox
        className={`password-input-icon-box ${convertStatusFlagToClass({ disabled, ...props })}`}
        onClick={handleTypeChange}
        customColor={customColor}
      >
        {type === "password" ? <LockedIcon /> : <UnlockedIcon />}
      </IconBox>
    </Frame>
  );
}
