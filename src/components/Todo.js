import React, { Component } from "react";
import Titulo from "./Titulo";
import TareaForm from "./TareaForm";

const tareas = [
  { descripcion: "Levantarse", hora: "6 am", realizado: false },
  { descripcion: "Desayunar", hora: "7 am", realizado: false },
  { descripcion: "Hacer deberes", hora: "9 am", realizado: false }
];

export default class Todo extends Component {
  state = { loading: false, mensaje: "Cargando!", tareas };

  cargarDatos() {
    // this.loading = true;
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    const { loading, mensaje, tareas } = this.state;
    const { input } = this.props;

    return (
      <div>
        {loading ? <span>{mensaje}</span> : <p>Datos cargados</p>}

        <p>{input}</p>
        <TareaForm
          onSubmit={tarea => {
            debugger;
            tareas.push(tarea);
            this.setState(tareas);
          }}
        />
        <h1>Tareas</h1>
        {tareas.map(item => {
          return (
            <p
              key={item.descripcion}
              style={{ color: item.realizado ? "green" : "unset" }}
            >
              {item.descripcion} <strong>{item.hora}</strong>
            </p>
            // <Titulo mensaje={item.descripcion} />
          );
        })}
        <button type="button" onClick={() => this.cargarDatos()}>
          Cargar datos
        </button>
      </div>
    );
  }
}
