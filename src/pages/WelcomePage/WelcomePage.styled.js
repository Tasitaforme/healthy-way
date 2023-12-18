import styled from 'styled-components';
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  &::before {
    content: '';
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #e3ffa8;
  }
`;
