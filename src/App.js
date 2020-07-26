import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCrate from './components/TodoCreate';
import { TodoProvider } from './TodoContenxt';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCrate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
