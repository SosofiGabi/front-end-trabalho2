// REQUISITO: useState para gerenciamento de estado.
// REQUISITO: useEffect para executar efeitos após alterações no estado.
import { useState, useEffect } from "react";

// REQUISITO: React Router para criar e organizar as rotas.
import { Routes, Route } from "react-router-dom";

// Importação dos componentes
import Navbar from "./components/Navbar";

// Importação das páginas
import Home from "./pages/Home";
import Animes from "./pages/Animes";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";

// REQUISITO: Estilização utilizando CSS Modules.
import styles from "./App.module.css";

function App() {

  // REQUISITO: useState para armazenar os animes cadastrados.
  // REQUISITO: localStorage para recuperar os dados salvos.
  // Os dados continuam disponíveis mesmo depois de atualizar a página.
  const [animes, setAnimes] = useState(() => {
    try {
      const dadosSalvos = localStorage.getItem("anime-tracker");

      return dadosSalvos ? JSON.parse(dadosSalvos) : [];
    } catch {
      return [];
    }
  });

  // REQUISITO: Persistência dos dados utilizando localStorage.
  // Sempre que a lista de animes mudar, os dados serão salvos.
  useEffect(() => {
    localStorage.setItem("anime-tracker", JSON.stringify(animes));
  }, [animes]);

  return (
    <div className={styles.app}>

      {/* Componente próprio: Navbar recebe a responsabilidade pela navegação. */}
      <Navbar />

      <main className={styles.conteudo}>

        {/* REQUISITO: Configuração das rotas utilizando React Router. */}
        <Routes>

          {/* REQUISITO: Primeira rota — Página inicial. */}
          <Route path="/" element={<Home />} />

          {/* REQUISITO: Segunda rota — Minha coleção. */}
          <Route
            path="/animes"
            element={
              <Animes
                animes={animes}
                setAnimes={setAnimes}
              />
            }
          />

          {/* REQUISITO: Terceira rota — Página de favoritos. */}
          <Route
            path="/favoritos"
            element={<Favoritos animes={animes} />}
          />

          {/* REQUISITO: Página de erro para endereços inexistentes. */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;