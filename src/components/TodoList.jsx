import { nanoid } from "nanoid";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, todoInput]);
  };

  return (
    <div>
      <div className="">
        <input
          type="text"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={nanoid()} className="">
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
