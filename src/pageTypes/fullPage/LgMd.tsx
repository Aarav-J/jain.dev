import LandingPage from './pages/LandingPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import SkillsPage from './pages/SkilsPage.tsx'
import Navbar from '../../components/Navbar.tsx'
import "./index.scss"
import Cursor from '../../components/Cursor.jsx'
import Pagination from '../../components/pagination/Pagination.tsx'
import "./section.scss"
import { useState, useRef, useEffect } from "react"
import useOnScreen from "../../hooks/useOnScreem.ts"
import ProjectsPage from './pages/ProjectsPage.tsx'

import Github from '../../components/Github.tsx'
function LgMd() {

  const scrollTo = (section: React.RefObject<HTMLDivElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const sectionLanding = useRef<HTMLDivElement>(null);
  const headingRefLanding = useRef<HTMLHeadingElement>(null);
  const sectionAbout = useRef<HTMLDivElement>(null);
  const headingRefAbout = useRef<HTMLHeadingElement>(null);
  const sectionSkills = useRef<HTMLDivElement>(null);
  const headingRefSkills = useRef<HTMLHeadingElement>(null);
  const sectionProject = useRef<HTMLDivElement>(null);
  const headingRefProject = useRef<HTMLHeadingElement>(null);
  const section1IsVisible = useOnScreen(headingRefLanding)
  const section2IsVisible = useOnScreen(headingRefProject)
  const section3IsVisible = useOnScreen(headingRefSkills)
  const section4IsVisible = useOnScreen(headingRefAbout)
  const [activeNumber, setActiveNumber] = useState<number>(0)
  useEffect((() => {
    if (section1IsVisible) {
      setActiveNumber(1)

    }
    if (section2IsVisible) {
      setActiveNumber(2)


    }
    if (section3IsVisible) {
      setActiveNumber(3)


    }

    if (section4IsVisible) {
      setActiveNumber(4)


    }
  }), [section1IsVisible, section2IsVisible, section3IsVisible, section4IsVisible])
  return (
    
    <div className='body'>
        <div>
          <Navbar />
          <Github />
        </div>
        <div className="container">
          <div className='landingPage' ref={sectionLanding}>
            <LandingPage scroll={scrollTo} learnMoreRef={sectionProject} headingRef={headingRefLanding} />
          </div>
          <div className='projectPage' ref={sectionProject}>
            <ProjectsPage headingRef={headingRefProject} />
          </div>
          <div className='skillPage' ref={sectionSkills}>
            <SkillsPage headingRef={headingRefSkills} />
          </div>
          
          <div className='aboutPage' ref={sectionAbout}>
            <AboutPage headingRef={headingRefAbout} />
          </div>

        </div>
        <Pagination refList={[sectionLanding, sectionProject, sectionSkills, sectionAbout]} activeNumber={activeNumber} setActiveNumber={setActiveNumber} />
     
      
      <Cursor />
    </div>

  )
}

export default LgMd
