import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage.tsx'
import SkillsPage from './pages/SkilsPage.tsx'
import Navbar from './components/Navbar.tsx'
import "./index.scss"
import "./section.scss"
function App() {
  

  return (
    <div className='body'> 
      <div className=''>
        <Navbar />
        </div>
      <div className="container">
        <div className='landingPage'>
          <LandingPage/>
        </div>
        <div className='aboutPage'>
          <AboutPage/>
        </div>
        <div className='skillPage'>
          <SkillsPage />
        </div>
        
        </div>
    </div>
    
  )
}

export default App
