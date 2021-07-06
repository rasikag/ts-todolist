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
    // if (todoToShow === "all") {
    //   currentShowingTodos = todos;
    // } else if (todoToShow === "active") {
    //   currentShowingTodos = todos.filter((todo) => !todo.complete);
    // } else if (todoToShow === "complete") {
    //   currentShowingTodos = todos.filter((todo) => todo.complete);
    // }
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
      {todos
        .filter((q) => {
          if (todoToShow === "all") {
            return q;
          } else if (todoToShow === "active" && !q.complete) {
            // (todo) => !todo.complete);
            return q;
          } else if (todoToShow === "complete" && q.complete) {
            return q;
          }
        })
        .map((t) => (
          // just define item by item
          <TodoViewItem
            key={t.id}
            todoItem={t}
            toggleComplete={toggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))}
      <div>
        <div>todos left: {todos.filter((todo) => !todo.complete).length}</div>
        <div>
          <button onClick={() => updateTodoToShow("all")}>all</button>
          <button onClick={() => updateTodoToShow("active")}>active</button>
          <button onClick={() => updateTodoToShow("complete")}>complete</button>
        </div>
        {todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={removeAllTodosThatAreComplete}>
              remove all complete todos
            </button>
          </div>
        ) : null}
        <div>
          <button
            onClick={() => {
              setTodos((todos) => {
                const updatedTodos = todos.map((todo) => ({
                  ...todo,
                  complete: toggleAllComplete,
                }));
                return updatedTodos;
              });
              setToggleAllComplete(!toggleAllComplete);
            }}
          >
            toggle all complete: {`${toggleAllComplete}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
