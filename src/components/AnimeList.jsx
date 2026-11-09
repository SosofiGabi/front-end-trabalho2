// Importação do componente responsável por exibir cada anime.
import AnimeCard from "./AnimeCard";

// REQUISITO: Estilização com CSS Modules.
import styles from "./AnimeList.module.css";

// REQUISITO: Componente próprio recebendo props.
// Recebe a lista de animes e as funções de interação.
function AnimeList({ animes, onEdit, onDelete, onFavorite }) {

  // Verifica se a lista está vazia.
  if (animes.length === 0) {
    return (
      <p className={styles.vazio}>
        Nenhum anime cadastrado ainda.
      </p>
    );
  }

  return (

    // REQUISITO: Renderização de uma lista de objetos utilizando map.
    <div className={styles.lista}>

      {animes.map((anime) => (

        // REQUISITO: key única utilizando o ID de cada anime.
        // REQUISITO: Componente AnimeCard recebendo props.
        <AnimeCard
          key={anime.id}
          anime={anime}
          onEdit={onEdit}
          onDelete={onDelete}
          onFavorite={onFavorite}
        />

      ))}

    </div>
  );
}

export default AnimeList;