import { useEffect, useState } from "react";
import API_URL from "../services/api";

// ========================================
// LISTAR TODOS
// ========================================
function Listagem() {
  const [produtos, setProdutos] = useState([]);

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

  return (
    <div>
      <h1>Lista de Produtos</h1>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <h2>{produto.nome}</h2>
          <p>Preço: R$ {produto.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default Listagem;


// ========================================
// BUSCAR POR ID
// ========================================
async function buscarPorId(id) {
  const result = await fetch(`${API_URL}/${id}`);
  const dados = await result.json();
  return dados;

  return result.rows[0];
}

// ========================================
// CRIAR PRODUTO
// ========================================
async function criar(dados) {
  const { nome, preco, estoque, categoria } = dados;

    const sql = `
        INSERT INTO produtos (nome, preco, estoque, categoria)
            VALUES ($1, $2, $3, $4)
                RETURNING *
                  `;

    const result = await pool.query(sql, [
        nome,
        preco,
        estoque,
        categoria
      ]);

    return result.rows[0];
}

// ========================================
// ATUALIZAR PRODUTO
// ========================================
const [idEditando, setIdEditando] = useState(null);
const [nomeEditado, setNomeEditado] = useState("");
const [precoEditado, setPrecoEditado] = useState("");

function prepararEdicao(produto) {
  setIdEditando(produto.id);
  setNomeEditado(produto.nome);
  setPrecoEditado(produto.preco);
}


// ========================================
// DELETAR PRODUTO
// ========================================
async function deletar(id) {
  const result = await pool.query(
      "DELETE FROM produtos WHERE id = $1",
      [id]
    );

  return result.rowCount > 0;
}

// ========================================
// BUSCAR POR NOME
// ========================================
const [nome, setNome] = useState("");
const [preco, setPreco] = useState("");

async function cadastrarProduto(event) {
  event.preventDefault();

  const novoProduto = {
    nome: nome,
    preco: preco,
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