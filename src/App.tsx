import { useMediaQuery } from "usehooks-ts";

import LgMd from "./pageTypes/fullPage/LgMd";
import MobilePage from "./pageTypes/mobilePage/Sm";
import SpecificProjects from "./pageTypes/fullPage/pages/SpecificProjects";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpecificProjectsSm from "./pageTypes/mobilePage/pages/SpecificProjects";
const App = () => {
    const isFullPage = useMediaQuery("(min-width: 1024px)");
    console.log(isFullPage)
    return (
        <Router>
            <Routes>
                <Route path="/" element={(isFullPage ? <LgMd /> : <MobilePage />)}/>
                <Route path="/projects" element={(isFullPage ? <SpecificProjects /> : <SpecificProjectsSm />)}/>
            </Routes>
        </Router>
        
    );
}

export default App;
