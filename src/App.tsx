// import LandingPage from './pages/LandingPage'
// import AboutPage from './pages/AboutPage.tsx'
import SkillsPage from './pages/SkilsPage.tsx'
import Navbar from './components/Navbar.tsx'
function App() {
  

  return (
    <div className='lg:overflow-hidden lg:overflow-y-hidden'> 
      <div className=''>
        <Navbar />
        </div>
      <div className="container z-0 relative">
        <SkillsPage />
        </div>
    </div>
  )
}

export default App
