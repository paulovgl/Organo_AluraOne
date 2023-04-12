import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corBg }) => {
  return (
    <div className="colaborador">
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
