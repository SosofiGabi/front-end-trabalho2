// Importação do componente que exibe a lista de animes.
import AnimeList from "../components/AnimeList";

// REQUISITO: Estilização com CSS Modules.
import styles from "./Favoritos.module.css";

// Componente próprio recebendo a lista de animes por props.
function Favoritos({ animes }) {

  // Funcionalidade adicional: filtra os animes favoritos.
  // filter cria uma nova lista contendo apenas os favoritos.
  const favoritos = animes.filter((anime) => anime.favorito);

  return (

    <section className={styles.pagina}>

      <h1>Meus favoritos ♥</h1>

      <p>Seus animes favoritos estão reunidos aqui.</p>

      {/* Verifica se existem animes favoritados. */}
      {favoritos.length === 0 ? (

        <p className={styles.vazio}>
          Você ainda não possui animes favoritos.
        </p>

      ) : (

        // REQUISITO: Reutilização de componente próprio com props.
        <AnimeList
          animes={favoritos}
          onEdit={() => {}}
          onDelete={() => {}}
          onFavorite={() => {}}
        />

      )}

    </section>
  );
}

export default Favoritos;