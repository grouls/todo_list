import { FC } from "react";

type Todo = {
  value: string;
};

interface TableProps {
  todos: Todo[];
  handleRemoveTodo: Function;
}

const Table: FC<TableProps> = ({ todos, handleRemoveTodo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Todo</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo: Todo, index: number) => (
          <tr key={index}>
            <td>{todo.value}</td>
            <td>
              <button type='button' onClick={() => handleRemoveTodo(index)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
