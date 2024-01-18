import { useState } from "react";

import { PrimaryBtnLightRounded } from "@/styles/Btn.styled";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PageNumberContainer } from "containers/contests/ContestantDetail/TalentSearchList.styled";

const SearchPagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  setList,
  setLoading,
  onFind,
}: any) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  const [currentPage, setCurrentPage] = useState(1);

  function handlePageClick({ selected: selectedPage }: any) {
    setCurrentPage(selectedPage + 1);
    setList([]);
    setLoading(true);
    paginate(selectedPage + 1);
    onFind(selectedPage + 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <PageNumberContainer className="mx-auto">
      <ReactPaginate
        className="mx-auto flex flex-col md:flex-row justify-center items-center gap-5"
        breakLabel="..."
        nextLabel={
          //   <PrimaryBtnLightRounded className="btn ml-5">
          <div className="font-semibold">Next&nbsp;&rarr;</div>
          /* </PrimaryBtnLightRounded> */
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageNumbers.length}
        previousLabel={
          //   <PrimaryBtnLightRounded className="btn ml-5">
          <div className="font-semibold"> &larr;&nbsp;Prev</div>

          //   </PrimaryBtnLightRounded>
        }
      />
    </PageNumberContainer>
  );
};

export default SearchPagination;
