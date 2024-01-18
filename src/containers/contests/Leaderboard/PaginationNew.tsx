import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import { PageNumberContainer } from "./Pagination.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const PaginationNew = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className }: any) => {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PageNumberContainer className="mx-auto flex flex-col md:flex-row justify-center items-center pb-5 pt-5 mt-10 gap-5">
      <ul>
        <li
          className={classnames("previous", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <span className="flex justify-center items-center">
            <FaArrowLeft style={{ color: "#2C8BED" }} className="mr-2" /> <span className="md:block hidden">Prev</span>
          </span>
        </li>
        {paginationRange.map((pageNumber: any) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li
              key={pageNumber}
              className={classnames({
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classnames("next", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <span className="flex justify-center items-center">
            {" "}
            <span className="md:block hidden">Next</span> <FaArrowRight style={{ color: "#2C8BED" }} className="ml-2" />
          </span>
        </li>
      </ul>
    </PageNumberContainer>
  );
};

export default PaginationNew;
