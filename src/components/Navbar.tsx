import { useNavigate } from "react-router-dom";
import Spotify from "./Spotify";
import { useMediaQuery } from 'usehooks-ts'

const Navbar = () => {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery('(min-width: 1024px)')
    return (
        <div className="z-10 absolute flex bg-background-primary h-32 items-start w-screen px-8 pt-7">
            {/* Center - Logo */}
            <div className="absolute left-0 right-0 mx-auto flex justify-center items-center w-full pointer-events-none">
                <span
                    className="text-[2.625rem] font-display font-black hovered bg-navbarTitle bg-clip-text text-transparent bg-[size:200%] pointer-events-auto tracking-tight"
                    onClick={() => { navigate("/") }}
                >
                    AARAVJ.XYZ
                </span>
            </div>

            {/* Right - Spotify (desktop only) */}
            {isDesktop ? (
                <div className="absolute right-8">
                    <Spotify />
                </div>
            ) : null}
        </div>
    )
}
export default Navbar;
