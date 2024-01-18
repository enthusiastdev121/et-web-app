import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import TypeAnimation from "react-type-animation";
import PopularQuestion from "containers/help-support/popular_question";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import Head from "next/head";
import Script from "next/script";
const Index = () => {
  const [activeAnimate, setActiveAnimate] = useState(true);

  const answer_data = [
    {
      title: "User name and password",
      body: `
  Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially
  unchanged. It was popularised in the 1960s with the
  release of Letraset sheets containing Lorem Ipsum
  passages, and more recentl,
  `,
    },
    {
      title: "Photo uplad",
      body: `
  Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially
  unchanged. It was popularised in the 1960s with the
  release of Letraset sheets containing Lorem Ipsum
  passages, and more recentl,
  `,
    },
    {
      title: "How to view my submissions",
      body: `
  is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially
  unchanged. It was popularised in the 1960s with the
  release of Letraset sheets containing Lorem Ipsum
  passages, and more recentl,
  `,
    },
  ];

  return (
    <>
      <Script id="liveAgent" type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
       
          (function(d, src, c) {
            var div = document.getElementById("helpLiveAgent");

            
              var t = d.scripts[d.scripts.length - 1],
                  s = d.createElement('script');
              s.id = 'la_x2s6df8d';
              s.async = true;
              s.src = src;
              s.onload = s.onreadystatechange = function() {
                  var rs = this.readyState;
                  if (rs && (rs != 'complete') && (rs != 'loaded')) {
                      return;
                  }
                  c(this);
              };

              // console.log("TTT",t.nextSibling,s);

              t.parentElement.insertBefore(s, t.nextSibling);


          })(document,
              '//help.exploretalent.com/scripts/track.js',
              function(e) {
                  LiveAgent.createForm('288e9c43', e);
              });

   

          `}} />



      <Header />
      <Head>
        <style>
          {`
            #liveAgent + iframe {
              margin: 0 auto;
            }
          `}
        </style>
      </Head>
      {/* <Footer whitelabel={''} /> */}
    </>
  );
};



export default Index;
const MainContainer = styled.div`
  background-color: ${p => p.theme.paper};
  color: ${p => p.theme.base};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom:5rem;
`;
const Container = styled.div`
  background: linear-gradient(
    92.79deg,
    rgba(157, 205, 255, 0.8) 0.95%,
    rgba(42, 111, 183, 0.8) 97.04%
  );
`;
const Box = tw.div`
 w-full lg:w-8/12 xl:6/12 mx-auto  pt-14  relative z-0 hidden md:flex 
`;
const MobileBox = tw.div`
 w-full lg:w-6/12  mx-auto  pt-14  relative z-0 md:hidden
`;
const MobileAnimation = styled.div`
display: flex;
width:100%;
justify-content: center;

`
const SeachInput = tw.input`
shadow border rounded-3xl  py-2 px-10 text-gray-700 mb-3 w-full md:w-96 focus:none focus:ring focus:ring-violet-300
`;

const Content = tw.div`
w-full lg:w-8/12 mx-auto items-center bg-transparent z-30 -mt-28 md:-mt-10  px-0 md:px-5 
`;

const ItemOne = tw.div`
flex flex-col gap-3 py-3 w-full px-4 xl:px-7 xl:py-7 
`;
const ITemTwo = tw.div`
flex flex-col gap-3 py-3 border-t md:border-t-0 md:border-l w-full px-4 xl:px-7 xl:py-7
`;
const ItemThree = tw.div`
flex flex-col gap-3    md:border-t-0  w-full bg-white
`;
const ItemFour = tw.div`
flex flex-col gap-3    md:border-t-0  w-full bg-white
`;
const Text = tw.div`
font-bold xl:text-xl
`;
const Question = styled.div``;

const AnimateImage = styled.div`
  animation: bounce 1s infinite;
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-8%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;
