import styled from "styled-components";

export const Item = styled.li`
  font-size: 20px;
  margin-left: 50px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 25px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  background-color: #f8f8f8;
  text-shadow: 1px 1px 1px #ccc;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateX(5px);
  }
`;