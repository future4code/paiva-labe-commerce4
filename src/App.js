import React from "react";
import "./App.css";
// import Produtos from "./components/Produtos/Produtos";
import Fundo from "./components/Produtos/img/background.jpg";
import Cards from "./components/Cards/Cards";


class App extends React.Component {
  state = {
    produtos: [
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
  };

  listaOrdenada = () => {
    return this.state.produtos.sort((a, b) => {
      if (this.state.order === "crescente") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  };

  onChangeOrder = (event) => {
    return this.setState({ order: event.target.value });
  };

  render() {
    const todosProdutos = [...this.state.produtos];
    console.log(todosProdutos);

    const listaOrdenada = this.listaOrdenada();

    console.log(listaOrdenada);

    const listaDeProdutos = listaOrdenada.map((produto) => {
      return (
        <Cards
          id={produto.id}
          price={produto.price}
          nome={produto.nome}
          imagem={produto.image}
        />
      );
    });

    return (
      <div className="App">
        <header className="Marca">
          <img src={Fundo} />
        </header>
        <div className="MainContainer">
          <div className="Ordem">
            <p>Quantidade de produtos: {listaOrdenada.length}</p>

            <p>Ordenação:</p>
            <select value={this.state.order} onChange={this.onChangeOrder}>
              <option value={"crescente"}>Crescente</option>
              <option value={"decrescente"}>Decrescente</option>
            </select>
          </div>

          <div className="vitrine">{listaDeProdutos}</div>
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