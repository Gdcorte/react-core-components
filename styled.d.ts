// import original module declarations
import { BaseTheme } from "@gdcorte/react-core-theme";
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}
