 import 'styles.css'

 export default function Produtos() {
      return (
        <>
      <div className="header">
        <nav>
          <h1>Produtos</h1>
          <ul>
            <li><a href="/public/Home/Home.jsx">Grupo</a></li>
            <li><a href="http://localhost:3000">Home</a></li>
          </ul>
        </nav>
      </div>

      <header>
        <div className="container-header">
          <h1>📋 Gerenciador de Produtos</h1>
          <p className="subtitle">Aplicação de Gestão de Produtos</p>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="form-section">
            <h2>Adicionar ou Editar produto</h2>
            <form id="clientForm">
              <div className="form-group">
                  <label for="nome">Nome do Produto:</label>
                  <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite o nome do produto"
                  required
                  />
              </div>

              <div className="form-group">
                  <label for="preco">Preço:</label>
                  <input
                    type="number"
                    id="preco"
                    name="preco"
                    placeholder="Coloque o preço aqui"
                    step="0.01"
                    required
                  />
              </div>

              <div className="form-group">
                <label for="estoque">Estoque:</label>
                <input
                  type="number"
                    id="estoque"
                    name="estoque"
                    placeholder="Quantidade em estoque"
                    required
                  />
              </div>

              <div className="form-group">
                <label for="categoria">Categoria:</label>
                <input
                  type="text"
                  id="categoria"
                  name="categoria"
                  placeholder="Coloque a categoria"
                  required
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">
                  Salvar produto
                </button>

                <button type="button" className="btn btn-secondary" id="btnLimpar">
                  Limpar Formulário
                </button>
              </div>
            </form>
          </section>

          <section className="list-section">
            <h2>Lista de Produtos</h2>

            <div className="list-controls">
              <button className="btn btn-success" id="btnRecarregar">
                🔄 Recarregar Lista
              </button>
              <div className="search-box">
                <select id="searchType" title="Selecionar tipo de busca">
                  <option value="nome">Buscar por Nome</option>
                  <option value="id">Buscar por ID</option>
                </select>
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Digite o valor para buscar..."
                />
                <button className="btn btn-primary" id="btnBuscar">Buscar</button>
              </div>
            </div>

            <div
              id="loadingMessage"
              className="message message-info"
            >
              Carregando produtos...
            </div>

            <div id="emptyMessage" className="message message-info">
              Nenhum produto cadastrado. Adicione um novo produto usando o
              formulário acima.
            </div>

            <div id="clientsList" className="clients-table-container">
            </div>
          </section>
        </div>
      </main>

      <footer>
        <p>
          &copy; 2026 - Sistema de Gestão de produtos | Desenvolvido para Alunos
          de Desenvolvimento de Sistemas
        </p>
      </footer>

      <div id="modalMessage" className="modal-message">
        <div className="modal-content">
          <p id="modalText"></p>
          <button className="btn btn-primary" onclick="fecharModal()">Fechar</button>
        </div>
      </div>
      <script src="script.js"></script>
      </>
      );
    }
