import React, { useState } from "react";
import "./App.css";
import { ToDoEscruct } from "./components/ToDoEscruct";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesomee/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

const useState = (valorInicial) => {
  let valor = valorInicial;

  const modificarValor = (nuevoValor) => {
    valor = nuevoValor;
  };

  return valor, modificarValor;
};

export function contador() {
  const { count, setCount } = useState(0);

  function aumentarContador() {
    setCount(count + 1);

    function disminuirContador() {
      setCount(count - 1);

      {
        count;
      }
      <input type="checkbox" onClick={aumentarContador}></input>;
      if (checkbox.checked) {
        aumentarContador;
      } else {
        disminuirContador;
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <ToDoEscruct />
    </div>
  );
}

export default App;
