import { useMediaQuery } from "usehooks-ts";

import LgMd from "./pageTypes/fullPage/LgMd";
import MobilePage from "./pageTypes/mobilePage/Sm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    const isFullPage = useMediaQuery("(min-width: 1024px)");
    return (
        <Router>
            <Routes>
                <Route path="/" element={(isFullPage ? <LgMd /> : <MobilePage />)} />
            </Routes>
        </Router>
    );
}

export default App;
