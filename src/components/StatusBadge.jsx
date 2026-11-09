// REQUISITO: Estilização com CSS Modules.
import styles from "./StatusBadge.module.css";

// REQUISITO: Componente próprio recebendo a prop status.
function StatusBadge({ status }) {

  // Define uma classe CSS para cada situação do anime.
  const classes = {
    "Assistindo": styles.assistindo,
    "Concluído": styles.concluido,
    "Pausado": styles.pausado,
    "Planejo assistir": styles.planejo
  };

  return (

    // Exibe o status do anime com sua respectiva estilização.
    <span className={`${styles.badge} ${classes[status]}`}>
      {status}
    </span>

  );
}

export default StatusBadge;