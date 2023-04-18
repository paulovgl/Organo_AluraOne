import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import "./Formulario.css";
import Botao from "../Botao";
import CampoText from "../CampoText";
import ListaSuspensa from "../ListaSuspensa";

const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    aoColaboradorCadastrado({ id: uuidv4(), nome, cargo, imagem, time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const aoSalvarTime = (evento) => {
    evento.preventDefault();
    cadastrarTime({nome:nomeTime, cor: corTime});
    setNomeTime("");
    setCorTime("");
  };

  return (
    <section className="form__container">
      <form className="form" onSubmit={aoSalvar}>
        <h1>Preencha os dados para criar o card do colaborador.</h1>
        <CampoText
          obrigatorio
          label={"Nome"}
          placeholder={"Digite seu nome"}
          onChange={(t) => setNome(t)}
          value={nome}
        />
        <CampoText
          obrigatorio
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
          obrigatorio
          label={"Time"}
          options={times}
          onChange={(t) => setTime(t)}
          value={time}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form className="form" onSubmit={aoSalvarTime}>
        <h1>Preencha os dados para criar um time.</h1>
        <CampoText
          obrigatorio
          label={"Nome"}
          placeholder={"Digite o nome do time"}
          onChange={(t) => setNomeTime(t)}
          value={nomeTime}
        />
        <CampoText
          obrigatorio
          label={"Cor"}
          placeholder={"Escolha a cor do time"}
          onChange={(t) => setCorTime(t)}
          value={corTime}
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
