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
        <div className="pagination h-screen flex justify-center items-center absolute flex-col top-[0px] left-12 gap-3">
            <PaginationItem pageNumber="01" refNumber={refList[0]} scroll={scrollTo} activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
            <PaginationItem pageNumber="02" refNumber={refList[1]} scroll={scrollTo} activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
            <PaginationItem pageNumber="03" refNumber={refList[2]} scroll={scrollTo} activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
            <PaginationItem pageNumber="04" refNumber={refList[3]} scroll={scrollTo} activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
           
        </div>
    )
}
export default Pagination