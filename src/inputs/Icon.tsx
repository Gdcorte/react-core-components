import { ReactNode } from "react";
import styled from "styled-components";
import Input, { type SimpleInputProps } from "./Simple";
import {
  DisabledColorStyle,
  ErrorColorStyle,
  RequiredColorStyle,
} from "./style";
import { convertStatusFlagToClass } from "./utils";

const Frame = styled.div`
  display: flex;
  flex: 1 1 0;

  gap: 4px;
`;

const IconBox = styled.div`
  display: flex;
  max-height: 2rem;
  width: 2rem;

  svg {
    width: unset;
    height: unset;
  }
`;

const IconFrame = styled.div`
  display: flex;
  align-items: flex-end;

  height: inherit;
  width: 32px;

  ${RequiredColorStyle};
  ${ErrorColorStyle};
  ${DisabledColorStyle};

  &.disabled {
    background: transparent;
  }
`;

const Title = styled.p`
  margin: 0px;
`;

const InputFrame = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;

  gap: 2px;
  height: inherit;

  .simple-input-frame {
    justify-content: center;
  }
`;

type Props = {
  icon: ReactNode;
  label?: string;
} & SimpleInputProps;

export default function IconInput({
  icon,
  label,
  customColor,
  focusColor,
  ...props
}: Props) {
  const flagClass = convertStatusFlagToClass(props);
  return (
    <Frame className={`icon-input-frame`}>
      <IconFrame className={`icon-input-icon-box ${flagClass}`}>
        <IconBox>{icon}</IconBox>
      </IconFrame>

      <InputFrame className={`icon-input-input-label-box ${flagClass}`}>
        {label && <Title>{label}</Title>}
        <Input {...props} />
      </InputFrame>
    </Frame>
  );
}
