import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <h1>Bem-vindo ao Anime Tracker!</h1>

      <p>
        Organize seus animes favoritos em um só lugar.
        Acompanhe episódios, avaliações e sua coleção.
      </p>

      <div className={styles.destaque}>
        <h2>Sua jornada pelo mundo dos animes começa aqui!</h2>
        <p>
          Cadastre seus animes e acompanhe seu progresso.
        </p>
      </div>
    </section>
  );
}

export default Home;