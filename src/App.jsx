import React from 'react'
import './estilos/global.css'
import Tablero from './componentes/tablero.jsx'



const App = () => {
  return (
    <div className='container'>
        <h1>Tic Tac Toe in React.js</h1>
        <div className='container-juego'>
        
        <Tablero />
        </div>
        
    </div>
  )
}

export default App