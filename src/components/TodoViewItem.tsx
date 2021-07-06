import React, { MouseEvent } from "react";
import TodoItem from "../interfaces/TodoItem";

type itemProps = {
  todoItem: TodoItem;
  toggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

const viewItem = (itemProp: itemProps) => {
  const innerOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("innerOnClick");
    itemProp.onDelete(itemProp.todoItem.id);
  };
  const innerToggleComplete = (e: MouseEvent<HTMLDivElement>) => {
    itemProp.toggleComplete(itemProp.todoItem.id);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          textDecoration: itemProp.todoItem.complete ? "line-through" : "",
        }}
        onClick={innerToggleComplete}
      >
        {itemProp.todoItem.todoText}
      </div>
      {/* didn't work blow lines */}
      {/* <button onClick={itemProp.onDelete(itemProp.todoItem.id) as any}>x</button> */}
      <button onClick={innerOnClick}>x</button>
    </div>
  );
};

export default viewItem;
