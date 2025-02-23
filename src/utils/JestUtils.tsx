import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

export function customRenderJest(ui: ReactNode, options = {}) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
}
