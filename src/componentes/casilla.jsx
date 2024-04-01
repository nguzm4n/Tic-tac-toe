import React from "react";
import '../estilos/casilla.css'

function Casilla({ valor , onClick}) {

    return(
        <div className="casilla" onClick={onClick}>
            {valor}
        </div>
    )
}

export default Casilla
