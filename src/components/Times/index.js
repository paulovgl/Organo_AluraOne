import Colaborador from "../Colaborador";
import "./Times.css";
import hexToRgba from 'hex-to-rgba';

const Times = ({ id, nome, cor, colaboradores, mudarCor, aoDeletar }) => {

  return colaboradores.length > 0 ? (
    <section className="times__container">
      <div style={{ backgroundColor: hexToRgba(cor, 0.5) }} className="times">
        <input value={cor} type="color" onChange={e => mudarCor(e.target.value, id)}/>
        <h3 style={{ borderBottomColor: cor }} className="times__title">
          {nome}
        </h3>
        <div className="times__colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.id}
              id={colaborador.id}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corBg={cor}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </div>
    </section>
  ) : (
    <section className="times__container">
      <div style={{ backgroundColor: hexToRgba(cor, 0.5) }} className="times">
        <input value={cor} type="color" onChange={e => mudarCor(e.target.value, id)}/>
        <h3 style={{ borderBottomColor: cor }} className="times__title">
          {nome}
        </h3>
        <div className="times__colaboradores">
          <h1>Este time ainda não possui colaboradores!</h1>
        </div>
      </div>
    </section>
  );
};

export default Times;
