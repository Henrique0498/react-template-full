import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: "translate(-50%, -50%)";
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 0.25rem;
`;
