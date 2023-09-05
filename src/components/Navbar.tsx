import Spotify from "./Spotify";

const Navbar = () => { 
    return ( 
        <div className="md:z-10 z-0 absolute flex justify-between bg-background-primary h-32 items-center w-screen px-24">
            <span className="text-[2.625rem] font-black bg-navbarTitle bg-clip-text text-transparent">JAIN.DEV</span>
            <Spotify/>
            
        </div>
    )
}
export default Navbar; 