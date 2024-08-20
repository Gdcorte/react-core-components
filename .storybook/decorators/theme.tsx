import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  color: ${({ theme }) => theme.background.contrast};
  stroke: ${({ theme }) => theme.background.contrast};
  fill: ${({ theme }) => theme.background.contrast};
`;

export default function ThemeDecorator(Story) {
  return (
    <Frame>
      <Story />
    </Frame>
  );
}
