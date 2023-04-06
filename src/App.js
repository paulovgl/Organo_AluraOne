import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulário";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorCadastrado(colaborador)
        }
      />
    </div>
  );
}

export default App;
