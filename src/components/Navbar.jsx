// REQUISITO: NavLink do React Router para navegação entre páginas.
import { NavLink } from "react-router-dom";

// REQUISITO: Estilização com CSS Modules.
import styles from "./Navbar.module.css";

// Componente próprio responsável pelo menu de navegação.
function Navbar() {

  return (

    <header className={styles.navbar}>

      <div className={styles.logo}>
        ANIME<span>TRACKER</span>
      </div>

      {/* REQUISITO: Navegação entre as rotas da aplicação. */}
      <nav className={styles.menu}>

        <NavLink to="/">
          Início
        </NavLink>

        <NavLink to="/animes">
          Minha coleção
        </NavLink>

        <NavLink to="/favoritos">
          Favoritos
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;