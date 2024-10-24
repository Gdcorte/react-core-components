// CSS media snippets to improve code maintanability

import { configs } from './configs';

export const phoneWindow = `@media only screen and (max-width: ${configs.phone}px)`;
export const smallPhoneWindow = `@media only screen and (max-width: 321px)`;
export const tabletWindow = `@media only screen and (min-width: ${
  configs.phone + 1
}px) and (max-width: ${configs.tablet}px)`;
export const desktopWindow = `@media only screen and (min-width: ${
  configs.tablet + 1
}px)`;

export const smallerThanDesktopWindow = `@media only screen and (max-width: ${configs.tablet}px)`;
export const greaterThanPhoneWindow = `@media only screen and (min-width: ${
  configs.phone + 1
}px)`;
