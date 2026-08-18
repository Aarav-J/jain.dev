import Spotify from "./Spotify";
import { useMediaQuery } from 'usehooks-ts'

const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    return (
        <div className="z-10 absolute top-0 right-0 pt-6 pr-8">
            {isDesktop && <Spotify />}
        </div>
    )
}

export default Navbar;
