import { H1 } from '@/styles/Typography.styled';
import AddSpotlightModal from 'containers/spotlights/AddSpotlightModal';
import Link from 'next/link';
import React, { useState } from 'react'
import { MdOutlineAddCircle } from 'react-icons/md';
import styled from 'styled-components';

const TopSection = () => {
  const [addSpotlightDialogue, setAddSpotlightDialogue] = useState(false)
  return (
        <Root>
        <div className='left'>
            <main className="lg:flex flex-col" style={{ maxWidth: "1530px", margin: "0 auto" }}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                            <H1>All Spotlights</H1>
                            <button className="block md:hidden add-btn">
                                <MdOutlineAddCircle className="txt-primary text-xl inline-block" /> 
                                {/* <span onClick={() => setAddSpotlightDialogue(true)}> Add New spotlight</span> */}
                                <Link href="/spotlights/add-spotlight">
                                  <a> Add New Spotlight</a>
                                </Link>
                            </button>
                    </div>
                 <h2 className="md:text-left text-center">Collection of spotlight stories from all talents</h2>
            </main>
            </div>

            {/* <AddSpotlightModal open={addSpotlightDialogue} onClose={() => setAddSpotlightDialogue(false)}></AddSpotlightModal> */}
        </Root>
  )
}

const Root = styled.div`
    /* position: absolute;
    max-width: 1530px;
    width: 80vw; */
    padding: 20px 0;
    margin: 0 auto 0px auto;
    position: relative;
    z-index: 1;

  /* .left {
    @media (min-width: 1050px) {
      width: 66.66%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 30%;
    }
  } */

  .add-btn {
    /* width: 232px; */
    width: auto;
    /* height: 40px; */
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    background: #e4effa;
    border-radius: 200px;
   
    a {
      margin-left: 7px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: ${p => p.theme.primary};
    }
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    margin-top: 20px;
    font-size: 18px;
    line-height: 22px;
    color: ${p => p.theme.base};
  }
 
`;


export default TopSection




// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import styled from 'styled-components'

// export const TopSection = () => {
//     return (
//         <Root>
//             <h1 className="heading">All Spotlights</h1>
//             <div className='flex justify-between my-2'>
//                 <p className='inner-content'>Collection of spotlight stories from all talents</p>
//                 <div className='flex justify-center items-center gap-2 cursor-pointer'>
//                     <span className='inner-content' style={{ color: '#0070F4' }}>Play all </span>
//                     <Image
//                         src="/svg/play.svg"
//                         height={19}
//                         width={17}
//                         alt="play"
//                         priority
//                     />
//                 </div>
//             </div>
//             <Nav>
//                 <Link href="/all">
//                     <a className='link active'>All <span style={{ opacity: 0.6 }}>350</span></a>
//                 </Link>
//                 <Link href="/new">
//                     <a className='link'>New <span style={{ opacity: 0.6 }}>263</span></a>
//                 </Link>
//                 <Link href="/connections">
//                     <a className='link'>Connections <span style={{ opacity: 0.6 }}>65</span></a>
//                 </Link>
//                 <Link href="/following">
//                     <a className='link'>Folowing <span style={{ opacity: 0.6 }}>65</span></a>
//                 </Link>
//             </Nav>
//         </Root>
//     )
// }

// const Root = styled.div`
//   max-width: 1530px;
//   width: 80vw;
//   margin: 30px auto 100px auto;
//   position: relative;
//   z-index: 20;
  
//   .heading {
//     font-weight: 600;
//     font-size: 32px;
//     line-height: 39px;
//     color: #191919;
//   }

//   .inner-content {
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 22px;
//     color: #191919;
//   }
//  `

// const Nav = styled.div`
//     display: flex;
//     justify-content: space-between;
//     max-width: 400px;

//     .link {
//         font-weight: 500;
//         font-size: 14px;
//         line-height: 17px;
//         color: #191919;
//         padding: 12px;
//         &.active {
//             background-color: #0070F4;
//             border-radius: 100px;
//             color: #fff;
//             padding: 12px;
//         }
//     }
// `