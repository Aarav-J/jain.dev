import Button from "./Button";


type NavbarProps = {
    refs: React.RefObject<HTMLDivElement>[]
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    show: boolean
}
const Navbar: React.FC<NavbarProps> = ({ refs, setShow, show }) => {

    const scrollTo = (section: React.RefObject<HTMLDivElement>) => {
        section.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className={`w-screen ${"h-16 bg-transparent flex top-0 items-end justify-end"} sticky z-[1]`}>
            <Button show={show} setShow={setShow} />
            <div className={`bg-devPurple w-screen h-screen absolute top-0 right-0  ${show ? "opacity-100" : "opacity-0"} flex transition-opacity duration-300 ease items-center justify-center`}>
                <div className={`flex flex-col text-center text-background-primary font-black text-4xl gap-4`}>
                    <span onClick={() => {
                        if (show) {
                            setShow(false)
                            scrollTo(refs[0])
                        }

                    }}>Home</span>
                    <span onClick={() => {
                        if (show) {
                            setShow(false)
                            scrollTo(refs[1])
                        }

                    }}>About Me</span>
                    <span onClick={() => {
                        if (show) {
                            setShow(false)
                            scrollTo(refs[2])
                        }

                    }}>Skills</span>
                    <span onClick={() => {
                        if (show) {
                            setShow(false)
                            scrollTo(refs[3])
                        }

                    }}>Projects</span>
                </div>
            </div>

        </div >
    )
}

export default Navbar;