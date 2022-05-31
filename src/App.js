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
  const [bg, setBg] = useState(arrImg[0].url);

  document.body.style = `background: url('${bg}') no-repeat center center fixed; background-size: cover;`;

  const Anterior = () => {
       const arrImg = [
      {url: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80"},
      {url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"},
      {url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
      {url: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2107&q=80"}
  ]
    if (mark === 0) {
      setMark(0)
      
    } else {
      setMark(mark - 1);
      setBg(arrImg[mark-1].url)
    }
  };

  const Siguiente = () => {     
    const arrImg = [
      {url: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80"},
      {url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"},
      {url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
      {url: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2107&q=80"}
  ]
    if (mark === 3) {
      setMark(3)
    } else {
      setMark(mark + 1);   
      setBg(arrImg[mark+1].url)  
    }
  };

  // ----------------------------------- MAP ARRAY DE FRASES ------------------------------------//

  const fraseResult = datos.map((dato, i) => {
    return (
      <Button1 className={classNames({ active: i === mark })}>
        <Escena  frase={dato.frase} />
      </Button1>
    );
  });

  // --------------------------------------------  RETURN APP ----------------------------------------//

  return (
    <div>
      {intro ? (
        <div className="welcomeDiv">
          <p className="div2">Un/a client/a que té com a producte principal una web de gestió empresarial desenvolupada amb React, ens ha demanat que desenvolupem un tutorial, en el qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.</p>
          <Button2 onClick={CambioEstado}>COMENÇAR!</Button2>
        </div>
      ) : (
        <div className="mainDiv">
          <div className="btnDiv">
            <Button2 onClick={Anterior}>Anterior</Button2>
            <Button2 onClick={Siguiente}>Següent</Button2>
          </div>
          <div className="contentDiv">{fraseResult}</div>
        </div>
      )}
    </div>
  );
}

export default App;
