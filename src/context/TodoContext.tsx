import React from 'react';

let nextId = 0;

interface TodoItem {
   id: number;
   content: string;
   done: boolean;
};

interface TodoContextType {
   todos: Array<TodoItem>;
   addTodo: (content: string) => void;
   removeTodo: (id: number) => void;
   toggleTodo: (id: number) => void;
}

const TodoContext = React.createContext<TodoContextType>({
   todos: [],
   addTodo: () => {},
   removeTodo: () => {},
   toggleTodo: () => {},
});

interface Props {
   children: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
   const [todos, setTodos] = React.useState<Array<TodoItem>>([]);
   const addTodo = (content: string) => {
      setTodos([...todos, {
         id: nextId,
         content,
         done: false,
      }])
      nextId++;
   };

   const removeTodo = (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id));
   }
   
   const toggleTodo = (id: number) => {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
   }

   return (
      <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
         {children}
      </TodoContext.Provider>
   );
}

const useTodo = () => {
   const context = React.useContext(TodoContext);
   if (!context) {
      throw new Error('Cannot find TodoProvider');
   }
   return context;
}

export { useTodo, TodoProvider };