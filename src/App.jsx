import './App.css'
import Navbar from './components/navbar'
import Catalog from './pages/Catalog' 
import Footer from './components/Footer'

function App() {
 

  return (
    <div>
      <h1>Hello from react!</h1>
      <Navbar/>
      <Catalog></Catalog>
      <Footer/>
     
    </div>
 )
}

export default App
