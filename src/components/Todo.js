import React, { Component, useState } from "react";
import Titulo from "./Titulo";
import TareaForm from "./TareaForm";

const tareasList = [
  { descripcion: "Levantarse", hora: "6 am", realizado: false },
  { descripcion: "Desayunar", hora: "7 am", realizado: false },
  { descripcion: "Hacer deberes", hora: "9 am", realizado: false }
];

export default function Todo({ input }) {
  let [loading, setLoading] = useState(false);
  let [tarea, setTarea] = useState({});
  let [mensaje, setMensaje] = useState("Cargando!");
  let [tareas, setTareas] = useState(tareasList);

  const onInputChange = tarea => {
    setTarea({ ...tarea });
  };

  const cargarDatos = () => {
    // loading = true;
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const cargarTarea = tarea => {
    setTarea({ ...tarea });
  };

  const eliminarTarea = index => {
    tareas.splice(index, 1);
    setTareas([...tareas]);
  };

  return (
    <div>
      {loading ? <span>{mensaje}</span> : <p>Datos cargados</p>}

      <p>{input}</p>
      <TareaForm
        tarea={tarea}
        onTareaChange={tarea => onInputChange(tarea)}
        onSubmit={tarea => {
          if (tarea.index !== undefined) {
            // logica de actulaizar
            let { index } = tarea;
            delete tarea.index;
            tareas[index] = tarea;
            setTarea({ descripcion: "", hora: "" });
            setTareas([...tareas]);
          } else {
            tareas.push(tarea);
            setTareas([...tareas]);
          }
        }}
      />
      <h1>Tareas</h1>
      {tareas.map((item, index) => {
        return (
          <p
            key={item.descripcion}
            style={{
              color: item.realizado ? "green" : "unset"
            }}
          >
            {item.descripcion} <strong>{item.hora}</strong>
            <button
              type="button"
              onClick={() => cargarTarea({ ...item, index })}
            >
              Editar
            </button>
            <button type="button" onClick={() => eliminarTarea(index)}>
              Eliminar
            </button>
          </p>
          // <Titulo mensaje={item.descripcion} />
        );
      })}
      <button type="button" onClick={() => cargarDatos()}>
        Cargar datos
      </button>
    </div>
  );
}
