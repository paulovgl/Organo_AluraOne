import { useState } from "react";
import Botao from "../Botao";
import CampoText from "../CampoText";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = ({ aoColaboradorCadastrado }) => {
  const times = [
    "Programação",
    "Front End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    aoColaboradorCadastrado({ nome, cargo, imagem, time });
  };

  return (
    <section className="form__container">
      <form className="form" onSubmit={aoSalvar}>
        <h1>Preencha os dados para criar o card do colaborador.</h1>
        <CampoText
          obrigatorio={true}
          label={"Nome"}
          placeholder={"Digite seu nome"}
          onChange={(t) => setNome(t)}
          value={nome}
        />
        <CampoText
          obrigatorio={true}
          label={"Cargo"}
          placeholder={"Digite seu cargo"}
          onChange={(t) => setCargo(t)}
          value={cargo}
        />
        <CampoText
          label={"Imagem"}
          placeholder={"Informe o endereço da imagem"}
          onChange={(t) => setImagem(t)}
          value={imagem}
        />
        <ListaSuspensa
          obrigatorio={true}
          label={"Time"}
          options={times}
          onChange={(t) => setTime(t)}
          value={time}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
