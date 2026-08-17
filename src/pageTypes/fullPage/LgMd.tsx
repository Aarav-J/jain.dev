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

  const sectionLanding = useRef<HTMLDivElement>(null)
  const headingRefLanding = useRef<HTMLHeadingElement>(null)
  const sectionProject = useRef<HTMLDivElement>(null)
  const headingRefProject = useRef<HTMLHeadingElement>(null)
  const sectionSkills = useRef<HTMLDivElement>(null)
  const headingRefSkills = useRef<HTMLHeadingElement>(null)
  const sectionAbout = useRef<HTMLDivElement>(null)
  const headingRefAbout = useRef<HTMLHeadingElement>(null)

  const s1 = useOnScreen(headingRefLanding)
  const s2 = useOnScreen(headingRefAbout)
  const s3 = useOnScreen(headingRefProject)
  const s4 = useOnScreen(headingRefSkills)

  const [activeNumber, setActiveNumber] = useState<number>(0)

  useEffect(() => {
    if (s1) setActiveNumber(1)
    if (s2) setActiveNumber(2)
    if (s3) setActiveNumber(3)
    if (s4) setActiveNumber(4)
  }, [s1, s2, s3, s4])

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

        <div className='aboutPage' ref={sectionAbout}>
          <AboutPage headingRef={headingRefAbout} />
        </div>

        <div className='projectPage' ref={sectionProject}>
          <ProjectsPage headingRef={headingRefProject} />
        </div>

        <div className='skillPage' ref={sectionSkills}>
          <SkillsPage headingRef={headingRefSkills} />
        </div>
      </div>

      <Pagination
        refList={[sectionLanding, sectionAbout, sectionProject, sectionSkills]}
        labels={["Home", "About", "Projects", "Skills"]}
        activeNumber={activeNumber}
        setActiveNumber={setActiveNumber}
      />

      <Cursor />
    </div>
  )
}

export default LgMd
