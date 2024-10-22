import { ReactNode, useMemo } from "react";
import styled, { css } from "styled-components";

type ColorProps = {
  bgColor?: string;
  circleColor?: string;
};

type Props = {
  progress: number;
  circles?: number;
  size?: string;
} & ColorProps;

const Frame = styled.div`
  display: flex;
  flex: 1 1 0;
  width: fit-content;
  background: transparent;

  gap: 6px;
`;

const DefaultColorCircles = css<{
  $progress: number;
}>`
  ${({ theme, $progress }) => `
  background: radial-gradient(
    ${theme.background.shade} ${$progress * 30}%,
    ${theme.background.contrast} ${$progress * 75}%
    );
  `}
`;

const CustomColorCircles = css<{
  $bgColor?: string;
  $circleColor?: string;
  $progress: number;
}>`
  ${({ $bgColor, $circleColor, $progress }) => `
  background: radial-gradient(
    ${$circleColor} ${$progress * 30}%,
    ${$bgColor} ${$progress * 75}%
    );
  `}
`;

const Circle = styled.span<{
  $bgColor?: string;
  $circleColor?: string;
  $progress: number;
}>`
  border-radius: 50%;

  ${({ $bgColor, $circleColor }) =>
    $bgColor && $circleColor ? CustomColorCircles : DefaultColorCircles}; 
    }
`;

function normalizeProgress(progress: number, circles: number) {
  if (progress < 0) return 0;
  if (progress > 1) return circles;

  return progress * circles;
}

export default function ProgressCircle({
  circles = 5,
  size = "20px",
  progress,
  circleColor,
  bgColor,
}: Props) {
  const computedCircles = useMemo<ReactNode[]>(() => {
    let normProgress = normalizeProgress(progress, circles);
    let finalCircles: ReactNode[] = [];
    const uid = Math.random().toString(36);

    for (let i = 0; i < circles; i++) {
      let currProgress = normProgress;
      if (currProgress > 1) {
        currProgress = 1;
      }
      if (currProgress < 0) {
        currProgress = 0;
      }

      finalCircles.push(
        // TODO: Allow circle progress to be rendered with partial custom colors
        <Circle
          $circleColor={circleColor}
          $bgColor={bgColor}
          $progress={currProgress}
          style={{ width: size, height: size }}
          key={`${uid}-${i}`}
        />
      );

      normProgress -= currProgress;
    }

    return finalCircles;
  }, [progress, circleColor, bgColor]);

  return <Frame>{computedCircles}</Frame>;
}
