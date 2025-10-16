import  {useState} from 'react';
import Cursor from '../../../components/Cursor';
import {faRightLong, faGlobe, faMobileAlt, faFlask, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import { faGithub, faJs, faNode, faReact, } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../../components/Navbar';
import ProjectPagination from '../../../components/projectsPagination/ProjectPagination';
import { SiAxios, SiCplusplus, SiFirebase, SiFlask, SiMongodb, SiPython, SiSocketdotio, SiTailwindcss, SiTypescript, SiTensorflow, SiExpo, SiOverleaf, SiOpenai, SiSupabase } from 'react-icons/si';

import { motion, AnimatePresence } from 'framer-motion';
// import Data from "./Data"
interface IconProps {
    tech: string;
}

interface ProjectData {
  name: string;
  description: string;
  website: string | null;
  github: string | null;
  image: string;
  technologies: string[];
  type: 'web' | 'mobile' | 'research';
}



const data: ProjectData[] = [ 
    { 
        name: "Truth Decay", 
        description: "Rapid improvements in large language models have unveiled a critical challenge in human-AI interaction: sycophancy. In this context, sycophancy refers to the tendency of models to excessively agree with or flatter users, often at the expense of factual accuracy. While previous studies have primarily analyzed this behavior in single-turn interactions, its persistence and evolution in multi-step conversations remain largely unexplored. We introduce TRUTH DECAY, a benchmark specifically designed to evaluate sycophancy in extended dialogues, where language models must navigate iterative user feedback, challenges, and persuasion. We prompt models to elicit four types of sycophantic biases. We then propose and test sycophancy reduction strategies, evaluating their effectiveness beyond single-step interactions.",
        github: null, 
        website: "arxiv.org/pdf/2503.11656", 
        image: "research.png",
        technologies: ["python",  "overleaf"],
        type: "research"
    },
    { 
        name: "Bridge", 
        description: "My team and I built Bridge during a hackathon to create a platform that combats political echo chambers by pairing users with opposing views for structured, video-based debates. The app uses a full-stack setup with a Next.js + React frontend, a Node.js + Express + Socket.IO backend, Supabase for authentication and data storage, WebRTC for peer-to-peer video, and OpenAI GPT-4 for real-time fact-checking. The result is a technically robust system that manages matchmaking, debate phases, and AI-powered insights to foster respectful and fact-based political discussions.",
        github: "github.com/Aarav-J/Bridge", 
        website: "devpost.com/software/bridge-8xjdwu", 
        image: "bridge.jpg",
        technologies: ["react", "typescript", "tailwind", "openai", "socket", "node", "supabase"],
        type: "web"
    },
    { 
        name: "MarvelOracle", 
        description: "A full-stack RAG (Retrieval-Augmented Generation) application that lets you chat with the Marvel Universe using AI. Ask questions about Marvel characters, storylines, and lore with context-aware responses powered by vector search and GPT-4. Marvel wiki pages were scraped using python and then embedded into a pinecone vector database. ", 
        website: 'marveloracle.aaravj.xyz', 
        github: "github.com/Aarav-J/marveloracle", 
        image: "marveloracle.png",
        technologies: ["react", "python", "js",  "tailwind", "openai"],
        type: "web"
    }, 
    
    {
        name: "AaravSim", 
        description: "Aaravsim is a full-stack stock market simulator and dashboard application. It allows users to simulate trading, view stock data, manage portfolios, and access market news, all in a modern web interface. Built with React for the frontend and Flask for the backend exposted through a REST API endpoint.", 
        website: "aaravsim.aaravj.xyz", 
        github: "github.com/Aarav-J/aaravsim",
        image: "aaravsim.png",
        technologies: ['react', 'js', 'python', 'supabase'], 
        type: "web"

    },
     { 
        name: "Stronger", 
        description: "A comprehensive mobile fitness tracking application built for Android and iOS using React Native. The app monitors workouts, and progress with goals and detailed analytics. Push notifications help users stay motivated.", 
        website: null, 
        github: "github.com/Aarav-J/strong2.0", 
        image: "strong.png",
        technologies: ["react", "js", "python", "expo"],
        type: "mobile"
    },
    { 
        name: "AaravType", 
        description: "A sophisticated typing test application designed to help users improve their typing speed and accuracy. The platform features customizable tests, detailed analytics to track progress over time. Built with React to display typing statistics.", 
        website: "aaravtype.aaravj.xyz", 
        github: "github.com/Aarav-J/aaravtypefrontend", 
        image: "aaravtype.png",
        technologies: ["react", "js", "tailwind", "node", "mongo"],
        type: "web"
    },
   
    
]
const SpecificProjects = () => {
   
    const icon = (tech: IconProps['tech']): JSX.Element | null => { 
        if(tech === "react") return <FontAwesomeIcon icon={faReact} className='text-5xl text-react'/>
        if(tech === "node") return <FontAwesomeIcon icon={faNode} className='text-5xl text-node'/>
        if(tech === "js") return <FontAwesomeIcon icon={faJs} className='text-5xl text-js'/>
        if(tech === "socket") return <SiSocketdotio className='text-5xl text-white'/>
        if(tech === "mongo") return <SiMongodb className='text-5xl text-mongo'/>
        if(tech === "tailwind") return <SiTailwindcss className='text-5xl text-tailwind'/>
        if(tech === "ts") return <SiTypescript className='text-5xl text-ts'/>
        if(tech === "axios") return <SiAxios className='text-5xl text-axios'/>
        if(tech === "python") return <SiPython className='text-5xl text-python'/>
        if(tech === "flask") return <SiFlask className='text-5xl text-flask'/>
        if(tech === "cplusplus") return <SiCplusplus className='text-5xl text-cplusplus'/>
        if(tech === "firebase") return <SiFirebase className='text-5xl text-firebase'/>
        if(tech === "typescript") return <SiTypescript className='text-5xl text-ts'/>
        // if(tech === "android") return <FontAwesomeIcon icon={faAndroid} className='text-5xl text-android'/>
        // if(tech === "ios") return <FontAwesomeIcon icon={faApple} className='text-5xl text-apple'/>
        if(tech === "tensorflow") return <SiTensorflow className='text-5xl text-tensorflow'/>
        if(tech === "supabase") return <SiSupabase className='text-5xl text-supabase'/>
        if(tech === "openai") return <SiOpenai className='text-5xl text-openai'/>
        if(tech === "expo") return <SiExpo className='text-5xl text-white'/>
        if(tech === "overleaf") return <SiOverleaf className='text-5xl text-overleaf'/>
        return null
    }
    
    const [selectedProject, setSelectedProject] = useState(0)
    const [projectType, setProjectType] = useState<'all' | 'web' | 'mobile' | 'research'>('all')
    
    const filteredProjects = projectType === 'all' 
        ? data 
        : data.filter(project => project.type === projectType)
        
    // Reset selected project when changing filter
    const handleProjectTypeChange = (type: 'all' | 'web' | 'mobile' | 'research') => {
        setProjectType(type);
        setSelectedProject(0);
    }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='w-screen h-screen bg-background-primary items-center flex flex-col justify-start'
    >
        <Navbar/>
        <div className='mt-20 mb-6 flex flex-row justify-center items-center gap-6'>
          <motion.button 
            onClick={() => handleProjectTypeChange('all')} 
            className={`px-6 py-2 rounded-md ${projectType === 'all' ? 'bg-devPink text-white' : 'bg-transparent text-devGrey border border-devGrey'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            All Projects
          </motion.button>
          <motion.button 
            onClick={() => handleProjectTypeChange('web')} 
            className={`px-6 py-2 rounded-md ${projectType === 'web' ? 'bg-devPink text-white' : 'bg-transparent text-devGrey border border-devGrey'} flex items-center gap-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FontAwesomeIcon icon={faLaptopCode} /> Web Projects
          </motion.button>
          <motion.button 
            onClick={() => handleProjectTypeChange('mobile')} 
            className={`px-6 py-2 rounded-md ${projectType === 'mobile' ? 'bg-devPink text-white' : 'bg-transparent text-devGrey border border-devGrey'} flex items-center gap-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FontAwesomeIcon icon={faMobileAlt} /> Mobile Apps
          </motion.button>
          <motion.button 
            onClick={() => handleProjectTypeChange('research')} 
            className={`px-6 py-2 rounded-md ${projectType === 'research' ? 'bg-devPink text-white' : 'bg-transparent text-devGrey border border-devGrey'} flex items-center gap-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FontAwesomeIcon icon={faFlask} /> Research
          </motion.button>
        </div>

       <div className='flex flex-row justify-center items-center gap-6 h-full w-full'>
         {/* right side */}
            <div className='flex flex-col w-1/2 h-full justify-center items-start pl-24 gap-6 '>
                <div className='flex flex-col gap-2'>
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={selectedProject}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className='flex items-center gap-3'
                    >
                      <span className='text-7xl text-white font-display font-bold tracking-wide'>
                        {filteredProjects[selectedProject].name}
                      </span>
                      <div className={`px-3 py-2 rounded-md flex items-center gap-2 ${
                        filteredProjects[selectedProject].type === 'web' ? 'bg-blue-500/20 text-blue-300' : 
                        filteredProjects[selectedProject].type === 'mobile' ? 'bg-green-500/20 text-green-300' : 
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        <FontAwesomeIcon icon={
                          filteredProjects[selectedProject].type === 'web' ? faLaptopCode :
                          filteredProjects[selectedProject].type === 'mobile' ? faMobileAlt :
                          faFlask
                        } />
                        <span className='text-sm font-medium'>
                          {filteredProjects[selectedProject].type === 'web' ? 'Web Project' : 
                           filteredProjects[selectedProject].type === 'mobile' ? 'Mobile App' : 
                           'Research'}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <div className='flex flex-col gap-3'>
                  <span className='text-3xl text-devPink font-display font-semibold'>Description</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={selectedProject}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                      className='w-5/6 text-devGrey font-display font-light'
                    >
                      {filteredProjects[selectedProject].description}
                    </motion.span>
                  </AnimatePresence>
                </div>
            </div>
            {/* Left side */}
            <div className='flex flex-col w-1/2 h-full justify-center items-center gap-9'>
                <div className='flex justify-center items-center relative w-full h-auto overflow-hidden'>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedProject} 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full flex justify-center"
                      >
                        <img 
                          src={`/${filteredProjects[selectedProject].image}`} 
                          alt={filteredProjects[selectedProject].name}
                          className={`rounded-md border-solid border-2 border-devPurple ${
                             'w-2/3 aspect-auto' 
                          }`}
                        />
                        <div className='goto-panel rounded-b-md py-3 px-6 absolute bottom-0 border-solid border-l-2 border-b-2 border-r-2 border-devPurple'
                          style={{ 
                            width: '66.67%', 
                            backgroundColor: "color-mix(in srgb, var(--secondary-color) 90%, transparent)"}}>
                            <a href={`https://${filteredProjects[selectedProject].website ? filteredProjects[selectedProject].website : filteredProjects[selectedProject].github}`} className='hovered'>
                            <div className='flex flex-row justify-between w-full'>
                                <div className='flex flex-row gap-3 items-center justify-center'>
                                    <FontAwesomeIcon icon={filteredProjects[selectedProject].website ? faGlobe : faGithub} className='text-white'/>
                                    <span className='text-white'>{filteredProjects[selectedProject].website ? filteredProjects[selectedProject].website : filteredProjects[selectedProject].github}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faRightLong} className='text-white w-9'/>
                                </div>
                            </div>
                            </a>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                </div>
              <div className='flex flex-row w-full justify-between items-start' style={{ width: '66.67%', margin: '0 auto' }}>
  <div className='flex flex-col items-start justify-start gap-4' style={{ width: '75%' }}>
      <AnimatePresence mode="wait">
          <motion.div
              key={selectedProject}
              initial="hidden"
              animate="visible"
              exit="exit"
              className='flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4 justify-start items-center h-fit flex-wrap'
              style={{ width: '100%' }}
          >
              {filteredProjects[selectedProject].technologies.map((tech, index) => {
                  return (
                      <motion.div 
                          key={`${selectedProject}-${tech}-${index}`} 
                          className='flex justify-center items-center hovered'
                          variants={{
                              hidden: { opacity: 0, scale: 0.6, y: 20 },
                              visible: { 
                                  opacity: 1, 
                                  scale: 1, 
                                  y: 0,
                                  transition: { 
                                      delay: 0.1 + (index * 0.08),
                                      duration: 0.5,
                                      type: "spring",
                                      stiffness: 100
                                  }
                              },
                              exit: { 
                                  opacity: 0, 
                                  scale: 0.6, 
                                  y: -20,
                                  transition: { duration: 0.2 }
                              }
                          }}
                      >
                          <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                              {icon(tech)}
                          </div>
                      </motion.div>
                  )
              })}
          </motion.div>
      </AnimatePresence>
  </div>
  {filteredProjects[selectedProject].website && filteredProjects[selectedProject].github && (
      <AnimatePresence mode="wait">
          <motion.div 
              key={selectedProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              className='flex justify-center items-center hovered'
          >
              <a href={`https://${filteredProjects[selectedProject].github}`} className='hovered'>
                  <FontAwesomeIcon 
                      icon={faGithub} 
                      className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-devGrey hovered'
                  />
              </a>
          </motion.div>
      </AnimatePresence>
  )}
</div>
            </div>
       </div>
      
      <div className='mb-8'>
        <ProjectPagination 
          activeProject={selectedProject} 
          setActiveProject={setSelectedProject} 
          projectCount={filteredProjects.length}
        />
      </div>
      
      <Cursor/>
    </motion.div>
  );
};

export default SpecificProjects;

//#8884FF
//#C4CBCA