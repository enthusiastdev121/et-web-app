import BackToTop from 'components/BackToTop'
import Layout from 'components/Layout'
import SideBar from 'containers/live/discoverItems/sideBar'
import React, { useState } from 'react'
import styled from 'styled-components'
import Items from './item'

const Item = ["Trending", "Nearby", "New", "Date", "Reset"]
export default function BrowseAll() {
  const [activeTab, setActiveTab] = useState(Item[0]);
  return (
    <Layout>
      <BackToTop />
      <Mainsection  >
        <div>
          <div className="main_div ">
            <div className="left md:block hidden ">
              <img src="/images/live/logo.png" alt="loding..logo" className='py-6 ' />
              <hr />
              <SideBar />
            </div>
            <div className="right ">
              <div className='md:block hidden'>
                <div className='py-6 font-bold'>Browse All</div>
                <div className='lg:flex justify-between items-center'>

                  <div className='lg:flex gap-4 '>
                    {Item.map((i: any) => {
                      return (
                        <button key={i} onClick={() => { setActiveTab(i) }} className={activeTab === i ? "btnClass clicked" : "btnClass"}>{i}</button>
                      )
                    })}
                  </div>
                  <select >
                    <option >Gender</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <Items />
            </div>
          </div>
        </div>
      </Mainsection>
    </Layout>
  )
}

const Mainsection = styled.div`
 background: ${(p: any) => p.theme.paper};
  &>div{
    margin:  auto;
    max-width: 1530px;
    width: 100%;
   
  }
  .main_div{
    display: flex;
    gap: 1rem;
    padding: 0px 20px;
    @media (max-width: 1200px) 
    { 
      display:flex;
      flex-direction:column;
      .left{
        width: 100%;
      }
      .right{
        width: 100%;
      }
    }
  }
  .left{
    width: 16%;
  }
  .right{
    width: 84%;
    .btnClass {
      background: ${(p: any) => p.theme.pure};
      color: ${(p: any) => p.theme.primary};
      border-radius:100px;
      padding: 7px 30px;
      margin: 10px 0px;
      @media (max-width:1200px){
        margin: 10px 5px;
      }
     }
     .btnClass.clicked {
       background: ${(p: any) => p.theme.primary};
       color: ${(p: any) => p.theme.pure};
     }


    select{
      padding: 5px 50px 5px 10px ;
      border-radius: 100px;
      color: ${(p: any) => p.theme.primary};
    
  }

  } `
