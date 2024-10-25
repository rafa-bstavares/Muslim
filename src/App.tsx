
import Banner from './components/Banner/Banner'
import Produtos from './components/Produtos/Produtos'
import Beneficios from './components/Benefícios/Beneficios'
import ProdutosMobile from './components/ProdutosMobile/ProdutosMobile'
import Depoimentos from './components/Depoimentos/Depoimentos'
import CtaFinal from './components/CtaFinal/CtaFinal'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className='overflow-x-hidden font-Montserrat'>
      <Banner/>
      <Produtos/>
      <ProdutosMobile/>
      <Beneficios/>
      <Depoimentos/>
      <CtaFinal/>
      <Footer/>
    </div>
  )
}

export default App
