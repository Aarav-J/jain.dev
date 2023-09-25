

type PaginationItemProps = {
    pageNumber: string
    refNumber: React.RefObject<HTMLDivElement>
    scroll: (section: React.RefObject<HTMLDivElement>) => void
    activeNumber: number
    setActiveNumber: React.Dispatch<React.SetStateAction<number>>
}

const PaginationItem: React.FC<PaginationItemProps> = ({ pageNumber, refNumber, scroll, activeNumber }) => {
    return (
        <div className={` border-l-[thick] border-solid ${activeNumber === parseInt(pageNumber) ? "pagination-item text-white font-black border-white" : "text-white border-devGrey"} hover:text-devPink hover:border-devPink`}>
            <button onClick={() => { scroll(refNumber); }} className="hovered text-2xl border-none px-4">
                {pageNumber}
            </button>
        </div>
    );
}

export default PaginationItem