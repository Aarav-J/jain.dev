import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar.tsx'
function App() {
  

  return (
    <div className='overflow-hidden overflow-y-hidden'> 
      <div className=''>
        <Navbar />
        </div>
      <div className="container z-0 relative">
        <LandingPage />
        </div>
    </div>
  )
}

export default App
