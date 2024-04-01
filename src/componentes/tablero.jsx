import React from "react";
import Casilla from "./casilla";
import '../estilos/tablero.css'
import { useState } from "react";

function Tablero() {
  
  function calcularGanador(casillas) {
    const patronesGanadores = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]  
  for(let i = 0; i < patronesGanadores.length; i++) {
    const [a, b, c] = patronesGanadores[i]

    if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c])
    {return  casillas[a]} 
  } return null
  }
 
  
  const [casillas, setCasillas] = useState(Array(9).fill(null))
  const [esX, setEsX] = useState(true)
  const handleClick = (s) => {
    if(calcularGanador(casillas)) {
      return 
    }
    casillas[s] = esX ? 'X' : 'O'
    setCasillas(casillas)
    setEsX(!esX)
  }

const ganador = calcularGanador(casillas)
let status 
if (ganador) {
 status = `Ganador!!! ${ganador}`
} else {status = `It is ${esX ? 'X' : 'O'} turn!`

}

    return (
      <div>
        <div className="status">{status}</div>
        <div className="tablero">
            <div className="tablero-fila">
            <Casilla valor={casillas[0]} onClick={() => {handleClick (0)}}/>
            <Casilla valor={casillas[1]} onClick={() => {handleClick (1)}}/>
            <Casilla valor={casillas[2]} onClick={() => {handleClick (2)}}/>
            </div>
            <div className="tablero-fila">
            <Casilla valor={casillas[3]} onClick={() => {handleClick (3)}}/>
            <Casilla valor={casillas[4]} onClick={() => {handleClick (4)}}/>
            <Casilla valor={casillas[5]} onClick={() => {handleClick (5)}}/>
            </div>
            <div className="tablero-fila">
            <Casilla valor={casillas[6]} onClick={() => {handleClick (6)}}/>
            <Casilla valor={casillas[7]} onClick={() => {handleClick (7)}}/>
            <Casilla valor={casillas[8]} onClick={() => {handleClick (8)}}/>
            </div>
        </div>
        </div>
    )
}


export default Tablero