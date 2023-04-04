import styled from "styled-components";

export const Input = styled.input`
  width: 230px;
  display: block;
  height: 20px;
  margin-bottom: 30px;
  text-decoration: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Label = styled.label`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 5px;

  color: #333;
  opacity: 0.8;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: #1E90FF;
    color: #f8f8f8;
  }
`;
