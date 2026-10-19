
import './App.css'
import Navbar from './components/navbar'
import Catalog from './pages/Catalog'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer'

function App() {
    return (
        <div>
            <h1>Hello from react!</h1>
            <Navbar />
            <Catalog />
            <Footer />
        </div>
    )
}

export default App

