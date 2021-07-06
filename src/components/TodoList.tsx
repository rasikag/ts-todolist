import React, { useState } from "react";
import InputForm from "./InputForm";
import TodoItem from "../interfaces/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoToShow, setTodoToShow] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  const addNewTodo = (newTodo: TodoItem) => {
    // const  newTodoList = [newTodo,...todos];
    setTodos([newTodo, ...todos]);
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <div>Hello Hello</div>
      <InputForm addNewTodo={addNewTodo} />
      {todos.map((t) => (
        <div key={t.id}>
          <div>{t.todoText}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
