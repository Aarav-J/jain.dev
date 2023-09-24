
import useTypedWords from "../../../hooks/useTypedWords"

const words = ["creating", "learning", "coding", "playing"]
const LandingPage = () => {

    const word = useTypedWords(words)
    return (
        <div className={` w-screen h-screen bg-background-primary flex items-center justify-center`}>
            <div className={`heading flex items-center w-full flex-col justify-center gap-4`}>
                <span className="font-semibold text-devPink text-3xl">Who Am I?</span>
                <span className="text-white font-black text-7xl text-center">I'm Aarav Jain</span>
                <span className="text-devGrey font-normal text-7xl lg:text-left text-center">Someone who enjoys <span className="typewriter">{word}</span></span>
                <button className="text-xl font-normal w-32 h-12 rounded-2xl border-devPink border-2 border-solid text-white mt-2">Learn More</button>
            </div>
        </div>
    )
}

export default LandingPage; 