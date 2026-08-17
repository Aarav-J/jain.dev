import { useEffect } from "react"
import PaginationItem from "./PaginationItem"

type PaginationProps = {
    refList: React.RefObject<HTMLDivElement>[]
    labels: string[]
    activeNumber: number
    setActiveNumber: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({ refList, labels, activeNumber, setActiveNumber }) => {
    const scrollTo = (section: React.RefObject<HTMLDivElement>) => {
        section.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault()
                const next = Math.min(activeNumber + 1, refList.length)
                if (next !== activeNumber) {
                    setActiveNumber(next)
                    scrollTo(refList[next - 1])
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                const prev = Math.max(activeNumber - 1, 1)
                if (prev !== activeNumber) {
                    setActiveNumber(prev)
                    scrollTo(refList[prev - 1])
                }
            }
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [activeNumber, refList, setActiveNumber])

    return (
        <div className="h-screen flex justify-center items-center absolute flex-col top-0 left-4 gap-2 z-20 pointer-events-none">
            {refList.map((ref, i) => (
                <div key={i} className="pointer-events-auto">
                    <PaginationItem
                        pageNumber={String(i + 1).padStart(2, '0')}
                        refNumber={ref}
                        scroll={scrollTo}
                        activeNumber={activeNumber}
                        setActiveNumber={setActiveNumber}
                        label={labels[i]}
                    />
                </div>
            ))}
        </div>
    )
}

export default Pagination
