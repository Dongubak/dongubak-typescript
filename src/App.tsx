import React from 'react';
import Hello from './component/Hello';
import Hello2 from './component/Hello2';
import Counter from './component/Counter';
import { TodoProvider } from './context/TodoContext';
import TodoComponent from './component/TodoComponent';

const App = () => {
  return (
    <>
      <Hello name={'dongubak'} />
      <Hello2 name={'dongubak'}></Hello2>
      <Counter></Counter>
      <TodoProvider>
        <TodoComponent></TodoComponent>
      </TodoProvider>
    </>
  );
}


export default App;