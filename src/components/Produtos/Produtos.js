import React from 'react';
import Cards from '../Cards/Cards';



class Produtos extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: "Macacão Space Suit",
        price: 500,
        image: require("./img/modelo1.jpg"),
      },
      {
        id: 2,
        nome: "Macacão Nasa 2000",
        price: 2300,
        image: require("./img/modelo2.jpg"),
      },
      {
        id: 3,
        nome: "Macacão Basic Lycra",
        price: 380,
        image: require("./img/modelo3.jpg"),
      },
      {
        id: 4,
        nome: "Macacão Pandora",
        price: 900,
        image: require("./img/modelo4.jpg"),
      },
      {
        id: 5,
        nome: "Macacão Blue US",
        price: 1200,
        image: require("./img/modelo5.jpg"),
      },
      {
        id: 6,
        nome: "Macacão Odyssey",
        price: 780,
        image: require("./img/modelo6.jpg"),
      },
      {
        id: 7,
        nome: "Macacão Sunshine",
        price: 320,
        image: require("./img/modelo7.jpg"),
      },
      {
        id: 8,
        nome: "Macacão Mercury",
        price: 750,
        image: require("./img/modelo8.jpg"),
      },
      {
        id: 9,
        nome: "Macacão Minimalist",
        price: 1500,
        image: require("./img/modelo9.jpg"),
      },
    ],
  };

  render() {
    const listaDeProdutos = this.state.produtos.map((produto) => {
      return (
        
          <Cards
            id={produto.id}
            price={produto.price}
            imagem={produto.image}
            nome={produto.nome}
          />
        
      );
    });

    return <div className="vitrine">{listaDeProdutos}</div>;
  }
}

export default Produtos;
