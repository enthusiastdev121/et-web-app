import { Edit } from 'iconsax-react';
import { rgba } from 'polished';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ListSkel from '../mainSection/ListSkel';
const Data = [
  {
    img: '/cdimages/img.png',
    title: "Martha Agatha",
    city: "Beverly Hills,CA",
    age: "Age:18-32",
    desc: "This talent has the potential to become our next main role of little black riding hood."
  },
  {
    img: '/cdimages/img.png',
    title: "Martha Agatha",
    city: "Beverly Hills,CA",
    age: "Age:18-32",
    desc: "This person is good to become the monster."
  },
  {
    img: '/cdimages/img.png',
    title: "Martha Agatha",
    city: "Beverly Hills,CA",
    age: "Age:18-32",
    desc: "I like this girl to become the fox."
  },
]
function RecentNotes() {
  const [loading, setLoading] = useState(true);
  
  // useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  // },[loading])

  return (
    <RecentNotesSection>
      <div className='flex gap-3 items-center p-5'>
        <div className='flex gap-1 items-center'>
          <Edit size="20" variant="Bold" />
          <div>Recent Notes</div>
        </div>
        <div className='recent_button'>{Data.length}</div>
      </div>
      <hr />
      <div>
        {
        loading ? <ListSkel />:
        <>{Data.map((i, ind) => {
          return (
            <div key={ind} className="my-4">
              <div className='flex gap-4 items-center px-5 '>
                <div>
                  <img src={i.img} alt='loding..' className='rounded ' />
                </div>
                <div>
                  <p className='font-bold'>{i.title}</p>
                  <div className='text-sm'>{i.city}</div>
                  <div className='text-sm'>{i.age}</div>
                </div>
              </div>
              <div className='px-5 py-2'>{i.desc}</div>
              <hr />
            </div>
          )
        })}</> }

      </div>
      <div className='p-3'><button>View all</button> </div>


    </RecentNotesSection>
  )
}

export default RecentNotes

const RecentNotesSection = styled.section`
  background: ${(props) => props.theme.pure};
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.01);
  border-radius: 8px;
  margin: 2rem 0px;
  button{
    background: ${(props) => props.theme.paper};
    border-radius: 8px;
    text-align: center;
    width: 100%;
    padding: 10px;
  }
  .recent_button{
    color: ${(p) => rgba(p.theme.base, 0.7)};
    background: ${(p) => rgba(p.theme.base, 0.1)};
    border-radius: 100px;
    padding: 5px 13px;
    font-weight:bold ;
   
  }
  
  `
