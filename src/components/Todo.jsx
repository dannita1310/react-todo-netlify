import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesomee/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
        <button className="Edit" onClick={() => editTodo(task.id)}>
          Editar
        </button>
        <button className="delete" onClick={() => deleteTodo(task.id)}>
          Eliminar
        </button>
       
      </div>
    </div>
  );
};
