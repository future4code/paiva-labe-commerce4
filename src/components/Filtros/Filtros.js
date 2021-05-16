import React from "react";
import styled from "styled-components";

class Filtros extends React.Component {
  render() {
    return (
      <div className="containerFiltro">
        <p>Valor mínimo:</p>
        <input value=""></input>
        <p>Valor máximo:</p>
        <input value=""></input>
        <p>Buscar por Nome:</p>
        <input value=""></input>
      </div>
    );
  }
}

export default Filtros;
