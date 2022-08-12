import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

import {
  DarkBlue, 
  DarkGreen, 
  DarkPink, 
  DarkYellow, 
  LightBlue, 
  LightGreen, 
  LightPink, 
  LightYellow,
  TestTheme,
  ThemeManager
} from '../src/themes'

let themeManager = new ThemeManager()

const FullTheme = themeManager.buildTheme(TestTheme)

const themes = [
  DarkYellow, 
  DarkGreen, 
  DarkBlue, 
  DarkPink, 
  LightGreen, 
  LightBlue, 
  LightPink, 
  LightYellow];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}