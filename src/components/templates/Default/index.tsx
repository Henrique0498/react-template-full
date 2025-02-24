import { Outlet } from "react-router-dom";

import S from "./styled";
import { HeaderDefault } from "@organisms/Header";

export function TemplateDefault() {
  return (
    <S.Container>
      <HeaderDefault />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2022 My Website</p>
      </footer>
    </S.Container>
  );
}
