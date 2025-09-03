import React from 'react';
import { motion } from 'framer-motion';

type ProjectPaginationProps = {
    activeProject: number, 
    setActiveProject: React.Dispatch<React.SetStateAction<number>>,
    projectCount?: number
}

const ProjectPagination:React.FC<ProjectPaginationProps> = ({activeProject, setActiveProject, projectCount = 4}) => { 
    // Generate pagination items based on project count
    const renderPaginationItems = () => {
        const items = [];
        for (let i = 0; i < projectCount; i++) {
            items.push(
                <motion.div 
                    key={i}
                    className={`hovered border-solid border-[thick] w-16 ${activeProject === i ? "border-devPink" : "border-devGrey hover:border-devPurple"}`}
                    onClick={() => setActiveProject(i)}
                    initial={{ opacity: 0.7, y: 5 }}
                    animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: activeProject === i ? 1.1 : 1,
                        borderColor: activeProject === i ? "#C517F1" : "#CCCCCC"
                    }}
                    whileHover={{ scale: 1.1,  }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15,
                        duration: 0.2
                    }}
                ></motion.div>
            );
        }
        return items;
    };
    
    return ( 
        <motion.div 
            className="flex flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
            {renderPaginationItems()}
        </motion.div>
    )
}   
export default ProjectPagination