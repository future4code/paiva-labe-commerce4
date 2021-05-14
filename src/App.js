import React from "react";
import "./App.css";
import Produtos from "./components/Produtos/Produtos";
import Fundo from "./components/Produtos/img/background.jpg";


class App extends React.Component {
  state = {
    listaProdutos: [
      {
        id: 1,
        nome: "Macacão Space Suit",
        price: 500,
        image: require("./components/Produtos/img/modelo1.jpg"),
      },
      {
        id: 2,
        nome: "Macacão Nasa 2000",
        price: 2300,
        image: require("./components/Produtos/img/modelo2.jpg"),
      },
      {
        id: 3,
        nome: "Macacão Basic Lycra",
        price: 380,
        image: require("./components/Produtos/img/modelo3.jpg"),
      },
      {
        id: 4,
        nome: "Macacão Pandora",
        price: 900,
        image: require("./components/Produtos/img/modelo4.jpg"),
      },
      {
        id: 5,
        nome: "Macacão Blue US",
        price: 1200,
        image: require("./components/Produtos/img/modelo5.jpg"),
      },
      {
        id: 6,
        nome: "Macacão Odyssey",
        price: 780,
        image: require("./components/Produtos/img/modelo6.jpg"),
      },
      {
        id: 7,
        nome: "Macacão Sunshine",
        price: 320,
        image: require("./components/Produtos/img/modelo7.jpg"),
      },
      {
        id: 8,
        nome: "Macacão Mercury",
        price: 750,
        image: require("./components/Produtos/img/modelo8.jpg"),
      },
      {
        id: 9,
        nome: "Macacão Minimalist",
        price: 1500,
        image: require("./components/Produtos/img/modelo9.jpg"),
      },
    ],
    order: "decrescente",

    produtosCarrinho: [],
    noCarrinho: false,
  };

  render() {
    console.log(`teste listaProdutos`, this.state.listaProdutos);
    
    console.log(`carrinho`, this.state.produtosCarrinho);

    return (
      <div className="App">
        <header className="Marca">
          <img src={Fundo} />
        </header>
        <div className="MainContainer">
          <Produtos
            listaProdutos={this.state.listaProdutos}
            onClickInfo={this.adicionarProdutoAoCarrinho}
          />
        </div>

        <section className="filtro"></section>

        <section className="carrinho">
          <h2> Carrinho:</h2>

          <div className="containerTotal">
            <p>Total:</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
