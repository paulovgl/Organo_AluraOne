import { AiFillCloseCircle } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = ({ id, nome, cargo, imagem, corBg, aoDeletar }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        style={{ backgroundColor: corBg }}
        size={25}
        onClick={() => aoDeletar(id)}
        className="deletar"
      />
      <div style={{ backgroundColor: corBg }} className="cabecalho">
        <img src={imagem} alt={`Foto do ${nome}`} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
