type ProjectPaginationProps = {
    activeProject: number, 
    setActiveProject: React.Dispatch<React.SetStateAction<number>>,
    projectCount?: number
}
import React from 'react'
const ProjectPagination:React.FC<ProjectPaginationProps> = ({activeProject, setActiveProject, projectCount = 4}) => { 
    // Generate pagination items based on project count
    const renderPaginationItems = () => {
        const items = [];
        for (let i = 0; i < projectCount; i++) {
            items.push(
                <div 
                    key={i}
                    className={`hovered border-solid border-[thick] w-16 ${activeProject === i ? "border-devPink" : "border-devGrey hover:border-devPurple"} transition-colors`} 
                    onClick={() => setActiveProject(i)}
                ></div>
            );
        }
        return items;
    };
    
    return ( 
        <div className="flex flex-row gap-3">
            {renderPaginationItems()}
        </div>
    )
}   
export default ProjectPagination