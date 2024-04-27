import { useState } from 'react'
import Home from './pages/home'
import Canvas from './canvas'
import Customizer from './pages/cutomizer'

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customizer/>
    </main>
  )
}

export default App
