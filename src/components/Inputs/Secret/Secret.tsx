import { useState, type HTMLAttributes, type JSX } from 'react';
import { SimpleInput, type SimpleInputProps } from '../Simple';
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
  classMap?: {
    root: string;
    input: string;
    icon: string;
  };
} & SimpleInputProps;

export default function SecretInput({
  initialState,
  className,
  classMap,
}: Props) {
  const [state, setState] = useState<InputState>(initialState ?? 'closed');

  function handleStateToggle() {
    setState(state == 'closed' ? 'open' : 'closed');
  }

  const Icon = IconMap[state];
  return (
    <div className={`${classMap?.root} ${styles.root}`}>
      <SimpleInput
        className={`${className ?? ''} ${styles.input} ${classMap?.input}`}
      />

      <Icon
        onClick={handleStateToggle}
        className={`${classMap?.icon} ${styles.icon}`}
      />
    </div>
  );
}
