import React from "react";

const Form = () => {
  const addTodo = (e) => {
    e.preventDefault();
    const input = this.refs.todo;
    const value = input.value.trim();
    if (value) {
      this.props.dispatch(addTodo(value));
      input.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={(e) => this.addTodo(e)}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter ToDo"
          ref="todo"
        />
      </form>
      <br />
    </div>
  );
};
