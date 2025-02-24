import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;

  & > main {
    flex: 1;
  }
`;

export default {
  Container,
};
