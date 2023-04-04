import styled from "styled-components";

export const H1 = styled.h1`
  margin: 5px;
  margin-bottom: 20px;
  margin-left: 50px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  border-bottom: -1111px solid #ccc;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;