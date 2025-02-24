import { customRenderJest } from "@utils/JestUtils";

import Modal from '.'

describe('<Modal />', () => {
  it('should render', () => {
    const { container } = customRenderJest(<Modal />)

    expect(container.firstChild)
  })
})