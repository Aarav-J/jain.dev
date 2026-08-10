import PaginationItem from "./PaginationItem"

type PaginationProps = {
    refList: React.RefObject<HTMLDivElement>[]
    activeNumber: number
    setActiveNumber: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({ refList, activeNumber, setActiveNumber }) => {
    const scrollTo = (section: React.RefObject<HTMLDivElement>) => {
        section.current?.scrollIntoView({ behavior: 'smooth' })
    }

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
                    />
                </div>
            ))}
        </div>
    )
}

export default Pagination
