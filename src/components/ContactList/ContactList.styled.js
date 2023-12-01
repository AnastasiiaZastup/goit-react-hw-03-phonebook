import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 18px;
  margin-left: 50px;
  margin-bottom: 19px;
  font-size: 18px;
  font-weight: 500;
  align-items: center;
`;

export const ButtonList = styled.button`
  font-size: 17px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.5s ease;
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: blue;
    outline: none;
  }
`;
