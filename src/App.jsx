import './App.css'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import Roundrock from './Components/Roundrock/Roundrock'
import Services from './Components/Services/Services'
import Testymonials from './Components/Testymonials/Testymonials'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import { Toaster } from 'react-hot-toast'
function App() {
  

  return <>
 
  <Roundrock/>
  <About/>
  <Services/>
  <Testymonials/>
  <Contact/>
   <Toaster/>
  </>
}

export default App
