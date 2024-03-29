import React from "react";
import '../estilos/jugadores.css'


function Player({placeholder, jugador},signo) {
    return(
        <div>
        <div className="inputs">
              <input placeholder={placeholder} type="text"></input>
            </div>
            <br></br>
            <div className="botones">
              <button className={jugador}>{signo}</button>
            </div>
        </div>
    )
}

export default Player