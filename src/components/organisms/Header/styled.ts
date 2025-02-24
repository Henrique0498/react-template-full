import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;

  & > .logo {
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
    display: block;
  }

  & > .navigation {
    ul {
      display: flex;
      list-style: none;
      gap: 1rem;
    }
  }
`;
