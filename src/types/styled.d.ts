/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import theme from "@styles/theme";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
