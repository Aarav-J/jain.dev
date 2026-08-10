type PaginationItemProps = {
    pageNumber: string
    refNumber: React.RefObject<HTMLDivElement>
    scroll: (section: React.RefObject<HTMLDivElement>) => void
    activeNumber: number
    setActiveNumber: React.Dispatch<React.SetStateAction<number>>
}

const PaginationItem: React.FC<PaginationItemProps> = ({ pageNumber, refNumber, scroll, activeNumber }) => {
    const isActive = activeNumber === parseInt(pageNumber)
    return (
        <button
            onClick={() => scroll(refNumber)}
            className="hovered group flex items-center justify-center w-5 h-5"
            aria-label={`Go to section ${pageNumber}`}
        >
            <span
                className={`block rounded-full transition-all duration-300 ${
                    isActive
                        ? 'w-1.5 h-1.5 bg-devPink'
                        : 'w-1 h-1 bg-devGrey/40 group-hover:bg-devGrey/80'
                }`}
            />
        </button>
    )
}

export default PaginationItem
