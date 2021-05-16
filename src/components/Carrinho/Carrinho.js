import React from "react";
import styled from "styled-components";

class Carrinho extends React.Component {
  render() {
    return (
      <div className="cart">
        <h7>2X</h7> &nbsp; &nbsp; <h8>Produto</h8>&nbsp; &nbsp;
        <br />
        <button>Remover</button>
        <br />
        <br />
        <br />
        <h7>1X</h7> &nbsp; &nbsp;<h8>Produto B</h8>&nbsp; &nbsp;
        <br />
        <button>Remover</button>
      </div>
    );
  }
}
export default Carrinho;
