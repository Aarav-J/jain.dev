import  {useState, useRef} from 'react';
import Cursor from '../../../components/Cursor';
import {faRightLong, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import { faGithub, faJs, faNode, faReact, } from '@fortawesome/free-brands-svg-icons';
// import Navbar from '../components/Navbar';
import { SiAxios, SiCplusplus, SiFirebase, SiFlask, SiMongodb, SiPython, SiSocketdotio, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

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
const SpecificProjectsSm = () => {
   
    const navigate = useNavigate();
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
  return (
    <div className='w-full bg-background-primary flex flex-col items-center'>
      <span className="text-[2.625rem] hovered font-black bg-navbarTitle bg-clip-text text-transparent bg-[size:200%] animation-gradient-move" onClick={() => {navigate("/")}}>JAIN.DEV</span>
      <div className='flex flex-col items-center w-full mt-8 px-4'>
        {data.map((project, index) => (
          <div key={index} className='flex flex-col items-center w-full mb-12'>
            {/* Project name */}
            <span className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-display font-bold tracking-wide text-center'>
              {project.name}
            </span>
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