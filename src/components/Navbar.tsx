import { useNavigate } from "react-router-dom";
import Spotify from "./Spotify";
import { useMediaQuery } from 'usehooks-ts'
import ColorSelector from "./ColorSelector";

const Navbar = () => {
    const navigate = useNavigate(); 
    const isScrollLocking = useMediaQuery('(min-width: 1024px)')
    return (
        <div className="md:z-10 z-0 absolute flex bg-background-primary h-32 items-center w-screen px-20">
            {/* Left side - ColorSelector */}
            <div className="absolute left-8">
                <ColorSelector/>
            </div>
            
            {/* Center - Logo, absolutely centered regardless of other elements */}
            <div className="absolute left-0 right-0 mx-auto flex justify-center items-center w-full pointer-events-none">
                <span 
                    className="text-[2.625rem] hovered font-black bg-navbarTitle bg-clip-text text-transparent bg-[size:200%] animation-gradient-move pointer-events-auto"
                    onClick={() => {navigate("/")}}
                >
                    JAIN.DEV
                </span>
            </div>
            
            {/* Right side - Spotify */}
            {isScrollLocking ? (
                <div className="absolute right-8 flex items-center gap-4">
                    <Spotify />
                </div>
            ) : null}
        </div>
    )
}
export default Navbar; 