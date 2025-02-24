import { useState } from "react";

import { Button } from "@atoms/Button";

import S from "./styled";
import Modal from "@molecules/Modal";

export function Homepage() {
  const [modal, setModal] = useState(false);

  return (
    <S.Container>
      <h1>Vite + React</h1>

      <Button onClick={() => setModal(true)}>Abrir Modal</Button>

      <Modal open={modal} onClose={() => setModal(false)}>
        <div>teste</div>
      </Modal>
    </S.Container>
  );
}
