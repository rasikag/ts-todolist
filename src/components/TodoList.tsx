import React, { useState } from "react";
import InputForm from "./InputForm";
import TodoItem from "../interfaces/TodoItem";
import TodoViewItem from "../components/TodoViewItem";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoToShow, setTodoToShow] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  const addNewTodo = (newTodo: TodoItem) => {
    // const  newTodoList = [newTodo,...todos];
    setTodos([newTodo, ...todos]);
  };

  const handleDeleteTodo = (id: string) => {
    console.log("handleDeleteTodo");
    setTodos((todo) => {
      return todos.filter((t) => {
        return t.id !== id;
      });
    });
  };

  const toggleComplete = (id: string) => {
    setTodos((todos) => {
      const updateTodo = todos.map((todo) => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      });
      return updateTodo;
    });
  };

  const updateTodoToShow = (s: string) => {
    setTodoToShow(s);
  };

  const removeAllTodosThatAreComplete = () => {
    setTodos((todos) => {
      return todos.filter((todo) => !todo.complete);
    });
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <div>Hello Hello</div>
      <InputForm addNewTodo={addNewTodo} />
      {todos.map((t) => (
        // just define item by item
        <TodoViewItem
          key={t.id}
          todoItem={t}
          toggleComplete={toggleComplete}
          onDelete={handleDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
