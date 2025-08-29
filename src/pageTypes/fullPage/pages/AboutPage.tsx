import SectionProps from "../../../type/sectionType"
import "../../../components/typewriter.scss"
import useTypedWords from "../../../hooks/useTypedWords"
const words = ["Developer", "Engineer", "Student", "Problem Solver"]

const AboutPage: React.FC<SectionProps> = ({ headingRef }) => {

    const word = useTypedWords(words)
    return (
        <div className={`section w-screen h-screen bg-background-primary flex  items-center justify-center`}>
            <div className="heading inline-flex items-center flex-col gap-4">
                <span className="font-semibold text-devPink text-3xl " ref={headingRef}>About</span>
                <span className="text-white font-black text-7xl typewriter">{word}</span>
                <span className="text-devGrey font-normal text-3xl text-center w-1/3">I am Aarav, a Computer Engineering student at Purdue University. I am passionate about software development and solving technical challenges. I enjoy building web applications, coding in multiple languages, and working on innovative projects.</span>

            </div>
        </div>
    )

}

export default AboutPage