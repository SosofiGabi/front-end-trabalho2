// REQUISITO: useState para controlar o estado do anime em edição.
import { useState } from "react";

// Importação dos componentes próprios.
import AnimeForm from "../components/AnimeForm";
import AnimeList from "../components/AnimeList";

// REQUISITO: Estilização com CSS Modules.
import styles from "./Animes.module.css";

function Animes({ animes, setAnimes }) {

  // REQUISITO: useState para armazenar o anime que está sendo editado.
  // null significa que nenhum anime está sendo editado.
  const [animeEditando, setAnimeEditando] = useState(null);

  // CRUD — CREATE (CRIAR) e UPDATE (EDITAR).
  // Esta função cadastra um anime novo ou atualiza um existente.
  function salvarAnime(dados) {

    // Se existe um anime em edição, atualiza suas informações.
    if (animeEditando) {
      setAnimes((lista) =>
        lista.map((anime) =>
          anime.id === animeEditando.id
            ? { ...anime, ...dados }
            : anime
        )
      );

      // Finaliza o modo de edição.
      setAnimeEditando(null);

    } else {

      // Cria um novo objeto com os dados do anime.
      const novoAnime = {
        ...dados,
        id: Date.now(),
        favorito: false
      };

      // Adiciona o novo anime à lista.
      setAnimes((lista) => [...lista, novoAnime]);
    }
  }

  // CRUD — DELETE (EXCLUIR).
  // Remove um anime da lista utilizando seu ID.
  function excluirAnime(id) {

    if (window.confirm("Deseja realmente excluir este anime?")) {

      setAnimes((lista) =>
        lista.filter((anime) => anime.id !== id)
      );

      // Cancela a edição caso o anime excluído estivesse sendo editado.
      if (animeEditando?.id === id) {
        setAnimeEditando(null);
      }
    }
  }

  // Funcionalidade adicional: marcar e desmarcar favoritos.
  function alternarFavorito(id) {

    setAnimes((lista) =>
      lista.map((anime) =>
        anime.id === id
          ? { ...anime, favorito: !anime.favorito }
          : anime
      )
    );
  }

  return (
    <section className={styles.pagina}>

      <h1>Minha coleção</h1>

      <p>Gerencie seus animes e acompanhe seu progresso.</p>

      {/* REQUISITO: Componente próprio recebendo props.
          O formulário recebe funções para cadastrar e editar animes. */}
      <AnimeForm
        onSave={salvarAnime}
        animeEditando={animeEditando}
        onCancel={() => setAnimeEditando(null)}
      />

      <h2 className={styles.tituloLista}>Meus animes</h2>

      {/* REQUISITO: Componente próprio recebendo props.
          A lista recebe os animes e as funções de edição, exclusão
          e favoritar. */}
      <AnimeList
        animes={animes}
        onEdit={setAnimeEditando}
        onDelete={excluirAnime}
        onFavorite={alternarFavorito}
      />

    </section>
  );
}

export default Animes;