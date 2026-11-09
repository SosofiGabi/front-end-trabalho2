// Importação do componente de status.
import StatusBadge from "./StatusBadge";

// REQUISITO: Estilização com CSS Modules.
import styles from "./AnimeCard.module.css";

// REQUISITO: Componente próprio recebendo props.
// Recebe as informações do anime e as funções de interação.
function AnimeCard({ anime, onEdit, onDelete, onFavorite }) {

  return (

    <article className={styles.card}>

      {/* Exibe a imagem do anime através de uma URL. */}
      <img
        src={anime.imagem}
        alt={`Capa de ${anime.nome}`}
        className={styles.imagem}
      />

      <div className={styles.informacoes}>

        <h2>{anime.nome}</h2>

        <p>Gênero: {anime.genero}</p>

        <p>
          Episódios: {anime.assistidos}/{anime.totalEpisodios}
        </p>

        <p>Nota: {anime.nota}/10</p>

        {/* Componente próprio recebendo a prop status. */}
        <StatusBadge status={anime.status} />

        <div className={styles.acoes}>

          {/* Funcionalidade adicional: favoritar anime. */}
          <button onClick={() => onFavorite(anime.id)}>
            {anime.favorito ? "♥ Favorito" : "♡ Favoritar"}
          </button>

          {/* CRUD — UPDATE: chama a função de edição. */}
          <button onClick={() => onEdit(anime)}>
            Editar
          </button>

          {/* CRUD — DELETE: chama a função de exclusão. */}
          <button
            className={styles.excluir}
            onClick={() => onDelete(anime.id)}
          >
            Excluir
          </button>

        </div>
      </div>

    </article>
  );
}

export default AnimeCard;