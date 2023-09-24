

type ButtonProps = {
    show: boolean,
    setShow: (show: boolean) => void
}
const Button: React.FC<ButtonProps> = ({ show, setShow }) => {

    const genericHamburgerLine = `h-4 w-14 my-1 rounded-full ${show ? "bg-background-primary" : "bg-devPurple"} transition ease transform duration-300`;


    return (
        <button
            className="flex flex-col h-12 w-14 mt-8 justify-center items-center group absolute z-[2]"
            onClick={() => {
                setShow(!show)
            }}
        >
            <div
                className={`${genericHamburgerLine} ${show
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                    }`}
            />
            <div className={`${genericHamburgerLine} ${show ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
            <div
                className={`${genericHamburgerLine} ${show
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                    }`}
            />
        </button>
    );
}

export default Button; 