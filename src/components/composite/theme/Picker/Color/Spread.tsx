import {
  ColorVariants,
  isColorVariant,
  isThemeVariant,
  useThemeProviderCtx,
} from '@gdcorte/react-core-theme';
import { SyntheticEvent } from 'react';
import styled, { useTheme } from 'styled-components';
import { generateFullColorMap } from './utils';

const Frame = styled.span`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const ColorBtn = styled.button<{ $colorCode: string }>`
  background: ${({ $colorCode }) => $colorCode};
  padding: 20px;

  cursor: pointer;

  border: none;
  border-radius: 50%;
`;

type Props = {
  uid?: string;
  className?: string;
  onChangeOverride?: (newColor: ColorVariants) => void | Promise<void>;
};

export default function ColorSelectorSpread({
  uid = '',
  className = '',
  onChangeOverride,
}: Props) {
  const {
    presets: { theme, color },
  } = useTheme();
  const { onColorChange } = useThemeProviderCtx();

  async function handleClickEvent(
    event: SyntheticEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const newColor = event.currentTarget.name;
    if (!isColorVariant(newColor)) return;

    if (onChangeOverride !== undefined) {
      onChangeOverride(newColor);
      return;
    }

    onColorChange(newColor);
  }

  // This should nevet happen, but just to be on the safer side...
  if (!isThemeVariant(theme) || !isColorVariant(color)) return <></>;

  const colorMap = generateFullColorMap(theme, color);

  return (
    <Frame className={`color-picker spread ${className}`}>
      {Object.entries(colorMap).map(([name, code]) => {
        return (
          <ColorBtn
            aria-label={`color-btn${name}`}
            className={`color-option ${name}`}
            name={name}
            onClick={handleClickEvent}
            $colorCode={code}
            key={`${uid}-color-spread-btn-${name}`}
          />
        );
      })}
    </Frame>
  );
}
