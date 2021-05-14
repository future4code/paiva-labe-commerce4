  
import React from "react";
import Cards from "../Cards/Cards";

class Products extends React.Component {
  state = {
    order: "decrescente",
  };

  listaOrdenada = () => {
    return this.props.listaProdutos.sort((a, b) => {
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

  adicionarProdutoAoCarrinho = (idProduto) => {
    const selecionarProduto = this.props.listaProdutos.map((produto) => {
      if (produto.id === idProduto) {
        // produto = {...produto, qntdCompra: 1,precoTotal: produto.price}
        this.setState({
          produtosCarrinho: [...this.state.listaProdutosCarrinho, produto],
        });
      }
    });
  };

  render() {
    const listaOrdenada = this.listaOrdenada();

    return (
      <div className="principal">
        <div className="Ordem">
          <p>Quantidade de produtos: {listaOrdenada.length}</p>

          <p>Ordenação:</p>
          <select value={this.state.order} onChange={this.onChangeOrder}>
            <option value={"crescente"}>Crescente</option>
            <option value={"decrescente"}>Decrescente</option>
          </select>
        </div>

        <div className="vitrine">
          {this.props.listaProdutos.map((produto) => {
            return (
              <Cards
                id={produto.id}
                price={produto.price}
                nome={produto.nome}
                imagem={produto.image}
                onClickInfo={this.adicionarProdutoAoCarrinho()}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;