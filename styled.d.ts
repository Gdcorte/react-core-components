// import original module declarations
import 'styled-components';
import { ExpandedThemeInterface, OutputTheme } from './src/themes/interfaces'

// and extend them!
declare module 'styled-components' {
  // export interface DefaultTheme extends ExpandedThemeInterface {
      
  // }

  export interface DefaultTheme{
    presets: {[key:string]: string},
    theme: OutputTheme
  }
}