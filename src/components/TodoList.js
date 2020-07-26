import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContenxt';

const TodoListBlock = styled.div`
  flex: 1; /* 자신이 차지할 수 있는 영역 다 차지함 (display: flex가 된 상황에서) */
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const state = useTodoState();
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={false} />
      <TodoItem text="아랑" done={false} />
      <TodoItem text="알ㄹ아라" done={true} />
    </TodoListBlock>
  );
};

export default TodoList;
