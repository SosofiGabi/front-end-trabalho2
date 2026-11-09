// REQUISITO: useState para controlar os valores do formulário.
// useEffect para atualizar os campos quando um anime for selecionado para edição.
import { useEffect, useState } from "react";

// REQUISITO: Estilização com CSS Modules.
import styles from "./AnimeForm.module.css";

// Valores iniciais do formulário.
const formularioInicial = {
  nome: "",
  imagem: "",
  genero: "",
  totalEpisodios: "",
  assistidos: "",
  nota: "",
  status: "Planejo assistir",
  favorito: false
};

// REQUISITO: Componente próprio recebendo props.
// Recebe a função de salvar, o anime em edição e a função de cancelar.
function AnimeForm({ onSave, animeEditando, onCancel }) {

  // REQUISITO: useState para controlar os dados do formulário.
  const [formulario, setFormulario] = useState(formularioInicial);

  // Quando um anime é selecionado para edição,
  // seus dados são colocados nos campos do formulário.
  useEffect(() => {

    if (animeEditando) {
      setFormulario(animeEditando);
    } else {
      setFormulario(formularioInicial);
    }

  }, [animeEditando]);

  // REQUISITO: Formulário controlado.
  // Atualiza o estado conforme o usuário digita nos campos.
  function handleChange(event) {

    const { name, value } = event.target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  // REQUISITO: Formulário controlado com envio utilizando onSubmit.
  // Realiza validações antes de cadastrar ou editar.
  function handleSubmit(event) {

    event.preventDefault();

    const total = Number(formulario.totalEpisodios);
    const assistidos = Number(formulario.assistidos);
    const nota = Number(formulario.nota);

    // Verifica se os campos obrigatórios foram preenchidos.
    if (
      !formulario.nome.trim() ||
      !formulario.imagem.trim() ||
      !formulario.genero.trim()
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    // Verifica se o endereço da imagem começa com HTTP.
    if (!formulario.imagem.startsWith("http")) {
      alert("Informe um link de imagem válido!");
      return;
    }

    // Verifica se a quantidade de episódios é válida.
    if (
      !Number.isInteger(total) ||
      total < 1 ||
      !Number.isInteger(assistidos) ||
      assistidos < 0 ||
      assistidos > total
    ) {
      alert("Confira a quantidade de episódios!");
      return;
    }

    // Verifica se a nota está entre 0 e 10.
    if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
      alert("A nota deve estar entre 0 e 10!");
      return;
    }

    // Envia os dados para a função de cadastro ou edição.
    onSave({
      ...formulario,
      totalEpisodios: total,
      assistidos,
      nota
    });

    // Limpa os campos após o envio.
    setFormulario(formularioInicial);
  }

  return (

    // REQUISITO: Formulário controlado utilizando onSubmit.
    <form
      className={styles.formulario}
      onSubmit={handleSubmit}
    >

      <h2>
        {animeEditando ? "Editar anime" : "Cadastrar anime"}
      </h2>

      <label>Nome do anime</label>

      <input
        name="nome"
        value={formulario.nome}
        onChange={handleChange}
        placeholder="Ex: Naruto"
        required
      />

      <label>Link da capa (URL)</label>

      <input
        name="imagem"
        type="url"
        value={formulario.imagem}
        onChange={handleChange}
        placeholder="https://exemplo.com/imagem.jpg"
        required
      />

      <label>Gênero</label>

      <input
        name="genero"
        value={formulario.genero}
        onChange={handleChange}
        placeholder="Ex: Ação, aventura"
        required
      />

      <label>Total de episódios</label>

      <input
        name="totalEpisodios"
        type="number"
        min="1"
        step="1"
        value={formulario.totalEpisodios}
        onChange={handleChange}
        required
      />

      <label>Episódios assistidos</label>

      <input
        name="assistidos"
        type="number"
        min="0"
        step="1"
        value={formulario.assistidos}
        onChange={handleChange}
        required
      />

      <label>Nota (0 a 10)</label>

      <input
        name="nota"
        type="number"
        min="0"
        max="10"
        step="0.1"
        value={formulario.nota}
        onChange={handleChange}
        required
      />

      <label>Status</label>

      <select
        name="status"
        value={formulario.status}
        onChange={handleChange}
      >
        <option>Assistindo</option>
        <option>Concluído</option>
        <option>Pausado</option>
        <option>Planejo assistir</option>
      </select>

      <div className={styles.botoes}>

        <button type="submit">
          {animeEditando ? "Salvar alterações" : "Cadastrar anime"}
        </button>

        {animeEditando && (
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
        )}

      </div>

    </form>
  );
}

export default AnimeForm;