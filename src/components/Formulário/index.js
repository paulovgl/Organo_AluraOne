import Botao from "../Botao";
import CampoText from "../CampoText";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ]

  return (
    <section className="form__container">
      <form className="form">
        <h1>Preencha os dados para criar o card do colaborador.</h1>
        <CampoText label={"Nome"} placeholder={"Digite seu nome"} />
        <CampoText label={"Cargo"} placeholder={"Digite seu cargo"} />
        <CampoText
          label={"Imagem"}
          placeholder={"Informe o endereço da imagem"}
        />
        <ListaSuspensa label={"Time"} options={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
