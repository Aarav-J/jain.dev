import { useState } from "react"

type PaginationItemProps = {
    pageNumber: string
    refNumber: React.RefObject<HTMLDivElement>
    scroll: (section: React.RefObject<HTMLDivElement>) => void
    activeNumber: number
    setActiveNumber: React.Dispatch<React.SetStateAction<number>>
    label: string
}

const PaginationItem: React.FC<PaginationItemProps> = ({ pageNumber, refNumber, scroll, activeNumber, label }) => {
    const isActive = activeNumber === parseInt(pageNumber)
    const [hovered, setHovered] = useState(false)

    return (
        <button
            onClick={() => scroll(refNumber)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="hovered group relative flex items-center justify-center w-5 h-5"
            aria-label={`Go to ${label}`}
        >
            <span className={`
                absolute left-6 whitespace-nowrap
                font-mono text-[10px] tracking-[0.14em] uppercase
                transition-all duration-200
                ${hovered ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 -translate-x-1 text-devGrey/70'}
            `}>
                {label}
            </span>

            <span className={`block rounded-full transition-all duration-300 ${
                isActive
                    ? 'w-1.5 h-1.5 bg-devPink'
                    : 'w-1 h-1 bg-devGrey/40 group-hover:bg-devGrey/80'
            }`} />
        </button>
    )
}

export default PaginationItem
