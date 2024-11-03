import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.background.color}44;
  z-index: 999;
`;
