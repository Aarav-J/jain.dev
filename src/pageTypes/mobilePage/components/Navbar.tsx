import Button from "./Button";
import { useState } from "react";

type NavbarProps = {
    refs: React.RefObject<HTMLDivElement>[]
}
const Navbar: React.FC<NavbarProps> = ({ refs }) => {
    const [show, setShow] = useState(false);
    const scrollTo = (section: React.RefObject<HTMLDivElement>) => {
        section.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className={`w-screen ${"h-16 bg-background-primary flex flex-row top-0  justify-center items-center "} `}>
            <Button show={show} setShow={setShow} />
            <div className={`bg-devPurple w-screen h-screen absolute top-0 right-0 z-[1] ${show ? "opacity-100" : "opacity-0"} flex transition-opacity duration-300 ease items-center justify-center`}>
                <div className="flex flex-col text-center text-background-primary font-black text-4xl gap-4">
                    <span onClick={() => {
                        setShow(false)
                        scrollTo(refs[0])
                    }}>Home</span>
                    <span onClick={() => {
                        setShow(false)
                        scrollTo(refs[1])
                    }}>About Me</span>
                    <span onClick={() => {
                        setShow(false)
                        scrollTo(refs[2])
                    }}>Skills</span>
                    <span onClick={() => {
                        setShow(false)
                        scrollTo(refs[3])
                    }}>Projects</span>
                </div>
            </div>

        </div >
    )
}

export default Navbar;