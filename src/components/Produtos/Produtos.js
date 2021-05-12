import React from 'react';
import Cards from '../Cards/Cards';
import modelo1 from './img/modelo1.jpg'
import modelo2 from './img/modelo2.jpg'
import modelo3 from './img/modelo3.jpg'
import modelo4 from './img/modelo4.jpg'
import modelo5 from './img/modelo5.jpg'
import modelo6 from './img/modelo6.jpg'
import modelo7 from './img/modelo7.jpg'
import modelo8 from './img/modelo8.jpg'


class Produtos extends React.Component {
    state = {
          produtos: [
              {
                id: 1,
                nome: "Macacão Espacial Space Suit",
                price: 500,
                image: {modelo1},
              },
              {
                id: 2,
                nome: "Macacão Nasa 2000",
                price: 2300,
                image: { modelo2 },
              },
              {
                id: 3,
                nome: "Macacão Basic Lycra",
                price: 380,
                image: { modelo3 },
              },
              {
                id: 4,
                nome: "Macacão Pandora Brown",
                price: 900,
                image: { modelo4 },
              },
              {
                id: 5,
                nome: "Macacão Blue US",
                price: 1200,
                image: { modelo5 },
              },
              {
                id: 6,
                nome: "Macacão Odyssey",
                price: 780,
                image: { modelo6 },
              },
              {
                id: 7,
                nome: "Macacão Sunshine",
                price: 320,
                image: { modelo7 },
              },
              {
                id: 8,
                nome: "Macacão Mercury",
                price: 750,
                image: { modelo8 },
              },
            ],
      }


    
    render(){
        const listaDeProdutos = this.state.produtos.map((produto)=>{
        return(
        
        <Cards
        id={produto.id}
        price={produto.price}
        imagem={produto.image}
        nome={produto.nome}
        />
            
        )
    });


        return (
        <div> 
        {listaDeProdutos}
           </div>

        )
    }
}

export default Produtos;
