import React from "react";

function Status({status , color}) {

    
    return (
        <div className={color + " status"}   >{status}</div>
    )
}


export default Status