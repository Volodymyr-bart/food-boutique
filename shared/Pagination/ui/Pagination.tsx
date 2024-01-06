"use client";
import { useProducts } from "@/store";

const Pagination = () => {
  const { totalPages, page, changePage } = useProducts((state) => ({
    totalPages: state.totalPages,
    page: state.page,
    changePage: state.changePage,
  }));

  const createButtons = (page: number, totalPages: number) => {
    const pages = [];

    if (page > 1) {
      pages.push(1);
      if (page > 2) {
        pages.push(page - 1);
      }
    }
    pages.push(page);
    if (page < totalPages) {
      if (page < totalPages - 1) {
        pages.push(page + 1);
      }
      pages.push(totalPages);
    }
    for (let i = page - 2; i <= page + 2; i++) {
      if (i > 1 && i < totalPages && !pages.includes(i)) {
        pages.push(i);
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  };

  return (
    <div className="mx-auto my-10">
      <ul className="flex justify-center gap-5 list-none">
        {page !== 1 && (
          <button
            className={`w-10 h-10 flex justify-center items-center rounded-full bg-primaryGreen text-primaryWhite
            `}
            onClick={() => {
              changePage(page - 1);
            }}
          >
            Prev
          </button>
        )}

        {createButtons(page, totalPages).map((number) => (
          <li
            className={`w-10 h-10 flex justify-center items-center rounded-full 
            ${
              number === page
                ? "bg-primaryGreen text-primaryBlack"
                : "bg-primaryGreen text-primaryWhite"
            }`}
            key={number}
          >
            <button
              onClick={() => {
                changePage(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}

        {page !== totalPages && (
          <button
            className={`w-10 h-10 flex justify-center items-center rounded-full bg-primaryGreen text-primaryWhite
            `}
            onClick={() => {
              changePage(page + 1);
            }}
          >
            Next
          </button>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
