
interface props {
    itemsPerPage: number,
    totalItems: number,
    setCurrentPage: (page: number) => void
}

export default function PageControls({itemsPerPage, totalItems, setCurrentPage}: props) {
    const pages = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i)
    } 

    return (
        <div>
            {pages.map((number, idx) => (
                <div key={idx} onClick={() => setCurrentPage(number)}>{number}</div>
            ))}
        </div>
    );
}