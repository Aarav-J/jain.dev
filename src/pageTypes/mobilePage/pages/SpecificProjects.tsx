import Cursor from '../../../components/Cursor';
// import {faRightLong, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import {faRightLong, faGlobe, faMobileAlt, faFlask, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
// import Navbar from '../components/Navbar';
import { faGithub, faJs, faNode, faReact, } from '@fortawesome/free-brands-svg-icons';
import { SiAxios, SiCplusplus, SiFirebase, SiFlask, SiMongodb, SiPython, SiSocketdotio, SiTailwindcss, SiTypescript, SiKotlin, SiSwift, SiTensorflow, SiExpo, SiOverleaf, SiOpenai, SiSupabase } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
// import Data from "./Data"
// import Data from "./Data"
interface IconProps {
    tech: string;
}
interface ProjectData {
  name: string;
  description: string;
  website: string | null;
  github: string;
  image: string;
  technologies: string[];
  type: 'web' | 'mobile' | 'research';
}



const data: ProjectData[] = [ 
    { 
        name: "Truth Decay", 
        description: "Rapid improvements in large language models have unveiled a critical challenge in human-AI interaction: sycophancy. In this context, sycophancy refers to the tendency of models to excessively agree with or flatter users, often at the expense of factual accuracy. While previous studies have primarily analyzed this behavior in single-turn interactions, its persistence and evolution in multi-step conversations remain largely unexplored. We introduce TRUTH DECAY, a benchmark specifically designed to evaluate sycophancy in extended dialogues, where language models must navigate iterative user feedback, challenges, and persuasion. We prompt models to elicit four types of sycophantic biases. We then propose and test sycophancy reduction strategies, evaluating their effectiveness beyond single-step interactions.",
        website: null, 
        github: "arxiv.org/pdf/2503.11656", 
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
const SpecificProjectsSm = () => {
   
    const navigate = useNavigate();
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
  return (
    <div className='w-full bg-background-primary flex flex-col items-center'>
      <span className="text-[2.625rem] hovered font-black bg-navbarTitle bg-clip-text text-transparent bg-[size:200%] animation-gradient-move" onClick={() => {navigate("/")}}>JAIN.DEV</span>
      <div className='flex flex-col items-center w-full mt-8 px-4'>
        {data.map((project, index) => (
          <div key={index} className='flex flex-col items-center w-full mb-12'>
       

            {/* Project name and type badge */}
                        <div className="flex flex-col items-center gap-2">
                            <span className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-display font-bold tracking-wide text-center'>
                                {project.name}
                            </span>
                            <div className={`px-3 py-2 rounded-md flex items-center gap-2 ${
                                project.type === 'web' ? 'bg-blue-500/20 text-blue-300' : 
                                project.type === 'mobile' ? 'bg-green-500/20 text-green-300' : 
                                'bg-purple-500/20 text-purple-300'
                            }`}>
                                <FontAwesomeIcon icon={
                                    project.type === 'web' ? faLaptopCode :
                                    project.type === 'mobile' ? faMobileAlt :
                                    faFlask
                                } />
                                <span className='text-sm font-medium'>
                                    {project.type === 'web' ? 'Web Project' : 
                                    project.type === 'mobile' ? 'Mobile App' : 
                                    'Research Project'}
                                </span>
                            </div>
                        </div>
            {/* Image and link */}
            <div className='flex flex-col items-center w-full mt-6'>
              <div className='relative w-full sm:w-3/4 md:w-2/3'>
                <img 
                  src={`/${project.image}`} 
                  alt="" 
                  className='w-full rounded-md border-2 border-devPurple'
                />
                <div className='goto-panel bg-goto rounded-b-md py-3 px-4 absolute bottom-0 w-full border-l-2 border-b-2 border-r-2 border-devPurple'>
                  <a 
                    href={`https://${project.website ? project.website : project.github}`} 
                    className='hovered'
                  >
                    <div className='flex flex-row justify-between items-center'>
                      <div className='flex flex-row gap-2 items-center'>
                        <FontAwesomeIcon 
                          icon={project.website ? faGlobe : faGithub} 
                          className='text-white text-xl'
                        />
                        <span className='text-white text-sm sm:text-base'>
                          {project.website ? project.website : project.github}
                        </span>
                      </div>
                      <FontAwesomeIcon 
                        icon={faRightLong} 
                        className='text-white text-xl'
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Technologies */}
            <div className='flex flex-row flex-wrap justify-center mt-6 gap-4'>
              {project.technologies.map((tech, techIndex) => (
                <div key={techIndex} className='flex justify-center items-center hovered'>
                  {icon(tech)}
                </div>
              ))}
            </div>
            {/* GitHub link */}
            {project.website && (
              <div className='flex justify-center items-center mt-6'>
                <a href={`https://${project.github}`} className='hovered'>
                  <FontAwesomeIcon 
                    icon={faGithub} 
                    className='text-4xl text-devGrey'
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <Cursor/>
    </div>
  );
};

export default SpecificProjectsSm;