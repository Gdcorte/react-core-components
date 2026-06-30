import { ReactNode, useMemo } from 'react';
import { SingleValue } from 'react-select';
import styled from 'styled-components';
import { SelectOption, SimpleSelect } from '../../primitive/select';

const Frame = styled.span`
  display: flex;
  flex-direction: row;
  background: inherit;
  gap: 8px;
`;

const LangCircle = styled.div`
  padding: 0px;
  margin: 0;

  width: 20px;
  height: 20px;
`;

type Props = {
  currLocale: string;
  locales: readonly string[];
  flagMap: Record<string, () => ReactNode>;
  className?: string;
  onChange: (newLocale: string) => void | Promise<void>;
};

export default function LanguageSelectorSwitch({
  locales,
  currLocale,
  flagMap,
  className = '',
  onChange,
}: Props) {
  async function handleClickEvent(newValue: SingleValue<SelectOption>) {
    const newLocale = newValue?.value;
    if (newLocale === undefined) return;

    onChange(newLocale);
  }

  const renderedOptions = useMemo(() => {
    return locales.map<SelectOption>((name) => {
      const LocaleElem = flagMap[name];

      return {
        label: (
          <LangCircle
            className={`language-switch-option ${name}`}
            key={`language-switcher-${name}`}
          >
            <LocaleElem />
          </LangCircle>
        ),
        value: name,
      };
    });
  }, []);

  const selectedOption = useMemo(() => {
    return renderedOptions.find((option) => option.value === currLocale);
  }, [currLocale, renderedOptions]);

  return (
    <Frame className={`language-picker switch ${className}`}>
      <SimpleSelect
        onChange={handleClickEvent}
        value={selectedOption}
        options={renderedOptions}
        isSearchable={false}
        hideSelectedOptions={true}
      />
    </Frame>
  );
}
