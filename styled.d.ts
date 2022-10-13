// import original module declarations
import 'styled-components';
import { OutputTheme } from './src/themes'

// and extend them!
declare module 'styled-components' {

  export interface DefaultTheme{
    presets: {[key:string]: string},
    theme: OutputTheme
  }
}