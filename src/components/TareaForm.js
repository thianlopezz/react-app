import React, { Component } from "react";

export default class TareaForm extends Component {
  state = {};

  onInputChange(event) {
    const { tarea, onTareaChange } = this.props;
    tarea[event.target.name] = event.target.value;
    // this.setState({ tarea });
    onTareaChange(tarea);
  }

  submitForm(event) {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { tarea } = this.props;
    onSubmit(tarea);
  }

  render() {
    const { tarea } = this.props;
    return (
      <form onSubmit={event => this.submitForm(event)}>
        <input
          name="descripcion"
          value={tarea.descripcion || ""}
          onChange={event => this.onInputChange(event)}
        />
        <input
          name="hora"
          value={tarea.hora || ""}
          onChange={event => this.onInputChange(event)}
        />
        <button type="submit">Guardar</button>
      </form>
    );
  }
}
