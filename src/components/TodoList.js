import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1; /* 자신이 차지할 수 있는 영역 다 차지함 (display: flex가 된 상황에서) */
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return <TodoListBlock>TodoListItem</TodoListBlock>;
};

export default TodoList;
