import React from "react";
export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <button type="edit" onClick={() => editTodo(task.id)} />
        <button type="delete" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
