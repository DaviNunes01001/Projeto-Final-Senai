import { useEffect, useState } from "react";
import API_URL from "../../../services/api";
import styles from "./listagem.module.css";

function Listagem() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [categoria, setCategoria] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [buscaTipo, setBuscaTipo] = useState("nome");
  const [buscaValor, setBuscaValor] = useState("");
  const [loading, setLoading] = useState(false);

  async function carregarProdutos() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setProdutos(data);
    } catch {
      alert("Erro ao carregar produtos");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function salvarProduto(e) {
    e.preventDefault();

    const dados = {
      nome,
      preco: Number(preco),
      estoque: Number(estoque),
      categoria,
    };

    try {
      if (editandoId) {
        await fetch(`${API_URL}/${editandoId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        });
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        });
      }

      limparFormulario();
      carregarProdutos();
    } catch {
      alert("Erro ao salvar");
    }
  }

  async function deletarProduto(id) {
    if (!window.confirm("Deseja deletar?")) return;

    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      carregarProdutos();
    } catch {
      alert("Erro ao deletar");
    }
  }

  function editarProduto(p) {
    setEditandoId(p.id);
    setNome(p.nome);
    setPreco(p.preco);
    setEstoque(p.estoque);
    setCategoria(p.categoria);
  }

  function limparFormulario() {
    setEditandoId(null);
    setNome("");
    setPreco("");
    setEstoque("");
    setCategoria("");
  }

  async function buscarProdutos() {
    if (!buscaValor) return carregarProdutos();

    setLoading(true);
    try {
      const url =
        buscaTipo === "nome"
          ? `${API_URL}/nome/${buscaValor}`
          : `${API_URL}/id${Number(buscaValor)}`;

      const res = await fetch(url);
      let data = await res.json();

      if (!Array.isArray(data)) data = data ? [data] : [];

      setProdutos(data);
    } catch {
      alert("Erro na busca");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.containerALL}>
      <h2 className={styles.titulo}>
        {editandoId ? "Editando Produto" : "Adicionar Produto"}
      </h2>

      <form className={styles.formContainer} onSubmit={salvarProduto}>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
        <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="Preço" />
        <input type="number" value={estoque} onChange={(e) => setEstoque(e.target.value)} placeholder="Estoque" />
        <input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria" />

        <div className={styles.containerBnt}>
          <button type="submit">{editandoId ? "Atualizar" : "Salvar"}</button>
          <button type="button" onClick={limparFormulario}>Limpar</button>
        </div>
      </form>

      <div className={styles.AreaLista}>
        <h2>Lista de Produtos</h2>
        <button onClick={carregarProdutos}>Recarregar</button>

        {loading && <p>Carregando...</p>}
        {!loading && produtos.length === 0 && <p>Nenhum produto</p>}

        <div className={styles.grid}>
          {produtos.map((p) => (
            <div className={styles.card} key={p.id}>
              <p><b>{p.nome}</b></p>
              <p>R$ {Number(p.preco || 0).toFixed(2)}</p>
              <p>Estoque: {p.estoque}</p>
              <p>ID: {p.id}</p>
              <p>{p.categoria}</p>

              <div className={styles.actions}>
                <button onClick={() => editarProduto(p)}>Editar</button>
                <button onClick={() => deletarProduto(p.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.containerProd}>
        <h2>Buscar</h2>

        <select value={buscaTipo} onChange={(e) => setBuscaTipo(e.target.value)}>
          <option value="nome">Nome</option>
          <option value="id">ID</option>
        </select>

        <input
          value={buscaValor}
          onChange={(e) => setBuscaValor(e.target.value)}
          placeholder="Buscar..."
        />

        <div className={styles.containerBnt}>
          <button onClick={buscarProdutos}>Buscar</button>
          <button onClick={carregarProdutos}>Todos</button>
        </div>
      </div>
    </div>
  );
}

export default Listagem;