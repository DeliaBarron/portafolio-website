
// Componentes
import Navbar from './components/Navbar'
import Main from './components/Main'
import CollapseSlider from './components/CollapseSlider'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// Context
import { InfoContextProvider } from './context/InfoContext'

function App () {
  return (
    <div className='App'>
      <InfoContextProvider>
        <Navbar />
        <Main />
        <CollapseSlider />
        <Footer />
      </InfoContextProvider>
    </div>

  )
}

export default App
