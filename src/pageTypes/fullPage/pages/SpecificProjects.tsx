import  {useState} from 'react';
import Cursor from '../../../components/Cursor';
import {faRightLong, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import { faGithub, faJs, faNode, faReact, } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../../components/Navbar';
import ProjectPagination from '../../../components/projectsPagination/ProjectPagination';
import { SiAxios, SiCplusplus, SiFirebase, SiFlask, SiMongodb, SiPython, SiSocketdotio, SiTailwindcss, SiTypescript } from 'react-icons/si';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import Data from "./Data"
interface IconProps {
    tech: string;
}


const data = [ 
    { 
        name: "TicTacToe^2", 
        description: "Inspired by playing this game with a friend during Spanish class, I built a multiplayer version that adds a strategic twist to the classic game. Using React.js, Node.js, and Socket.io, the app provides real-time gameplay with smooth synchronization across devices. The clean, responsive UI, styled with Tailwind CSS, includes dark mode and offers a seamless user experience. Overall, this project combines nostalgic gameplay with modern web technologies, delivering an engaging and dynamic experience for all players.", 
        website: null, 
        github: "github.com/Aarav-J/tictactoesquared", 
        image: "tictactoeimage.png",
        technologies: ["react", "node", "js", "socket", "tailwind"]
    }, 
    { 
        name: "AaravType", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum ullam provident, voluptates in expedita harum totam nostrum quidem eveniet. Quaerat ratione esse incidunt architecto adipisci pariatur dolorem, rem tempore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia adipisci et minus blanditiis. Inventore unde, dolore doloremque, nam cumque nostrum in ipsa numquam recusandae ullam perspiciatis porro voluptatem. Eligendi, deleniti.", 
        website: "aaravtype.aaravj.xyz", 
        github: "github.com/Aarav-J/aaravtypefrontend", 
        image: "aaravtype.png",
        technologies: ["react", "js", "tailwind", "node", "mongo"]
    },
    { 
        name: "PopFlix", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum ullam provident, voluptates in expedita harum totam nostrum quidem eveniet. Quaerat ratione esse incidunt architecto adipisci pariatur dolorem, rem tempore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia adipisci et minus blanditiis. Inventore unde, dolore doloremque, nam cumque nostrum in ipsa numquam recusandae ullam perspiciatis porro voluptatem. Eligendi, deleniti.", 
        website: null, 
        github: "github.com/Aarav-J/popflix", 
        image: "placeholder.jpg",
        technologies: ["react", "js", "axios", "tailwind", "firebase"]
    },
    { 
        name: "Spotify Controller", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum ullam provident, voluptates in expedita harum totam nostrum quidem eveniet. Quaerat ratione esse incidunt architecto adipisci pariatur dolorem, rem tempore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia adipisci et minus blanditiis. Inventore unde, dolore doloremque, nam cumque nostrum in ipsa numquam recusandae ullam perspiciatis porro voluptatem. Eligendi, deleniti.", 
        website: null, 
        github: "github.com/Aarav-J/spotifycontroller", 
        image: "placeholder.jpg",
        technologies: ["python", "cplusplus", "axios", "flask"]
    },
]
const SpecificProjects = () => {
   
    const icon = (tech: IconProps['tech']): JSX.Element | null => { 
        if(tech === "react") return <FontAwesomeIcon icon={faReact} className='text-5xl text-react'/>
        if(tech === "node") return <FontAwesomeIcon icon={faNode} className='text-5xl text-node'/>
        if(tech === "js") return <FontAwesomeIcon icon={faJs} className='text-5xl text-js'/>
        if(tech === "socket") return <SiSocketdotio className='text-5xl text-white'/>
        if(tech === "mongo") return <SiMongodb className='text-5xl text-mongo'/>
        if(tech==="tailwind") return <SiTailwindcss className='text-5xl text-tailwind'/>
        if(tech==="ts") return <SiTypescript className='text-5xl text-ts'/>
        if(tech==="axios") return <SiAxios className='text-5xl text-axios'/>
        if(tech==="python") return <SiPython className='text-5xl text-python'/>
        if(tech==="flask") return <SiFlask className='text-5xl text-flask'/>
        if(tech==="c++") return <SiCplusplus className='text-5xl text-cplusplus'/>
        if(tech==="firebase") return <SiFirebase className='text-5xl text-firebase'/>
        return null
    }
    const [selectedProject, setSelectedProject] = useState(0)
  return (
    <div className='w-screen h-screen bg-background-primary items-center flex flex-col justify-start'>
        <Navbar/>
       <div className='flex flex-row justify-center items-center gap-6 h-full w-full'>
         {/* right side */}
            <div className='flex flex-col w-1/2 h-full justify-center items-start pl-24 gap-6 '>
            {data[selectedProject].name == "TicTacToe^2" ? (<span className='text-7xl text-white font-display font-bold tracking-wide'>TicTacToe<sup>2</sup></span>) : (<span className='text-7xl text-white font-display font-bold tracking-wide'>{data[selectedProject].name}</span>)}
                
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-devPink font-display font-semibold'>Description</span>
                    <span className='w-5/6 text-devGrey font-display font-light'>{data[selectedProject].description}</span>
                </div>
            </div>
            {/* Left side */}
            <div className='flex flex-col w-1/2 h-full justify-center items-center gap-9'>
                <div className='flex justify-center items-center relative'>
                    <img src={`/${data[selectedProject].image}`} alt="" className='w-2/3 aspect-auto rounded-md  border-solid border-2 border-devPurple'/>
                    <div className='goto-panel bg-goto rounded-b-md py-3 px-6  absolute bottom-0 w-2/3 border-solid border-l-2 border-b-2 border-r-2 border-devPurple'>
                        <a href={`https://${data[selectedProject].website ? data[selectedProject].website : data[selectedProject].github}`} className='hovered'>
                        <div className='flex flex-row justify-between w-full'>
                            <div className='flex flex-row gap-3 items-center justify-center'>
                                <FontAwesomeIcon icon={data[selectedProject].website ? faGlobe : faGithub} className='text-white'/>
                                <span className='text-white'>{data[selectedProject].website ? data[selectedProject].website : data[selectedProject].github}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faRightLong} className='text-white w-9'/>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
                <div className='flex flex-row w-full justify-between px-32'>
                    <div className='flex flex-col items-start justify-start w-full gap-4'>
                        {/* <span className='text-3xl text-white font-display font-semibold'>Made with: </span> */}
                        <div className='flex flex-row gap-4 justify-start items-center  h-fit'>
                                {data[selectedProject].technologies.map((tech, index) => {
                                    return (
                                        <div key={index} className='flex justify-center items-center hovered'>
                                            {icon(tech)}
                                        </div>
                                    )
                                })}
                                
                                
                        </div>
                    </div>
                    <div className='flex justify-center items-center hovered w-1/3'>
                        {data[selectedProject].website ? <FontAwesomeIcon icon={faGithub} className='text-5xl text-devGrey hovered'/> : null}
                        
                    </div>
                </div>
            </div>
       </div>
      
      <div className='mb-8'>
        <ProjectPagination activeProject={selectedProject} setActiveProject={setSelectedProject}/>
      </div>
      
      <Cursor/>
    </div>
  );
};

export default SpecificProjects;

//#8884FF
//#C4CBCA