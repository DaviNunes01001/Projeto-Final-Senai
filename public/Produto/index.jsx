import 'styles.css'

export default function Produtos() {
  return (
    <form onSubmit={cadastrarProduto}>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(event) => setPreco(event.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </form>

  );
}
