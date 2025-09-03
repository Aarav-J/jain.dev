import  {useState} from 'react';
import Cursor from '../../../components/Cursor';
import {faRightLong, faGlobe, faMobileAlt, faFlask, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import { faGithub, faJs, faNode, faReact, } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../../components/Navbar';
import ProjectPagination from '../../../components/projectsPagination/ProjectPagination';
import { SiAxios, SiCplusplus, SiFirebase, SiFlask, SiMongodb, SiPython, SiSocketdotio, SiTailwindcss, SiTypescript, SiKotlin, SiSwift, SiTensorflow, SiExpo, SiOverleaf, SiOpenai, SiSupabase } from 'react-icons/si';

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
    <div className='w-screen h-screen bg-background-primary items-center flex flex-col justify-start'>
        <Navbar/>
        <div className='mt-20 mb-6 flex flex-row justify-center items-center gap-6'>
          <button 
            onClick={() => handleProjectTypeChange('all')} 
            className={`px-6 py-2 rounded-md ${projectType === 'all' ? 'bg-devPink text-white' : 'bg-transparent text-devGrey border border-devGrey'}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => handleProjectTypeChange('web')} 
            className={`px-6 py-2 rounded-md ${projectType === 'web' ? 'bg-devPink text-white' : 'bg-transparent text-devGrey border border-devGrey'} flex items-center gap-2`}
          >
            <FontAwesomeIcon icon={faLaptopCode} /> Web Projects
          </button>
          <button 
            onClick={() => handleProjectTypeChange('mobile')} 
            className={`px-6 py-2 rounded-md ${projectType === 'mobile' ? 'bg-devPink text-white' : 'bg-transparent text-devGrey border border-devGrey'} flex items-center gap-2`}
          >
            <FontAwesomeIcon icon={faMobileAlt} /> Mobile Apps
          </button>
          <button 
            onClick={() => handleProjectTypeChange('research')} 
            className={`px-6 py-2 rounded-md ${projectType === 'research' ? 'bg-devPink text-white' : 'bg-transparent text-devGrey border border-devGrey'} flex items-center gap-2`}
          >
            <FontAwesomeIcon icon={faFlask} /> Research
          </button>
        </div>

       <div className='flex flex-row justify-center items-center gap-6 h-full w-full'>
         {/* right side */}
            <div className='flex flex-col w-1/2 h-full justify-center items-start pl-24 gap-6 '>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-3'>
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
                  </div>
                </div>
                
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-devPink font-display font-semibold'>Description</span>
                    <span className='w-5/6 text-devGrey font-display font-light'>{filteredProjects[selectedProject].description}</span>
                </div>
            </div>
            {/* Left side */}
            <div className='flex flex-col w-1/2 h-full justify-center items-center gap-9'>
                <div className='flex justify-center items-center relative w-full h-auto'>
                    <img 
                      src={`/${filteredProjects[selectedProject].image}`} 
                      alt={filteredProjects[selectedProject].name}
                      className={`rounded-md border-solid border-2 border-devPurple ${
                         'w-2/3 aspect-auto' 
                        // filteredProjects[selectedProject].type === 'mobile' ? 'w-1/3 aspect-[9/16]' : 
                        // 'w-3/4 aspect-[4/3]'
                      }`}
                    />
                    <div className='goto-panel bg-goto rounded-b-md py-3 px-6 absolute bottom-0 border-solid border-l-2 border-b-2 border-r-2 border-devPurple'
                      style={{
                        // width: filteredProjects[selectedProject].type === 'mobile' ? '33.33%' : 
                        //        filteredProjects[selectedProject].type === 'research' ? '75%' : '66.67%'
                        width: '66.67%'
                      }}>
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
                </div>
                <div className='flex flex-row w-full justify-between px-40'>
                    <div className='flex flex-col items-start justify-start w-full gap-4'>
                        <div className='flex flex-row gap-4 justify-start items-center h-fit'>
                            {filteredProjects[selectedProject].technologies.map((tech, index) => {
                                return (
                                    <div key={index} className='flex justify-center items-center hovered'>
                                        {icon(tech)}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {filteredProjects[selectedProject].website && filteredProjects[selectedProject].github && (
                        <div className='flex justify-center items-center hovered w-1/3'>
                            <a href={`https://${filteredProjects[selectedProject].github}`} className='hovered'>
                                <FontAwesomeIcon 
                                icon={faGithub} 
                                className='text-5xl text-devGrey hovered'
                                />
                            </a>
                        </div>
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
    </div>
  );
};

export default SpecificProjects;

//#8884FF
//#C4CBCA