import { useState } from "react";

import { PrimaryBtnLightRounded } from "@/styles/Btn.styled";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  setList,
  setLoading,
}: any) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  const [currentPage, setCurrentPage] = useState(1);

  function handlePageClick({ selected: selectedPage }: any) {
    setCurrentPage(selectedPage + 1);
    console.log("selected page is: ", selectedPage);
    setList([]);
    setLoading(true);
    paginate(selectedPage + 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <PageNumberContainer className="mx-auto">
      <ReactPaginate
        className="mx-auto flex justify-center items-center mb-10 gap-5"
        breakLabel="..."
        nextLabel={
          <PrimaryBtnLightRounded className="btn ml-2 text-sm">
            Next&nbsp;&rarr;
          </PrimaryBtnLightRounded>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageNumbers.length}
        previousLabel={
          <PrimaryBtnLightRounded className="btn ml-2 text-sm">
            &larr;&nbsp;Prev
          </PrimaryBtnLightRounded>
        }
      />
    </PageNumberContainer>
  );
};

export default Pagination;

const PageNumberContainer = styled.div`
  .selected {
    background-color: ${(props) => props.theme.abs.lightBlue};
    border-radius: 100%;
    border: 0;
    padding: 0.5em 1em;
    color: ${(props) => props.theme.primary};
    width: fit-content;
    margin: 0;
  }
`;
