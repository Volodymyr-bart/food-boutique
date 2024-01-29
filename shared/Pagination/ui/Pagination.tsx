import ArrowBack from "@/shared/Icons/ui/ArrowBack";
import ArrowNext from "@/shared/Icons/ui/ArrowNext";
import { useProducts } from "@/store";
import Image from "next/image";

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
      <ul className="flex flex-wrap justify-center gap-5 list-none">
        {page !== 1 && page !== 0 && (
          <button
            className={`w-10 h-10 flex justify-center items-center rounded-full bg-secondaryWhite 
            `}
            onClick={() => {
              changePage(page - 1);
            }}
          >
            <ArrowBack />
          </button>
        )}

        {createButtons(page, totalPages).map((number) => (
          <li
            className={`w-10 h-10 flex justify-center items-center rounded-full 
            ${
              number === page
                ? "bg-primaryGreen text-secondaryWhite"
                : "text-primaryGrey"
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

        {totalPages > page && (
          <button
            className={`w-10 h-10 flex justify-center items-center rounded-full bg-secondaryWhite 
            `}
            onClick={() => {
              changePage(page + 1);
            }}
          >
            <ArrowNext />
          </button>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
