import React from "react";
import Escena from "./components/escena/escena";
import { datos } from "./datos";
import "./styles.css";
import { Button1, Button2 } from "./components/styled-components/boton";

let fraseActual = 0;
  function App() {
  function Anterior() {
    
  }
  function Seguent() {
    const siguienteFrase = fraseActual+1;
    console.log(datos[fraseActual].frase)

  }

  const fraseResult = datos.map((dato) => {
    return (
      <Button1>
        <Escena frase={dato.frase} />
      </Button1>
    );
  });

  return (
    <div className="mainDiv">
      <Button2 onClick={Anterior}>Anterior</Button2>
      <Button2 onClick={Seguent}>Següent</Button2>
      <div className="contentDiv">{fraseResult}</div>
    </div>
  );
}

export default App;
