import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesomee/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      <div>
        <button className="Edit" onClick={() => editTodo(task.id)}>
          Editar
        </button>
        <button className="delete" onClick={() => deleteTodo(task.id)}>
          Eliminar
        </button>
        <input
          type="checkbox"
          className="Check"
          onClick={() => toggleComplete(task.id)}
        />
      </div>
    </div>
  );
};
