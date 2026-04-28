import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Bem-vindo ao TechManager</h2>
        <p>
          Gerencie, organize e acompanhe seus produtos, em um só lugar.
        </p>
      </section>

      <section className="features">
        <div className="card">
          <h3>Gerenciamento de Produtos</h3>
          <p>Crie e organize seus produtos facilmente.</p>
        </div>

        <div className="card">
          <h3>Controle de Estoque</h3>
          <p>Acompanhe o progresso das suas atividades.</p>
        </div>

        <div className="card">
          <h3>Relatórios</h3>
          <p>Visualize o desempenho da equipe.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 TechManager - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Home;