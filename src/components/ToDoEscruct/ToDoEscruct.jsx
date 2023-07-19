import React, { useState } from "react";
import { Todo } from "../Todo/Todo";
import { TodoForm } from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "../editTodoForm/editTodoForm";
import Swal from "sweetalert2";

export const ToDoEscruct = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const count = todos.reduce(
    (accumulator, currentTask) =>
      currentTask.completed ? accumulator + 1 : accumulator,
    0
  );

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
    {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tarea editada con exito!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="TodoWrapper">
      <h1>Lista de tareas !</h1>
      <p>Tareas completadas {count}</p>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
