import React from "react";
import Escena from "./components/escena/escena";
import { datos, arrImg } from "./datos";
import "./styles.css";
import { Button1, Button2 } from "./components/styled-components/boton";
import classNames from "classnames";
import { useState } from "react";



function App() {   

   // -------------------------------- CAMBIOS DE PANTALLA INICIO - FRASES  -----------------------//

   const [intro, setIntro] = useState(true)
   const CambioEstado = () => {   
     setIntro(!intro)
   }

  // -------------------------------- CAMBIOS DE FRASE Y BACKGROUND ------------------------------//
  const [mark, setMark] = useState(0);    
  const [bg, setBg] = useState('red');

  document.body.style = `background: ${bg}`;

  const Anterior = (array) => {
    
    let arrayC = ['red','green','yellow','blue']

    if (mark === 0) {
      setMark(0)
      
    } else {
      setMark(mark - 1);
      setBg(arrayC[mark-1])
    }
  };

  const Siguiente = () => {
    let arrayC = ['red','green','yellow','blue']
    if (mark === 3) {
      setMark(3)
      setBg('blue')
    } else {
      setMark(mark + 1);   
      setBg(arrayC[mark+1])  
    }
  };

  // ----------------------------------- MAP ARRAY DE FRASES ------------------------------------//

  const fraseResult = datos.map((dato, i) => {
    return (
      <Button1 className={classNames({ active: i === mark })}>
        <Escena frase={dato.frase} />
      </Button1>
    );
  });

  // --------------------------------------------  RETURN APP ----------------------------------------//

  return (
    <div>
      {intro ? (
        <div className="welcomeDiv">
          <p className="div2">Un/a client/a que té com a producte principal una web de gestió empresarial desenvolupada amb React, ens ha demanat que desenvolupem un tutorial, en el qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.</p>
          <Button2 onClick={CambioEstado}>Començar!</Button2>
        </div>
      ) : (
        <div className="mainDiv">
          <Button2 onClick={Anterior}>Anterior</Button2>
          <Button2 onClick={Siguiente}>Siguiente</Button2>
          <div className="contentDiv">{fraseResult}</div>
        </div>
      )}
    </div>
  );
}

export default App;
