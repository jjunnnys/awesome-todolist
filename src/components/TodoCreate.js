import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5; /* 딱히 5로 지정한 이유는 없음 그냥 높은 숫자 선택 */
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;

  /* 버튼 위치 잡기 */
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 40px;

  border: none;
  outline: none;

  span {
    flex: 1;
  }

  transition: 0.125s all ease-in;
  ${({ open }) =>
    open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

// 특정 폼의 위치를 정해준다.
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const InsertForm = styled.div`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px; /* 둥근 모서리를 삐저나가지 않게 하기위한 작업 */
  border-bottom-right-radius: 16px;

  border-top: 1px solid #e9ecef; /*윗부분 테두리*/
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;

  box-sizing: border-box; /*이렇게 해야 박스 밖으로 안 삐저나감*/
`;

function TodoCrate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input placeholder="할 일을 입력 후, Enter을 누르세요." autoFocus />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton type="button" onClick={onToggle} open={open}>
        <PlusOutlined />
      </CircleButton>
    </>
  );
}

export default TodoCrate;
