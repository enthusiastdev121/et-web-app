import { Eye } from 'iconsax-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import ListSkel from '../mainSection/ListSkel';
const Data = [
  {
    img: '/cdimages/img.png',
    title: "Martha Agatha",
    view:"viewed from",
    desc:"The little black riding hood"
  },
  {
    img: '/cdimages/img.png',
    title: "Martha Agatha",
    view:"viewed from",
    desc:"The little black riding hood"
  },
  {
    img: '/cdimages/img.png',
    title: "Martha Agatha",
    view:"viewed from",
    desc:"The little black riding hood"
  },

]

function ViewAppliction() {
  const [loading, setLoading] = useState(true);
  
  setTimeout(() => {
    setLoading(false)
  }, 3000)
  return (
    <ViewApplictionSection>
      <div className='flex justify-between items-center p-5'>
        <div className='flex gap-1 items-center'>
        <Eye size="20" variant="Bold"/>
          <div className='font-semibold'>Recently viewed applications</div>
        </div>
      </div>
      <hr />
      <div>
      {loading ? <ListSkel />:<>
      {Data.map((i, ind) => { 
          return (
            <div key={ind} className="my-4">
              <div className='flex gap-4 items-center px-5 my-2'>
                <div>
                  <img src={i.img} alt='loding..' className='rounded ' />
                </div>
                <div>
                  <p className='font-semibold'>{i.title}</p>
                  <div className='text-sm'>{i.view}</div>
                  <div className='font-semibold'>{i.desc}</div>
                </div>
              </div>
              <hr/>
            </div>
            )
        })}
        </>}
      </div>
      <div className='p-3'><button>View all</button> </div>


    </ViewApplictionSection>
  )
}

export default ViewAppliction

const ViewApplictionSection = styled.section`
  background: ${(p) => p.theme.pure};
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  button{
    background: ${(p) => p.theme.paper};
    border-radius: 8px;
    text-align: center;
    width: 100%;
    padding: 10px;
  }
  `
