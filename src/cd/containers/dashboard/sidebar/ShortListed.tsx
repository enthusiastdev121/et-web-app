import { UserCirlceAdd } from 'iconsax-react'
import { rgba } from 'polished'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { RiArrowUpDownFill } from 'react-icons/ri'
import styled from 'styled-components'
import ListSkel from '../mainSection/ListSkel'
const Data = [
  {
    img: '/cdimages/img.png',
    title: "Martha Agatha",
    city: "Beverly Hills,CA",
    age: "Age:18-32"
  },
  {
    img: '/cdimages/img.png',
    title: "Martha Agatha",
    city: "Beverly Hills,CA",
    age: "Age:18-32"
  },
  {
    img: '/cdimages/img.png',
    title: "Martha Agatha",
    city: "Beverly Hills,CA",
    age: "Age:18-32"
  },

]

function ShortListed() {
  const [loading, setLoading] = useState(true);
  
  setTimeout(() => {
    setLoading(false)
  }, 3000)
  return (
    <ShortListedSection>
      <div className='flex justify-between items-center p-5'>
        <div className='flex gap-1 items-center'>
        <UserCirlceAdd size="20"  variant="Bold"/>
          <div className='font-semibold'>Shortlists</div>
        </div>
        <div className='flex gap items-center icon_text_color'>
          <span className='text-sm '>Sort by</span>
          <RiArrowUpDownFill />
        </div>
      </div>
      <hr />
      <div className='px-5 py-2'>
        <div className='flex gap-2 items-center font-semibold'>
          <IoIosArrowDown />
          <div>Little Hannah</div>
        </div>
        <div>for the little black riding hood</div>
      </div>
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
                    <p className='font-bold'>{i.title}</p>
                    <div className='text-sm'>{i.city}</div>
                    <div className='text-sm'>{i.age}</div>
                  </div>
                </div>
              <hr />
            </div>
          )
        })}
        </>}
      </div>
      <div className='p-3'><button >View all</button> </div>
    </ShortListedSection>
  )
}

export default ShortListed

const ShortListedSection = styled.section`
  background: ${(props) => props.theme.pure};
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  button{
    background: ${(props) => props.theme.paper};
    border-radius: 8px;
    text-align: center;
    width: 100%;
    padding: 10px;
  }
  .icon_text_color{
    color: ${(props) => rgba(props.theme.base,0.6)};
  }
  `
