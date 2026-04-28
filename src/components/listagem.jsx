import { useEffect, useState } from "react";
import API_URL from "../../services/api";

function Listagem() {
  // =========================
  // STATES
  // =========================
  const [produtos, setProdutos] = useState([]);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const [idEditando, setIdEditando] = useState(null);
  const [nomeEditado, setNomeEditado] = useState("");
  const [precoEditado, setPrecoEditado] = useState("");

  // =========================
  // GET
  // =========================
  async function buscarProdutos() {
      try {
            const resposta = await fetch(API_URL);
            const dados = await resposta.json();
            setProdutos(dados);
          } catch (erro) {
                console.log("Erro ao buscar produtos:", erro);
              }
      }

    useEffect(() => {
        buscarProdutos();
      }, []);

    // =========================
    // POST
    // =========================
    async function cadastrarProduto(event) {
        event.preventDefault();

        const novoProduto = {
              nome,
              preco,
              estoque: 1,       // ⚠️ obrigatório no backend
              categoria: "geral" // ⚠️ obrigatório no backend
            };

          try {
                await fetch(API_URL, {
                        method: "POST",
                        headers: {
                                  "Content-Type": "application/json",
                                },
                        body: JSON.stringify(novoProduto),
                      });

                  alert("Produto cadastrado com sucesso!");

                  setNome("");
                  setPreco("");

                  buscarProdutos();
                } catch (erro) {
                      console.log("Erro ao cadastrar:", erro);
                    }
        }

    // =========================
    // PREPARAR EDIÇÃO
    // =========================
    function prepararEdicao(produto) {
        setIdEditando(produto.id);
        setNomeEditado(produto.nome);
        setPrecoEditado(produto.preco);
      }

    // =========================
    // PUT
    // =========================
    async function salvarEdicao(event) {
        event.preventDefault();

        const produtoAtualizado = {
              nome: nomeEditado,
              preco: precoEditado,
              estoque: 1,
              categoria: "geral",
            };

          try {
                await fetch(`${API_URL}/${idEditando}`, {
                        method: "PUT",
                        headers: {
                                  "Content-Type": "application/json",
                                },
                        body: JSON.stringify(produtoAtualizado),
                      });

                  alert("Produto atualizado!");

                  setIdEditando(null);
                  setNomeEditado("");
                  setPrecoEditado("");

                  buscarProdutos();
                } catch (erro) {
                      console.log("Erro ao editar:", erro);
                    }
        }

    // =========================
    // DELETE
    // =========================
    async function excluirProduto(id) {
        const confirmar = confirm("Deseja excluir este produto?");

        if (!confirmar) return;

        try {
              await fetch(`${API_URL}/${id}`, {
                      method: "DELETE",
                    });

              alert("Produto excluído!");

              buscarProdutos();
            } catch (erro) {
                  console.log("Erro ao excluir:", erro);
                }
        }

    // =========================
    // RENDER
    // =========================
    return (
        <div>
          <h1>Lista de Produtos</h1>

          {/* ================= FORM CADASTRO ================= */}
          <form onSubmit={cadastrarProduto}>
            <input
              type="text"
              placeholder="Nome do produto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              type="number"
              placeholder="Preço"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>

          {/* ================= LISTA ================= */}
          {produtos.map((produto) => (
                  <div key={produto.id}>
                    <h2>{produto.nome}</h2>
                    <p>Preço: R$ {produto.preco}</p>

                    <button onClick={() => prepararEdicao(produto)}>
                      Editar
                    </button>

                    <button onClick={() => excluirProduto(produto.id)}>
                      Excluir
                    </button>
                  </div>
                ))}

          {/* ================= FORM EDIÇÃO ================= */}
          {idEditando && (
                  <form onSubmit={salvarEdicao}>
                    <h3>Editando produto</h3>

                    <input
                      type="text"
                      value={nomeEditado}
                      onChange={(e) => setNomeEditado(e.target.value)}
                    />

                    <input
                      type="number"
                      value={precoEditado}
                      onChange={(e) => setPrecoEditado(e.target.value)}
                    />

                    <button type="submit">Salvar edição</button>
                  </form>
                )}
        </div>
      );
}

export default Listagem;
