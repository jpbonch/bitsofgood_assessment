import "./styles/PageControls.css";

interface props {
  itemsPerPage: number;
  totalItems: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

export default function PageControls({
  itemsPerPage,
  totalItems,
  setCurrentPage,
  currentPage,
}: props) {
  let pages: Array<number> = [];
  const lastPage = Math.ceil(totalItems / itemsPerPage)

  // if page = 1 we want 1,2,3,4,5
  // if page = 2 we want 1,2,3,4,5
  // if page = 3 we want 1,2,3,4,5
  // if page = 4 we want 2,3,4,5,6
  if (lastPage <= 5) {
    pages = Array.from({length: lastPage}, (_, i) => i + 1)
  } else if (currentPage <= 3) {
    pages = [1, 2, 3, 4, 5];
  } else if (currentPage >= 8) {
    pages = [6, 7, 8, 9, 10]
  } else {
    for (let i = -2; i < 3 || i + currentPage > lastPage; i++) {
      pages.push(i + currentPage);
    }
  }


  return (
    <div>
      <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)}>{"<"}</button>
      {pages.map((number, idx) => (
        <div
          className={number === currentPage ? "pageActive" : "page"}
          key={idx}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </div>
      ))}
      <button disabled={currentPage===lastPage} onClick={() => setCurrentPage(currentPage+1)}>{">"}</button>
    </div>
  );
}
