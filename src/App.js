import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Titulo from "./components/Titulo";
import Todo from "./components/Todo";

function App() {
  const mensaje = "Hola mundo!";
  return (
    <div className="App">
      {/* <h1>{mensaje}</h1> */}
      <Titulo mensaje="Hola Ecudevs!" />
      <Todo input={mensaje} />
    </div>
  );
}

export default App;
