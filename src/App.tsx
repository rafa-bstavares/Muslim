import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Produtos from './components/Produtos/Produtos'
import Beneficios from './components/Benefícios/Beneficios'

function App() {


  return (
    <div className='overflow-x-hidden font-Montserrat'>
      <Banner/>
      <Produtos/>
      <Beneficios/>
    </div>
  )
}

export default App
