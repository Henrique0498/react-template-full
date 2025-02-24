import { ComponentProps } from "react";

import logo from "/logo.svg";

import * as S from "./styled";

interface InHeader extends ComponentProps<"header"> {}

export function HeaderDefault(props: InHeader) {
  return (
    <S.Container {...props}>
      <img src={logo} className="logo" alt="Vite logo" />

      <nav className="navigation">
        <ul>
          <li>Pagina Inicial</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </S.Container>
  );
}

export function HeaderAuthenticated(props: InHeader) {
  return (
    <S.Container {...props}>
      <img src={logo} className="logo" alt="Vite logo" />

      <nav className="navigation">
        <ul>
          <li>Pagina Inicial</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </S.Container>
  );
}
