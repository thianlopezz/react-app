import React, { Component } from "react";

export default class TareaForm extends Component {
  state = { tarea: { descripcion: "", hora: "" } };

  onInputChange(event) {
    const { tarea } = this.state;
    tarea[event.target.name] = event.target.value;
    this.setState({ tarea });
  }

  submitForm(event) {
    debugger;
    event.preventDefault();
    const { onSubmit } = this.props;
    const { tarea } = this.state;
    this.setState({ tarea: {} });
    onSubmit(tarea);
  }

  render() {
    const { tarea } = this.state;
    return (
      <form onSubmit={event => this.submitForm(event)}>
        <input
          name="descripcion"
          value={tarea.descripcion}
          onChange={event => this.onInputChange(event)}
        />
        <input
          name="hora"
          value={tarea.hora}
          onChange={event => this.onInputChange(event)}
        />
        <button type="submit">Guardar</button>
      </form>
    );
  }
}
