import { ColorElement } from "@gdcorte/react-core-theme";
import { useMemo } from "react";
import styled, { css } from "styled-components";

type ColorProps = {
  bgColor?: string;
  barColor?: ColorElement;
};

type Props = {
  progress: number;
  size?: string;
} & ColorProps;

const Frame = styled.div<{
  $bgColor?: string;
}>`
  position: relative;
  display: flex;
  flex: 1 1 0;

  border-radius: 5px;

  background: ${({ theme, $bgColor }) =>
    $bgColor ? $bgColor : theme.background.contrast};
`;

const DefaultProgressColor = css`
  background: repeating-linear-gradient(
    45deg,
    ${({ theme }) => theme.background.shade},
    ${({ theme }) => theme.background.tone} 10%,
    ${({ theme }) => theme.background.tint} 20%
  );
`;

const CustomProgressColor = css<{ $barColor?: ColorElement }>`
  background: repeating-linear-gradient(
    45deg,
    ${({ $barColor }) => $barColor?.shade},
    ${({ $barColor }) => $barColor?.tone} 10%,
    ${({ $barColor }) => $barColor?.tint} 20%
  );
`;

const Progress = styled.span<{ $barColor?: ColorElement }>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  height: 100%;

  border-radius: 5px;

  ${({ $barColor }) => ($barColor ? CustomProgressColor : DefaultProgressColor)}

  &.incomplete {
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
  }
`;

export default function ProgressBar({
  size = "20px",
  progress,
  bgColor,
  barColor,
}: Props) {
  const normProgress = useMemo(() => {
    if (progress < 0) return 0;
    if (progress > 1) return 1;

    return progress;
  }, [progress]);

  return (
    <Frame style={{ height: size }} $bgColor={bgColor} className="progress-bar">
      <Progress
        $barColor={barColor}
        style={{ width: `${100 * normProgress}%` }}
        className={`
          progress-bar-completed 
          ${normProgress < 1 ? "incomplete" : ""}  
        `}
      />
    </Frame>
  );
}
