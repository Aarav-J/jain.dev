import "../components/typewriter.scss"
import useTypedWords from "../hooks/useTypedWords"
type landingProps = {
    headingRef: React.RefObject<HTMLHeadingElement>;
    learnMoreRef: React.RefObject<HTMLDivElement>;
    scroll: (section: React.RefObject<HTMLDivElement>) => void;
}




const words = ["creating", "learning", "coding", "playing"]

const LandingPage: React.FC<landingProps> = ({ headingRef, learnMoreRef, scroll }) => {

    const word = useTypedWords(words)
    return (
        <div className="section w-screen h-screen bg-background-primary flex items-center justify-center ">
            <div className="heading flex items-center w-full flex-col justify-center">
                <span className="font-semibold text-devPink text-3xl" ref={headingRef}>Who Am I?</span>
                <span className="text-white font-black text-7xl">I'm Aarav Jain</span>
                <span className="text-devGrey font-normal text-7xl lg:text-left text-center">Someone who enjoys <span className="typewriter">{word}</span></span>
                <button className="text-xl font-normal w-32 h-12 rounded-2xl border-devPink border-2 border-solid text-white mt-2" onClick={() => {
                    scroll(learnMoreRef)

                }}>Learn More</button>
            </div>
        </div>
    )

}

export default LandingPage