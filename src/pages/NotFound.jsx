import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.erro}>
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <p>Ops! Parece que você se perdeu no mundo dos animes.</p>

      <Link to="/">Voltar ao início</Link>
    </section>
  );
}

export default NotFound;