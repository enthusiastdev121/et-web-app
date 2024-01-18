import React, { useState } from 'react'
import styled from 'styled-components'
import PlanCard from './PlanCard';
import { PlanD, TablePlansD } from 'types/subscription';
import { IoCheckmark } from 'react-icons/io5';
import SuccessStoryCard from './SuccessStoryCard';
import TestimonialCard from './TestimonialCard';
import { useRouter } from 'next/router';
import CountdownPayment from 'containers/paymentInfo/CountdownPayment';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from 'components/Button';

export const PLAN_DETAILS: PlanD[] = [
  {
    id: 10,
    planDuration: "3 Year VIP",
    actualPrice: "$30",
    discountedPrice: "$16",
    totalAmount: "$575",
    discount: "46%",
    inputId: "firstPlan"
  },
  {
    id: 8,
    planDuration: "12 Month PRO",
    actualPrice: "$40",
    discountedPrice: "$24",
    totalAmount: '$288.73',
    discount: "40%",
    inputId: "secondPlan"
  },
  {
    id: 7,
    planDuration: "6 Month PRO",
    actualPrice: "$49",
    discountedPrice: "$31.45",
    totalAmount: '$188.73',
    discount: "35%",
    inputId: "thirdPlan"
  }
]

const TABLE_PLANS = [
  {
    label: "Training & education",
    icon: <IoCheckmark />,
    isIcon: true
  },
  {
    label: "Professional portfolio",
    icon: <IoCheckmark />,
    isIcon: true
  },
  {
    label: "Upload photos",
    icon: <IoCheckmark />,
    isIcon: true
  },
  {
    label: "Training & education",
    icon: <IoCheckmark />,
    isIcon: false
  },
  {
    label: "Submit to casting calls",
    icon: <IoCheckmark />,
    isIcon: false
  },
  {
    label: "Priority position in search",
    icon: <IoCheckmark />,
    isIcon: false
  },
  {
    label: "Exchange messages with casting directors",
    icon: <IoCheckmark />,
    isIcon: false
  },
  {
    label: "Upload additional photos",
    icon: <IoCheckmark />,
    isIcon: false
  },
  {
    label: "Photo Analyzer",
    icon: <IoCheckmark />,
    isIcon: false
  },
  {
    label: "Industry-approved comp card",
    icon: <IoCheckmark />,
    isIcon: false
  },
  {
    label: "Upload Youtube videos",
    icon: <IoCheckmark />,
    isIcon: false
  },
  {
    label: "Add skills",
    icon: <IoCheckmark />,
    isIcon: false
  },
  {
    label: "Personalized profile link",
    icon: <IoCheckmark />,
    isIcon: false
  },
]

export default function SubscriptionPlans() {
  const [planId, setPlanId] = useState<number>(7);
  const router = useRouter();

  function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div
        className={`z-50 ${className}`}
        style={{
          width: 40,
          height: 40,
          right: -45,
        }}
        onClick={onClick}>
        <IoIosArrowForward className='text-4xl h-full w-full text-gray-400' />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div
        className={`z-50 ${className}`}
        style={{
          width: 40,
          height: 40,
          left: -45,
        }}
        onClick={onClick}>
        <IoIosArrowBack className='text-4xl h-full w-full text-gray-400' />
      </div>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      },
    ]
  };

  return (
    <Root>
      <div className='bg-primary-clr md:pt-20 pt-10 md:pb-32 pb-20 px-5 flex flex-col justify-center items-center gap-3 text-white'>
        <h2 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-center'>Select A Plan To Subscribe</h2>
        <p>Get Unlimited access to casting calls</p>
        <div className='md:hidden block'>
          <CountdownPayment />
        </div>
      </div>
      {/* ============= plan details ========================== */}
      <div className='relative md:bottom-16 bottom-14'>
        {
          PLAN_DETAILS.map((planDetail: PlanD, ind: number) => {
            return <PlanCard planDetail={planDetail} planId={planId} setPlanId={setPlanId} key={ind} />
          })
        }
      </div>
      <div className='text-center'>
        <Button primary
          onClick={() => {
            router.push("/payment-info?plan=" + planId)
          }}>
          <span className="px-8 py-1">
            Continue
          </span>
        </Button>

      </div>
      <div className='my-10 text-center flex flex-col gap-4'>
        <p className=''>Standard full price is <strong>$35.99</strong> per 1 month</p>
        <p className=''><strong>Billing-Continuous Service — </strong> All Subscriptions automatically renew until cancelled.</p>
        <p className=''> <sup>1</sup> This is the percentage savings when compared to the full price 1-month plan with similar add-on features.</p>
      </div>
      {/* ============= table design ========================== */}
      <div className='table-header flex flex-col items-center'>
        <table className='max-w-3xl w-full overflow-x-auto whitespace-nowrap block'>
          <thead>
            <tr className=' bg-[#F8F9FB] h-12 border-b text-left'>
              <th className='md:px-10 px-5 py-3'>Experience Premium</th>
              <th className='md:px-10 px-5 py-3'>Members</th>
              <th className='md:px-10 px-5 py-3'>Subscribers</th>
            </tr>
          </thead>
          <tbody>

            {
              TABLE_PLANS.map(({ label, icon, isIcon }: TablePlansD, ind: number) => {
                return <tr key={ind} className='h-10'>
                  <td className='md:px-10 px-5 py-3 whitespace-normal' >{label}</td>
                  <td className={`md:px-10 px-5 py-3 ${isIcon ? "visible" : "invisible"}`} >{icon}</td>
                  <td className='md:px-10 px-5 py-3 txt-green'>{icon}</td>
                </tr>
              })
            }

          </tbody>
        </table>
      </div>

      {/* ============ card design ======================= */}

      <div className='h-40 bg-box relative md:mt-40 mt-32'>
        <SuccessStoryCard />
      </div>

      {/* .=============== about audition section ============== */}

      <div className='md:py-40 py-28 lg:max-w-7xl md:max-w-[50%] m-auto'>
        <div className='max-w-2xl md:text-left text-center'>
          <h2 className='md:text-4xl text-3xl font-semibold mb-5'>About Audition</h2>
          <p className='text-justify leading-7'>We're here to connect you to 1,000s of acting, modeling & other projects nationwide. With everything from beginner roles for movie extras to professional modeling photoshoots, ExploreTalent is the best place to start and continue your journey into the world of entertainment. <br />
            Get booked for movies/photoshoots, connect with casting professionals, stay up to date with the industry, read & watch lessons for performers, be part of a 500,000 people community, and so much more - all with ExploreTalent.</p>
        </div>
      </div>

      {/* ============ testimonial design ======================= */}

      <div className='h-40 bg-box relative md:mt-20 mt-16'>
        <TestimonialCard />
      </div>

      {/* ================== image slider ======================== */}

      <div className='mt-60 md:mb-28 mb-10'>
        <div className='max-w-7xl m-auto text-center md:w-[85%] w-[95%]'>
          <Slider {...settings}>
            <img className='m-auto' src="/images/subscription/1.png" alt="banner" />
            <img className='m-auto' src="/images/subscription/1.png" alt="banner" />
            <img className='m-auto' src="/images/subscription/1.png" alt="banner" />
          </Slider>
        </div>
      </div>

      {/* ================== Subscribe banner ===================== */}

      <div className='bg-box md:mt-20 mt-16 md:py-20 py-14'>
        <div className='max-w-screen-lg m-auto flex md:flex-row flex-col items-center text-white justify-between gap-5 w-[95%]'>
          <div className='md:text-left text-center'>
            <h3 className='text-3xl font-semibold mb-3'>Success is just one step away</h3>
            <p className='text-lg'>Join today and find the gig you've been dreaming of</p>
          </div>
          <div className='text-center'>
            <Button primary>
              <span className="px-6 py-1">
                Subscribe Now
              </span>
            </Button>
          </div>
        </div>
      </div>

    </Root>
  )
}

const Root = styled.div`
  .bg-box{
    /* background-color: ${p => p.theme.abs.gradColorBlue}; */
    background-color: #063B7A;
  }
  .slick-prev:before, .slick-next:before {
    display: none;
  }
    `;
