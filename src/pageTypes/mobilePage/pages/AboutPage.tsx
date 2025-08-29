
import "../../../components/typewriter.scss"
import useTypedWords from "../../../hooks/useTypedWords"
const words = ["Student", "Creator", "Athlete", "Problem Solver"]

import SmSectionType from "../../../type/SmsectionType"

const AboutPage: React.FC<SmSectionType> = ({ headingRef }) => {

    const word = useTypedWords(words)
    return (
        <div className={`w-screen h-screen bg-background-primary flex  items-center justify-center`} ref={headingRef}>
            <div className="inline-flex items-center flex-col gap-4" >
                <span className="font-semibold text-devPink text-3xl" >About</span>
                <span className="text-white font-black text-7xl text-center typewriter">{word}</span>
                <span className="text-devGrey font-normal text-3xl text-center w-11/12">I am Aarav, a Computer Engineering student at Purdue University. I am passionate about software development and solving technical challenges. I enjoy building web applications, coding in multiple languages, and working on innovative projects.</span>

            </div>
        </div>
    )

}

export default AboutPage