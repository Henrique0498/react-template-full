import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.cyan[400]};
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cyan[500]};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animation.duration.xxSlow};

  &:hover {
    background-color: ${({ theme }) => theme.colors.cyan[500]};
    border: 1px solid ${({ theme }) => theme.colors.cyan[600]};
  }
`;
