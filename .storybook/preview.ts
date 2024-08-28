import type { Preview, ReactRenderer } from "@storybook/react";

import ThemeDecorator from "@/.storybook/decorators/theme";
import { createThemeWithDefaultPresets } from "@gdcorte/react-core-theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const lightTheme = createThemeWithDefaultPresets({
  name: "green",
  theme: "light",
  combination: "tetradic",
});

const darkTheme = createThemeWithDefaultPresets({
  name: "green",
  theme: "dark",
  combination: "tetradic",
});

const GlobalStyles = createGlobalStyle`
  .sb-story{
    stroke: currentColor;
  }
`;

const preview: Preview = {
  globalTypes: {
    theme: { type: "string" },
  },
  decorators: [
    ThemeDecorator,
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "dark",
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyles,
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
  },
};

export default preview;
