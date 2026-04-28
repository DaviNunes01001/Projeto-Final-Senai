import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1>Gerenciador de Produtos</h1>
        <p>Uma produção dos Manos Inc</p>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/gerenciador">Gerenciador</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
