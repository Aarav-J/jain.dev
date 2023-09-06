type ProjectPaginationProps = {
    activeProject: number, 
    setActiveProject: React.Dispatch<React.SetStateAction<number>>
}

const ProjectPagination: React.FC<ProjectPaginationProps> = ({ activeProject, setActiveProject }) => { 
  
    return ( 
         <div className="flex flex-row">
            <div className={`border-solid border-[thick] w-32 ${activeProject===0 ? "border-devPink" : "border-white hover:border-devGrey"} `} onClick={() => { 
                setActiveProject(0)
            }}></div>
            <div className={`border-solid border-[thick] w-32 ${activeProject===1 ? "border-devPink" : "border-white hover:border-devGrey"} `} onClick={() => { 
                setActiveProject(1)
            }}></div>
            <div className={`border-solid border-[thick] w-32 ${activeProject==2 ? "border-devPink" : "border-white hover:border-devGrey"}`} onClick={() => { 
                setActiveProject(2)
            }}></div>
        </div>
        
    )
}   
export default ProjectPagination