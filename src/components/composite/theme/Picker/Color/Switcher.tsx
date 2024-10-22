import { SelectOption, SimpleSelect } from '@/src/components/primitive/select';
import {
  ColorVariants,
  isColorVariant,
  isThemeVariant,
  useThemeProviderCtx,
} from '@gdcorte/react-core-theme';
import { useMemo } from 'react';
import { SingleValue } from 'react-select';
import styled, { useTheme } from 'styled-components';
import { generateFullColorMap } from './utils';

const Frame = styled.span`
  display: flex;
  flex-direction: row;
  background: inherit;
  gap: 8px;
`;

const ColorCircle = styled.div<{ $colorCode: string }>`
  background: ${({ $colorCode }) => $colorCode};
  padding: 10px;
  margin: 0;

  border: none;
  border-radius: 50%;

  width: 0px;
  height: 0px;
`;

type Props = {
  className?: string;
  onChangeOverride?: (newColor: ColorVariants) => void | Promise<void>;
};

export default function ColorSelectorSwitch({
  className = '',
  onChangeOverride,
}: Props) {
  const {
    presets: { theme, color },
  } = useTheme();
  const { onColorChange } = useThemeProviderCtx();

  async function handleClickEvent(newValue: SingleValue<SelectOption>) {
    const newColor = newValue?.value;
    if (newColor === undefined || !isColorVariant(newColor)) {
      return;
    }

    if (onChangeOverride !== undefined) {
      onChangeOverride(newColor);
      return;
    }

    onColorChange(newColor);
  }

  const renderedOptions = useMemo(() => {
    if (!isThemeVariant(theme)) return [];

    const colorMap = generateFullColorMap(theme);

    return Object.entries(colorMap).map<SelectOption>(([name, code]) => {
      return {
        label: (
          <ColorCircle
            className={`color-option ${name}`}
            $colorCode={code}
            key={`color-switcher-btn-${name}`}
          />
        ),
        value: name,
      };
    });
  }, [theme]);

  const selectedOption = useMemo(() => {
    return renderedOptions.find((option) => option.value === color);
  }, [color, renderedOptions]);

  return (
    <Frame className={`color-picker switch ${className}`}>
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
