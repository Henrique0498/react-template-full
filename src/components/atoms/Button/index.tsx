import { ComponentProps } from "react";

import * as S from "./styled";

export function Button(props: ComponentProps<"button">) {
  return <S.Button {...props} />;
}
