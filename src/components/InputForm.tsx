import React, { ChangeEvent, FormEvent, useState, MouseEvent } from "react";
import TodoItem from "../interfaces/TodoItem";
import shortid from "shortid";

interface Props {
  addNewTodo: (newTodo: TodoItem) => void;
}

const InputForm = (props: Props) => {
  const [todoInputText, setTodoInputText] = useState("");

  const formOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('formOnSubmit');
    e.preventDefault();
    addTodo();
  };

  const handleTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInputText(e.target.value as string);
  };

  // todo: check why this is not working 

  // const buttonOnClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   console.log('buttonOnClick');
  //   addTodo();
  // };

  const addTodo = () => {
    const todo: TodoItem = {
      id: shortid.generate(),
      complete: false,
      todoText: todoInputText
    };
    props.addNewTodo(todo);
    setTodoInputText("");
  };

  //todo: add multiple inputs

  return (
    <form onSubmit={formOnSubmit}>
      <div>
        <input
          onChange={handleTodoInput}
          value={todoInputText}
          name="todoInputText"
        />
      </div>
      <div>
        <button>Add Todo Item</button>
      </div>
    </form>
  );
};

export default InputForm;
