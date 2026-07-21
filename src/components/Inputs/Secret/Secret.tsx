import {
  useState,
  type HTMLAttributes,
  type JSX,
  type MouseEvent,
} from 'react';
import { BaseInput, type BaseInputProps } from '../Simple';
import { InvisibleIcon, VisibleIcon } from './icons';
import styles from './secret.module.css';

type InputState = 'open' | 'closed';

const IconMap: Record<
  InputState,
  ({}: HTMLAttributes<HTMLOrSVGElement>) => JSX.Element
> = {
  open: VisibleIcon,
  closed: InvisibleIcon,
};

type Props = {
  initialState?: InputState;
  classNameSecret?: string;
} & BaseInputProps;

export default function SecretInput({
  initialState,
  variant,
  classNameSecret,
  ...props
}: Props) {
  const [state, setState] = useState<InputState>(initialState ?? 'closed');

  function handleStateToggle() {
    setState(state == 'closed' ? 'open' : 'closed');
  }

  // Prevents temporary flicker when mouseDown event removes focus from input
  function preventBlur(event: MouseEvent<HTMLOrSVGElement>) {
    event.preventDefault();
  }

  const Icon = IconMap[state];
  return (
    <BaseInput {...props} type={state == 'closed' ? 'password' : 'text'}>
      <Icon
        onClick={handleStateToggle}
        onMouseDown={preventBlur}
        className={`${classNameSecret ?? ''} ${styles.icon}`}
      />
    </BaseInput>
  );
}
