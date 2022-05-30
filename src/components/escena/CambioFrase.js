
import React from "react";
import { Button1, Button2 } from "../styled-components/boton";


const CambioFrase = (props) => {
    
  return (
    
   <div>
      <Button2 onClick={() => props.setMark(props.mark-1)}>Anterior</Button2>
      <Button2 onClick={() => props.setMark(props.mark+1)}>Siguiente</Button2> 
   </div>
  
  )
}
export default CambioFrase