import React from "react";
import '../estilos/jugadores.css'


function Jugadores({ jugador1, jugador2, setJugador1, setJugador2, setTurno }) {


  return (

    <div className="panel-jugadores">
      <div className="cyw">
        <h2>Choose Your Weapon</h2>
        <div className="inputs">
          <input placeholder="Player 1 Username" type="text" value={jugador1} onChange={e => setJugador1(e.target.value)} />
          <input placeholder="Player 2 Username" type="text" value={jugador2} onChange={e => setJugador2(e.target.value)} />
        </div>
        <br></br>
        <div className="botones">
          <button className="boton-x botones5" onClick={() => setTurno('X')}>X</button>
          <button className="boton-o botones5" onClick={() => setTurno('O')}>O</button>
        </div>
      </div>
    </div>
  )
}

export default Jugadores