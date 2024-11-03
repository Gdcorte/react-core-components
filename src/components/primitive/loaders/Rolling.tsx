// https://css-loaders.com/rolling/ #3
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;

  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.background.color}44;
  z-index: 999;
`;

const Spinner = styled.span`
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;

  &:before,
  &:after {
    content: '';
    grid-area: 1/1;
    border-radius: 50%;
    animation: l3-0 2s alternate infinite ease-in-out;
  }

  &:before {
    margin: 25%;
    ${({ theme }) =>
      `background: repeating-conic-gradient(${theme.alerts.info.tint} 0 60deg, ${theme.alerts.info.shade} 0 120deg);`}
    translate: 0 50%;
    rotate: -150deg;
  }

  &:after {
    padding: 10%;
    margin: -10%;
    ${({ theme }) =>
      `background: repeating-conic-gradient(${theme.alerts.info.shade} 0 30deg, ${theme.alerts.info.tint} 0 60deg);`}
    mask:
      linear-gradient(transparent 50%, #000 0) content-box exclude,
      linear-gradient(transparent 50%, #000 0);
    rotate: -75deg;
    animation-name: l3-1;
  }
  @keyframes l3-0 {
    to {
      rotate: 150deg;
    }
  }
  @keyframes l3-1 {
    to {
      rotate: 75deg;
    }
  }
`;

type Props = {
  className?: string;
};

export default function LoaderTriangle({ className = '' }: Props) {
  return (
    <Container className={`spinner-container ${className}`}>
      <Spinner className="loader triangle-spinner" />
    </Container>
  );
}
