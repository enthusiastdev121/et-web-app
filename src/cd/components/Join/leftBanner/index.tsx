import React from 'react'
import styled from 'styled-components'
export default function LeftBanner() {
  return (
    <BannerSection>
      <div className='banner_bg'>
        <img src='/svg/explore-talent.svg' />
        <span className='blank_space'></span>
        <p>&quot;I&apos;ve used ExploreTalent on a number of our productions over the past eight years and have had a great experience. There&apos;s a wide range of talent available, and the portal makes posting jobs and then reviewing responses, very easy.&quot;</p>
        <h1>
          <b> Harrington D. Lincoln</b><br />
          Indie Film Director & Producer
        </h1>
      </div>
      <div className='companies_section'>
        <hr />
        <p>Companies who cast with us</p>
        <div className='companies_logo'>
          <img src='/images/disney-1.png' />
          <img src='/images/endemol-1.png' />
          <img src='/images/mtv-1.png' />
          <img src='/images/xfactor.png' />
          <img src='/images/itv.png' />
          <img src='/images/thevoice.png' />
          <img src='/images/topmodel.png' />
          <img src='/images/elitr.png' />
        </div>
      </div>
    </BannerSection >
  )
}
const BannerSection = styled.section`
box-shadow: 0px -3px 20px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  .banner_bg{
    background-image: url(/images/Harrington-D.png);
    background-position: center;
    padding: 30px 50px 10px 50px;
    background-size: cover;
    @media (max-width:1200px){
      padding:10px;
    }
    .blank_space{
      height: 300px;
      display: block;
      @media (max-width:1200px){
        height: 186px;
      }
    }
    p{
      font-weight: 500;
      font-size: 16px;
    }
    h1{
      margin-top: 30px;
    }
  }
  .companies_section{
    padding: 30px;
    @media (max-width:1200px){
      padding:10px;
    }
    hr{
      border: 1px solid #a1a1aa73;
    }
    p{
      font-weight: 600;
      font-size: 20px;
      margin-top: 18px;
      color: #3C3C4399;
    }
    .companies_logo {
        display: grid;
        grid-template-columns:repeat(4 , 1fr);
        margin-top: 20px;
        gap: 24px;
        .companies_logo img {
            width: 60px;
        }
    }
  }
`