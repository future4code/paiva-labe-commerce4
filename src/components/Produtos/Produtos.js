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
    const adicionaProduto = [...this.props.produtosCarrinho];
    let i;
    for (i = 0; i < adicionaProduto.length; i++) {
      if (adicionaProduto[i].id === idProduto) {
        adicionaProduto[i].qtd += 1;
        break;
      }
    }
    if (i === adicionaProduto.length) {
      const produtoAdicionado = this.props.listaProdutos.filter((item) => {
        if (item.id === idProduto) return true;
      });
      produtoAdicionado.qtd = 1;
      adicionaProduto.push(produtoAdicionado);
    }

    this.setState({ noCarrinho: adicionaProduto });
  };

  render() {
    const listaOrdenada = this.listaOrdenada();

    return (
      <div className="principal">
        <div className="Ordem">
          <p>Quantidade de produtos: {listaOrdenada.length}</p>

          <div className="ordenacao">
            <p>Ordenação: </p>&nbsp; &nbsp;
            <select value={this.state.order} onChange={this.onChangeOrder}>
              <option value={"crescente"}>Crescente</option>
              <option value={"decrescente"}>Decrescente</option>
            </select>
          </div>
        </div>
        <div className="vitrine">
          {this.props.listaProdutos.map((produto) => {
            return (
              <Cards
                price={produto.price}
                name={produto.name}
                imagem={produto.image}
                onClickInfo={()=>this.adicionarProdutoAoCarrinho(produto.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;