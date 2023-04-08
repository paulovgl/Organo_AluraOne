import Colaborador from "../Colaborador";
import "./Times.css";

const Times = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  return (
    colaboradores.length > 0 && (
      <section style={{ backgroundColor: corSecundaria }} className="times">
        <h3 style={{ borderBottomColor: corPrimaria }} className="times__title">
          {nome}
        </h3>
        <div className="times__colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Times;
