// import original module declarations
import 'styled-components';
import { ExpandedThemeInterface, ThemeInterface } from './src/themes/interfaces'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ExpandedThemeInterface {
      
  }
}