import * as S from "./styled";

import { Modal as ModalMui, ModalProps } from "@mui/material";

interface InModal extends ModalProps {}

export default function Modal({ children, ...props }: InModal) {
  return (
    <ModalMui {...props}>
      <S.Container>{children}</S.Container>
    </ModalMui>
  );
}
