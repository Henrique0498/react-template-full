import { Outlet } from "react-router-dom";
import S from "./styled";
import { HeaderAuthenticated } from "@organisms/Header";

export function TemplateAuthenticated() {
  return (
    <S.Container>
      <HeaderAuthenticated />

      <main>
        <Outlet />
      </main>
    </S.Container>
  );
}
