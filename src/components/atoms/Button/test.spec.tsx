import { screen } from "@testing-library/react";
import { Button } from "./";
import { customRenderJest } from "@utils/JestUtils";

test("renders button with text", async () => {
  customRenderJest(<Button>Click me</Button>);
  const button = screen.getByText(/click me/i);
  expect(button).toBeInTheDocument();
});
