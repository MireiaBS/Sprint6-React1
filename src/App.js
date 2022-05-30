import React from "react";
import Escena from "./components/escena/escena";
import { datos } from "./datos";
import "./styles.css";
import { Button1, Button2 } from "./components/styled-components/boton";
import CambioFrase from "./components/escena/CambioFrase"
import classNames from "classnames";
import { useState } from "react";

function App() {

  const [mark,setMark] = useState(0);

  const fraseResult = datos.map((dato,i) => {
    return (
      <Button1 className = {classNames({active: i === mark})}>
        <Escena frase={dato.frase} />        
      </Button1>     
    );

  });

  return (
    <div className="mainDiv">
      <CambioFrase setMark={setMark} mark={mark}/>
      <div className="contentDiv">{fraseResult}</div>
    </div>
  );
}

export default App;
