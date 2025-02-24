import { customRenderJest } from "@utils/JestUtils";

import Header from '.'

describe('<Header />', () => {
  it('should render', () => {
    const { container } = customRenderJest(<Header />)

    expect(container.firstChild)
  })
})