import { ReactNode, SyntheticEvent, useMemo } from 'react';
import styled from 'styled-components';
import { StaticButton } from '../../button';

const Frame = styled.span`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const StyledBtn = styled(StaticButton)`
  text-decoration: none;
  background: transparent;

  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;

  cursor: pointer;

  border: none;

  &:disabled {
    opacity: 40%;
    cursor: not-allowed;
  }
`;

type Props = {
  currLocale: string;
  locales: string[];
  flagMap: Record<string, () => ReactNode>;

  uid?: string;
  className?: string;
  onChange: (newLocale: string) => void | Promise<void>;
  excludeCurrent?: boolean;
};

export default function LanguageSelectorSpread({
  currLocale,
  locales,
  flagMap,
  onChange,
  uid = '',
  className = '',
  excludeCurrent = true,
}: Props) {
  const renderedLocales = useMemo(() => {
    function handleClick(event: SyntheticEvent<HTMLButtonElement>) {
      let newLocale = event.currentTarget.name;
      // The current locale will not have hreflang set....

      onChange(newLocale);
    }

    return locales.reduce<ReactNode[]>((acc, value) => {
      const LocaleElem = flagMap[value];
      let disabled = value === currLocale;
      if (disabled && excludeCurrent) return acc;

      return [
        ...acc,
        <StyledBtn
          type="button"
          tag={value}
          onClick={handleClick}
          key={`${uid}-language-spread-btn-${value}`}
          className={`language-btn ${value}`}
          disabled={disabled}
        >
          <LocaleElem />
        </StyledBtn>,
      ];
    }, []);
  }, [currLocale, uid, excludeCurrent]);

  return (
    <Frame className={`language-picker spread ${className}`}>
      {renderedLocales}
    </Frame>
  );
}
