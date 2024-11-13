import { phoneWindow } from '@/src/styles';
import { ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';
import { SolidButton } from '../../primitive';
import { CloseIcon } from './icons';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex: 1 1 0;

  width: 100%;
  height: 100%;

  z-index: 2;

  box-sizing: border-box;
  padding: 4px;

  ${phoneWindow} {
    padding: 0px 4px;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  height: fit-content;
  max-height: 100%;

  padding: 8px;

  background: ${({ theme }) => theme.background.color};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.background.contrast};

  &.static {
    height: unset;
    flex: 1 1 0;
  }

  gap: 8px;

  ${phoneWindow} {
    padding: 8px 4px;
  }
`;

const Header = styled.span`
  display: flex;
  width: 100%;

  justify-content: flex-end;

  border-bottom: 2px solid ${({ theme }) => theme.background.tone};
  padding-bottom: 4px;
  margin-bottom: 4px;

  ${phoneWindow} {
    justify-content: center;
  }
`;

const Content = styled.main`
  display: flex;
  flex: 1 1 0;
`;

const StyledButton = styled(SolidButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${phoneWindow} {
    padding: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

type Props = {
  className?: string;
  dynamicFrame?: boolean;
  children: ReactNode;
  onClose: () => void;
};
export default function AbsoluteModal({
  className,
  dynamicFrame = false,
  children,
  onClose,
}: Props) {
  const {
    alerts: { danger },
  } = useTheme();
  return (
    <Container className={`${className} `}>
      <Frame className={`${dynamicFrame ? 'dynamic' : 'static'}`}>
        <Header>
          <StyledButton
            customColor={danger}
            tag="close-modal"
            onClick={onClose}
          >
            <CloseIcon />
          </StyledButton>
        </Header>
        <Content>{children}</Content>
      </Frame>
    </Container>
  );
}
