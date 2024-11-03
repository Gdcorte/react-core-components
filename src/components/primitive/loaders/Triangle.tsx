// https://css-loaders.com/clones/ #12
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
  height: 40px;
  aspect-ratio: 0.866;
  display: grid;
  background: conic-gradient(
    from -121deg at right,
    transparent,
    ${({ theme }) => theme.alerts.info.tone} 1deg 60deg,
    transparent 61deg
  );
  animation: l12 2s infinite linear;
  transform-origin: 33% 50%;

  &:before,
  &:after {
    content: '';
    grid-area: 1/1;
    background: conic-gradient(
      from -121deg at right,
      transparent,
      ${({ theme }) => theme.alerts.info.tint} 1deg 60deg,
      transparent 61deg
    );
    transform-origin: inherit;
    animation: inherit;
  }

  &:after {
    background: conic-gradient(
      from -121deg at right,
      transparent,
      ${({ theme }) => theme.alerts.info.shade} 1deg 60deg,
      transparent 61deg
    );
    animation-duration: 3s;
  }

  @keyframes l12 {
    100% {
      transform: rotate(1turn);
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
