
import "../../../components/typewriter.scss"
import useTypedWords from "../../../hooks/useTypedWords"
const words = ["Student", "Creator", "Athlete", "Problem Solver"]

const AboutPage = () => {

    const word = useTypedWords(words)
    return (
        <div className={`w-screen h-screen bg-background-primary flex  items-center justify-center`}>
            <div className="inline-flex items-center flex-col gap-4">
                <span className="font-semibold text-devPink text-3xl">About</span>
                <span className="text-white font-black text-7xl text-center typewriter">{word}</span>
                <span className="text-devGrey font-normal text-3xl text-center w-11/12">I am Aarav, a high school student from New Jersey, USA. I am a problem solver, and an athlete. I love playing outside, watching television, and of course coding. Right now my favorite show is Ted Lasso . </span>

            </div>
        </div>
    )

}

export default AboutPage