import React from "react";
import "./App.css";
import Produtos from "./components/Produtos/Produtos";
import Logo from "./components/Produtos/img/roupasEspaciais.png";
import Filtros from "./components/Filtros/Filtros";
import Carrinho from "./components/Carrinho/Carrinho";
import total from "./components/Produtos/img/opcao.png"

class App extends React.Component {
  state = {
    listaProdutos: [
      {
        id: 1,
        name: "Macacão Space Suit",
        price: 500,
        image: require("./components/Produtos/img/modelo1(1).png"),
        qtd: 0,
      },
      {
        id: 2,
        name: "Macacão Nasa 2000",
        price: 2300,
        image: require("./components/Produtos/img/modelo2(4).png"),
        qtd: 0,
      },
      {
        id: 3,
        name: "Macacão Basic Lycra",
        price: 380,
        image: require("./components/Produtos/img/modelo3(2).png"),
        qtd: 0,
      },
      {
        id: 4,
        name: "Macacão Pandora",
        price: 900,
        image: require("./components/Produtos/img/modelo4(2).png"),
        qtd: 0,
      },
      {
        id: 5,
        name: "Macacão Blue US",
        price: 12000,
        image: require("./components/Produtos/img/modelo5(7).png"),
        qtd: 0,
      },
      {
        id: 6,
        name: "Macacão Odyssey",
        price: 7800,
        image: require("./components/Produtos/img/modelo6(3).png"),
        qtd: 0,
      },
      {
        id: 7,
        name: "Macacão Sunshine",
        price: 3200,
        image: require("./components/Produtos/img/modelo7(4).png"),
        qtd: 0,
      },
      {
        id: 8,
        name: "Macacão Mercury",
        price: 7500,
        image: require("./components/Produtos/img/modelo8(1).png"),
        qtd: 0,
      },
      {
        id: 9,
        name: "Macacão Minimalist",
        price: 15000,
        image: require("./components/Produtos/img/modelo9(14).png"),
        qtd: 0,
      },
    ],
    order: "decrescente",

    produtosCarrinho: [],
    noCarrinho: false,
  };

  componentDidMount() {
    console.log("entrou");
  }

  componentDidUpdate() {
    console.log("clickou");
  }

  render() {
    console.log(`teste listaProdutos`, this.state.listaProdutos);
    console.log("passou aqui");
    console.log(`carrinho`, this.state.produtosCarrinho);

    return (
      <div className="App">
        <header className="Marca">
         <h1>Uniformes Espaciais - Labe Commerce</h1>
          <img src={Logo} />
        </header>
        <div className="MainContainer">
          <Produtos
            listaProdutos={this.state.listaProdutos}
            produtosCarrinho={this.state.produtosCarrinho}
          />
        </div>

        <section className="filtro">
          <h2>Filtros:</h2>
          <Filtros />
        </section>
        <section className="carrinho">
         <img src={total} className="thanks"/>
          <h2> Carrinho:</h2>
          <Carrinho />

          <div className="containerTotal">
            <p>Total:</p>
            
          </div>
          <div className="rodape"></div>
        </section>
      </div>
    );
  }
}

export default App;
