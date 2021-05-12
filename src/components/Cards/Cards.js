import React from "react";
import styled from 'styled-components'



const BigcardContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  border: 1px solid black;
  height: auto;
padding-bottom: 20px;
  border-radius: 5px;
  width: 40vh;
  margin: 2vh;

  div {
     display: flex;
     background-color:black;
     align-items: center;
     justify-content: center;
     width:40vh;
} 
    img {
   
    height:300px;
   
    
}
p{
    font-size:10px;
}
.bigcard-container h4 {

}

`;


function Cards(props){
  

  
      return (
      <BigcardContainer>
   <div>
         <img src={ props.imagem } />
  </div>
                  
                <h4>{ props.nome }</h4>
                <p>cod.{ props.id }</p>
                <h8>R${ props.price}</h8>
                <button>Adicionar ao Carrinho</button>
                
           
    

      </BigcardContainer>
    );
  
}

export default Cards;
