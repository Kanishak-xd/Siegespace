import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Footer from "./components/Footer"
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  )
}

export default App
