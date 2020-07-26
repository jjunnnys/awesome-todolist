import React from 'react';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from '../TodoContenxt';

// 우측에 나타나는 쓰레기통 보여주는 컴포넌트
const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
// 왼쪽에 있는 체크를 보여주는 컴포넌트
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      font-size: 18px; /*font-size가 의미하는 건 아이콘 크기*/
      border: 1px solid #38d9a0;
      color: #38d9a9;
    `}
`;
// 텍스트를 보여주는 컴포넌트
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
// 위 3개의 컴포넌트가 안으로 들어가지게 만드는 컴포넌트
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const TodoItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () =>
    dispatch({
      type: 'TOGGLE',
      id,
    });
  const onRemove = () =>
    dispatch({
      type: 'REMOVE',
      id,
    });
  return (
    <div>
      <TodoItemBlock>
        <CheckCircle done={done} onClick={onToggle}>
          {done && <CheckOutlined />}
        </CheckCircle>
        <Text done={done}>{text}</Text>
        <Remove onClick={onRemove}>
          <DeleteOutlined />
        </Remove>
      </TodoItemBlock>
    </div>
  );
};

export default React.memo(TodoItem);
