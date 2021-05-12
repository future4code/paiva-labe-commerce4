import React from "react";
import "./App.css";
import Produtos from "./components/Produtos/Produtos";
import Fundo from "./components/Produtos/img/background.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="Marca">
          <img src={Fundo} />
        </header>
        <div className="MainContainer">
          <Produtos />
        </div>

        <section className="filtro"></section>

        <section className="carrinho"></section>

        <div className="rodape">
          <p>Rodapé bla bla bla</p>
        </div>
      </div>
    );
  }
}

export default App;
