type ProjectPaginationProps = {
    activeProject: number, 
    setActiveProject: React.Dispatch<React.SetStateAction<number>>
}
import React from 'react'
const ProjectPagination:React.FC<ProjectPaginationProps> = ({activeProject, setActiveProject}) => { 
    // const [activeProject, setActiveProject] = useState(0)
    return ( 
         <div className="flex flex-row gap-3">
            <div className={`hovered border-solid border-[thick] w-16 ${activeProject===0 ? "border-devPink" : "border-devGrey hover:border-devPurple"}  transition-colors`} onClick={() => { 
                setActiveProject(0)
            }}></div>
            <div className={`hovered border-solid border-[thick] w-16 ${activeProject===1 ? "border-devPink" : "border-devGrey hover:border-devPurple"}  transition-colors`} onClick={() => { 
                setActiveProject(1)
            }}></div>
            <div className={`hovered border-solid border-[thick] w-16 ${activeProject==2 ? "border-devPink" : "border-devGrey hover:border-devPurple"} transition-colors`} onClick={() => { 
                setActiveProject(2)
            }}></div>
            <div className={`hovered border-solid border-[thick] w-16 ${activeProject==3 ? "border-devPink" : "border-devGrey hover:border-devPurple"} transition-colors`} onClick={() => { 
                setActiveProject(3)
            }}></div>
        </div>
        
    )
}   
export default ProjectPagination