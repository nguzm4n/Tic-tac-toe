import React from "react";
import '../estilos/jugadores.css'


function Jugadores({}) {


    return(

        <div className="panel-jugadores">
          <div className="cyw">
            <h2>Choose Your Weapon</h2>
            <div className="inputs">
              <input placeholder="Player 1 Username" type="text"></input>
              <input placeholder="Player 2 Username" type="text"></input>
            </div>
            <br></br>
            <div className="botones">
              <button className="boton-x">X</button>
              <button className="boton-o">O</button>
            </div>
          </div>
        </div>
    )
}

export default Jugadores