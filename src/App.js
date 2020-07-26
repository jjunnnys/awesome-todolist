import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCrate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCrate />
      </TodoTemplate>
    </>
  );
}

export default App;
