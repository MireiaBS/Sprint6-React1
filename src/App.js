import React from "react";
import Escena from "./components/escena/escena";
import { datos } from "./datos";
import "./styles.css";
import { Button1, Button2 } from "./components/styled-components/boton";
import classNames from "classnames";
import { useState } from "react";

function App() {
  const [mark, setMark] = useState(0);

  const fraseResult = datos.map((dato, i) => {
    return (
      <Button1 className={classNames({ active: i === mark })}>
        <Escena frase={dato.frase} />
      </Button1>
    );
  });

  const Anterior = () => {
    setMark(mark - 1);
  };

  const Siguiente = () => {
    setMark(mark + 1);
  };
  return (
    <div className="mainDiv">
      <Button2 onClick={Anterior}>Anterior
      </Button2>
      <Button2 onClick={Siguiente}>Siguiente</Button2>
     
      <div className="contentDiv">{fraseResult}</div>
    </div>
  );
}

export default App;
