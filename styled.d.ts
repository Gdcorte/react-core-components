// import original module declarations
import {
  AlertThemes,
  BaseTheme,
  ChartTheme,
  Tetradic,
} from "@gdcorte/react-core-theme";
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme
    extends BaseTheme<Tetradic, ChartTheme, AlertThemes> {}
}
