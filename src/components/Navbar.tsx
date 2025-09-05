import { useNavigate } from "react-router-dom";
import Spotify from "./Spotify";
import Letterboxd from "./Letterboxd";
import { useMediaQuery } from 'usehooks-ts'

const Navbar = () => {
    const navigate = useNavigate(); 
    const isScrollLocking = useMediaQuery('(min-width: 1024px)')
    return (
        <div className="md:z-10 z-0 absolute flex justify-between bg-background-primary h-32 items-center w-screen px-20">
            <span className="text-[2.625rem] hovered font-black bg-navbarTitle bg-clip-text text-transparent bg-[size:200%] animation-gradient-move" onClick={() => {navigate("/")}}>JAIN.DEV</span>
            {isScrollLocking ? (
                <div className="flex items-center gap-4">
                    <Letterboxd /> {/* Add the Letterboxd component */}
                    <Spotify />
                </div>
            ) : null}

        </div>
    )
}
export default Navbar; 