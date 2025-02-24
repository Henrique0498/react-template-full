import { customRenderJest } from "@utils/JestUtils";

import { HeaderAuthenticated } from ".";

describe("<Header />", () => {
  it("should render", () => {
    const { container } = customRenderJest(<HeaderAuthenticated />);

    expect(container.firstChild);
  });
});
