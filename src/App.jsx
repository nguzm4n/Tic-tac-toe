import React from 'react'
import './estilos/global.css'
import Jugadores from './componentes/jugadores.jsx'




const App = () => {
  return (
    <div className='container'>
        <h1>Tic Tac Toe in React.js</h1>
        <div className='container-juego'>
        <Jugadores />
        </div>
        
    </div>
  )
}

export default App