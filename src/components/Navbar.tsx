import Spotify from "./Spotify";
import { useMediaQuery } from 'usehooks-ts'
const Navbar = () => {
    const isScrollLocking = useMediaQuery('(min-width: 1024px)')
    return (
        <div className="md:z-10 z-0 absolute flex justify-between bg-background-primary h-32 items-center w-screen px-24">
            <span className="text-[2.625rem] font-black bg-navbarTitle bg-clip-text text-transparent">JAIN.DEV</span>
            {isScrollLocking ? <Spotify /> : null}

        </div>
    )
}
export default Navbar; 