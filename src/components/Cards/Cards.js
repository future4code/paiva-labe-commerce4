import React from "react";
import styled from "styled-components";

const BigcardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  height: auto;
  border-radius: 5px;
  width: 36vh;
  margin: 2vh;
  box-shadow: 2px 2px 5px rgb(46 45 45);

  div {
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: center;
    width: 20vh;
    flex-direction: row;
  }
  img {
    height: 35vh;
  }
  p {
    font-size: 10px;
  }
  .bigcard-container h4 {
  }

 
`


function Cards(props) {
  return (
    <BigcardContainer>

      <div>
        <img src={props.imagem} />
      </div>

      <section>
        <h4>{props.nome}</h4>
        <p>cod.{props.id}</p>
        <p>
          <h1>R${props.price}</h1>
        </p>
        <button>Adicionar ao Carrinho</button>
      </section>

    </BigcardContainer>
  );
}

export default Cards;
