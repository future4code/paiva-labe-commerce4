import React from "react";
import styled from "styled-components";

const BigcardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 4px solid silver
  height: 37vh;
  border-radius: 5px;
  width: 46vh;
  border: 3px solid silver;
  
  margin: 2vh;
  background-color: silver;
  margin-bottom: 20px;
 margin-right:12px;


:hover{
  box-shadow: 5px 5px 25px silver;
  background-color: white;
}

  div {
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: center;
    width: 20vh;
    flex-direction: row;
  }
  img {
    height: 45vh;
  }
  p {
    font-size: 10px;
  }
  .bigcard-container h4 {
  }
`;

function Cards(props) {
  return (
    <BigcardContainer>
      <img src={props.imagem} />

      <section>
        <h4>{props.name}</h4>
        <h6>R${props.price}</h6>
        <button className="botao" onClick={()=>props.onClickInfo}>
          Adicionar ao Carrinho
        </button>
      </section>
    </BigcardContainer>
  );
}

export default Cards;
