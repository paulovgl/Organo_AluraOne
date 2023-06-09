import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulário";
import Times from "./components/Times";
import Rodape from "./components/Rodape";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Front End",
      cor: "#82cffa",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#a6d157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#e06b69",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#feba05",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#d86ebf",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#ff8a29",
    },
  ]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const mudarCorTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const favoritarColaborador = (id, favoritar) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !favoritar;
        }
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorCadastrado(colaborador)
        }
        times={times.map((time) => time.nome)}
        cadastrarTime={cadastrarTime}
      />
      <h1 className="App__title">Minha Organização</h1>
      {times.map((time) => (
        <Times
          key={time.id}
          id={time.id}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          mudarCor={mudarCorTime}
          aoDeletar={deletarColaborador}
          aoFavoritar={favoritarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
