import React from "react";
import "../estilos/reset.css"
function Reset({resetear}) {

    return (
        <div className="reset">
            <button onClick={resetear}>Start Over</button>
        </div>
    )
}

export default Reset