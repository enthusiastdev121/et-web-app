import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';


const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalPosts / postsPerPage));
  }, [totalPosts, postsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * postsPerPage) % totalPosts;
    setItemOffset(newOffset);
    paginate((newOffset + postsPerPage) / postsPerPage)
  };

  return (
    <>
      <PageNumberContainer className="mx-auto flex flex-col md:flex-row justify-center items-center mb-10 gap-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<span><span>Next</span> <FaArrowRight className="txt-primary ml-2" /></span>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel={<span><FaArrowLeft className="txt-primary mr-2" /> <span>Prev</span></span>}
        />
      </PageNumberContainer>
    </>
  );
}

export default Pagination

export const PageNumberContainer = styled.div`
  margin-top: 107px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }

  ul {
    display: flex;
  }

  li {
    height: 44px;
    line-height: 44px;
    width: 44px;
    text-align: center;
    margin-right: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    @media (max-width: 767px) {
      height: 30px;
      line-height: 30px;
      width: 30px;
      font-size: 12px;
      margin-right: 4px;
    }
  }

  .selected {
    padding: 0;
    margin: 0;
    background: #f0f8ff;
    color: #000000;
  }

  .previous {
    background: #f0f8ff;
    width: 116px;
    color: ${(p) => p.theme.primary};
    border-radius: 100px;
    @media (max-width: 767px) {
      width: 30px;
    }

    span {
      span {
        @media (max-width: 767px) {
          display: none !important;
        }
      }
    }
  }

  .next {
    background: #f0f8ff;
    width: 116px;
    margin-right: 0;
    color: ${(p) => p.theme.primary};
    border-radius: 100px;
    @media (max-width: 767px) {
      width: 30px;
    }
    span {
      span {
        @media (max-width: 767px) {
          display: none !important;
        }
      }
    }
  }

  .next a span,
  .previous a span {
    display: flex;
    align-items: center;
  }

  .label-check {
    padding: 1em;
    cursor: pointer;
  }

  .input-check:checked + .label-check {
    background-color: ${(props) => props.theme.abs.lightBlue};
    border-radius: 100%;
    border: 0;
    padding: 0.5em 1em;
  }

  .active {
    background-color: ${(props) => props.theme.abs.lightBlue};
    border-radius: 100%;
    border: 0;
    padding: 0.5em 1em;
  }
`;