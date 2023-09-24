import { useMediaQuery } from "usehooks-ts";

import LgMd from "./pageTypes/fullPage/LgMd";
import MobilePage from "./pageTypes/mobilePage/Sm";

const App = () => {
    const isFullPage = useMediaQuery("(min-width: 1024px)");
    console.log(isFullPage)
    return (
        (isFullPage ? <LgMd /> : <MobilePage />)
    );
}

export default App;
