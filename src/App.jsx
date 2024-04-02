import React, { useState } from 'react'
import './estilos/global.css'
import Tablero from './componentes/tablero.jsx'
import Jugadores from './componentes/jugadores.jsx'



const App = () => {

  const [jugador1, setJugador1] = useState("")
  const [jugador2, setJugador2] = useState("")
  const [turno, setTurno] = useState(null)

  return (
    <div className='container'>
      <h1>Tic Tac Toe in React.js</h1>
      <div className='container-juego'>
        {
          jugador1 !== "" && jugador2 !== "" && turno !== null ? 
          (
            <Tablero />
          ) : (
            <Jugadores 
            jugador1={jugador1}
            jugador2={jugador2}
            setJugador1={setJugador1}
            setJugador2={setJugador2}
            setTurno={setTurno}
    
             />
          )
        }
       
        
      </div>

    </div>
  )
}

export default App