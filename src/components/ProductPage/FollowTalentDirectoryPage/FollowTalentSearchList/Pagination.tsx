// import { useState } from "react";

// import { PrimaryBtnLightRounded } from "@/styles/Btn.styled";
// import { PageNumberContainer } from "./TalentSearchList.styled";

// const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
//   const pageNumbers = [];
//   debugger;

//   for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i + 1);
//   }

//   const [currentPage, setCurrentPage] = useState(1);

//   return (
//     <nav>
//       <PageNumberContainer className="mx-auto flex flex-col md:flex-row justify-center items-center mb-10 gap-5">
//         <ul className="flex justify-center items-center overflow-y-scroll no-scroll py-2 w-80v md:w-fit">
//           {pageNumbers.map((number) => (
//             <li key={number} className="cursor-pointer">
//               <a
//                 onClick={() => {
//                   setCurrentPage(number);
//                   paginate(number);
//                   document.body.scrollTop = 0;
//                   document.documentElement.scrollTop = 0;
//                 }}
//               >
//                 <input
//                   type="radio"
//                   id={number.toString()}
//                   name="page-no"
//                   className="opacity-0"
//                 />
//                 <label
//                   htmlFor={number.toString()}
//                   className={currentPage === number ? "active" : "label-check"}
//                 >
//                   {number}
//                 </label>
//               </a>
//             </li>
//           ))}
//         </ul>
//         <PrimaryBtnLightRounded
//           className="btn ml-5"
//           onClick={() => {
//             setCurrentPage(currentPage + 1);
//             document.body.scrollTop = 0;
//             document.documentElement.scrollTop = 0;
//             if (currentPage < pageNumbers.length) {
//               paginate((currentPage: any) => currentPage + 1);
//             }
//           }}
//         >
//           Next&nbsp;&rarr;
//         </PrimaryBtnLightRounded>
//       </PageNumberContainer>
//     </nav>
//   );
// };

// export default Pagination;

// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { PageNumberContainer } from './FollowTalentSearchList.styled';


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
