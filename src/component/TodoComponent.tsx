import React from 'react';
import { useTodo } from '../context/TodoContext';

interface Todo {
   id: number;
   content: string;
   done: boolean;
}

const TodoComponent = () => {
   const {
      todos,
      addTodo,
      removeTodo,
      toggleTodo
   } = useTodo();
   
   const [text, setText] = React.useState<string>('');

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
   }

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addTodo(text);
      setText('');
   }

   const onRemove = (id: number) => {
      removeTodo(id);
   }

   const onToggle = (id: number) => {
      toggleTodo(id);
   }

   return (
      <div>
         <form onSubmit={onSubmit}>
            <input value={text} onChange={onChange}></input>
            <button type="submit">submit</button>
         </form>

         <ul>
            {
               todos.map((todo: Todo) => (
                  <li key={todo.id}>
                     <span onClick={() => onToggle(todo.id)}
                     style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.content}</span>
                     <button onClick={() => onRemove(todo.id)}>삭제</button>
                  </li>
               ))
            }
         </ul>
      </div>
      
   )
}

export default TodoComponent;