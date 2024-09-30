
import Banner from './components/Banner/Banner'
import Produtos from './components/Produtos/Produtos'
import Beneficios from './components/Benefícios/Beneficios'
import ProdutosMobile from './components/ProdutosMobile/ProdutosMobile'

function App() {


  return (
    <div className='overflow-x-hidden font-Montserrat'>
      <Banner/>
      <Produtos/>
      <ProdutosMobile/>
      <Beneficios/>
    </div>
  )
}

export default App
