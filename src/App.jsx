import './App.css'
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import MultiCarousel from "./components/MultiCarousel"

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Landing />
        <MultiCarousel />
      </div>
     
      <div className="card">
        
       
      </div>
      
    </>
  )
}

export default App
