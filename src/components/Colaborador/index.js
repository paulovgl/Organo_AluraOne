import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = ({
  id,
  nome,
  cargo,
  imagem,
  favorito,
  corBg,
  aoDeletar,
  aoFavoritar,
}) => {
  const favoritando = () => {
    aoFavoritar(id, favorito);
  };

  const propsIcon = {
    size: 25,
    onClick: favoritando,
  };

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
        {favorito ? (
          <AiFillHeart {...propsIcon} color="red" />
        ) : (
          <AiOutlineHeart {...propsIcon} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
