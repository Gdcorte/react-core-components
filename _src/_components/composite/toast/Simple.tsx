import { useOutsideClick } from '@/src/hooks';
import { CloseIcon } from '@/src/icons';
import { AlertVariants, ColorElement } from '@gdcorte/react-core-theme';
import { ReactNode, useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

const VISIBILITY_PHASING_MS = 200;
const INVISIBILITY_PHASING_MS = 1000;
const TRANSITION_MS = 800;

const Container = styled.span<{ $color: ColorElement }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;

  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  transition:
    opacity ${TRANSITION_MS}ms,
    visibility 0s linear 3s;

  &.visible {
    opacity: 1;
  }

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  border-radius: 5px;

  background: ${({ $color }) => $color.contrast};
  color: ${({ $color }) => $color.color};
  fill: ${({ $color }) => $color.tint};

  padding: 8px;
`;

const Content = styled.span``;

type Props = {
  children: ReactNode;
  variation?: AlertVariants;
  timer?: number;
  visible?: boolean;
  onClose?: () => void | Promise<void>;
};

/**
 *
 * @param timer - time, in ms, to dismiss the message. If set, needs to be greater than 800ms
 * @returns
 */
export default function ToastMessage({
  children,
  onClose,
  timer,
  visible = false,
  variation = 'danger',
}: Props) {
  const [handle, setHandle] = useState<NodeJS.Timeout | undefined>(undefined);
  const { alerts } = useTheme();
  const ref = useRef<HTMLObjectElement>(null);

  const [visibility, setVisibility] = useState({
    status: visible,
    className: '',
  });

  useEffect(() => {
    let timerHandle: NodeJS.Timeout | undefined;
    if (timer && timer > TRANSITION_MS) {
      timerHandle = setTimeout(async () => {
        if (onClose) await onClose();
      }, timer);

      setHandle(timerHandle);
      return () => clearTimeout(timerHandle);
    }
  }, [timer, onClose]);

  /**
   * This effect handles a phased out visibile / invisible approach.
   * Basically, whenever the visibility changes,
   * the element is always inserted in the DOM as invisble (empty string).
   *
   * When it is supposed to be visible,
   * It will switch to a visible classname after VISIBILITY_PHASING_MS.
   * This will trigger a smooth fade-in transition.
   *
   * When it is supposed to be invisible,
   * It will change the classname to the invisibility classname (empty string).
   * This ensures a smooth fade-out.
   * after INVISIBILITY_PHASING_MS has passed will remove from the DOM.
   * This will ensure the toast will not occupy any space in the DOM,
   * hence it will not block any other component.
   * */
  useEffect(() => {
    setVisibility({
      status: true,
      className: '',
    });

    if (visible) {
      const visibilityHandler = setTimeout(() => {
        setVisibility({
          status: true,
          className: 'visible',
        });
      }, VISIBILITY_PHASING_MS);
      return () => clearTimeout(visibilityHandler);
    }

    const visibilityHandler = setTimeout(() => {
      setVisibility({
        status: false,
        className: '',
      });
    }, INVISIBILITY_PHASING_MS);
    return () => clearTimeout(visibilityHandler);
  }, [visible]);

  async function handleClose() {
    if (handle) clearTimeout(handle);

    if (onClose !== undefined) {
      await onClose();
    }
  }

  useOutsideClick(ref, handleClose);

  if (!visibility.status) return <></>;

  return (
    <Container
      className={`toast-message ${visibility.className}`}
      ref={ref}
      $color={alerts[variation]}
    >
      <Content>{children}</Content>
      <CloseIcon onClick={handleClose} />
    </Container>
  );
}
