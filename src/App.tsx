import { FC, useState } from 'react';
import {Table } from './components';
import './style.css';

export const App: FC = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  };

  const handleAddTodo = () => {
    if(newTodo !== ''){
      setTodos([...todos, { value: newTodo }]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    if(todos.length !== 0) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos)
    };
  }

  const clearAllTodos = () => {
    setTodos([]);
    setNewTodo('');
  }

  return (
    <div>
      <Table todos={todos} handleRemoveTodo={handleRemoveTodo}/>
      {todos.length !== 0 && <button type="button" onClick={clearAllTodos}>Clear All</button>}
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="button" onClick={handleAddTodo}>Add</button>
      </form>
    </div>
  );
};
