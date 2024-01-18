import { AddCircle, Minus } from 'iconsax-react'
import { rgba } from 'polished'
import React, { useState } from 'react'
import { BsFillChatDotsFill, BsThreeDots } from 'react-icons/bs'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { MdTask } from 'react-icons/md'
import styled from 'styled-components'

type propType = {
  data: any
}
function Collaborators({ data }: propType) {
  const [showMoreContent, setShowMoreContent] = useState(true)
  const [openPopup, setPopop] = useState(false)
  return (
    <CardSection >
      <div className='parent'>
        <div className='flex gap-4 items-center'>
          <img src={data?.img} alt='loding..' />
          <div>
            <p>
              {data?.title}
            </p>
            <span className='font-semibold'>{data?.desc}</span>
            <div className='flex gap-4 my-2'>
              <button className='font-semibold text-sm ' onClick={() => setShowMoreContent(s => !s)}>{showMoreContent ? <AddCircle size="15" variant="Bold" /> : <Minus size="15" />}{showMoreContent ? 'Show more info' : 'Less more info'} </button>
            </div>
          </div>
        </div>
        <div>
          <BsThreeDots className='menu_button' onClick={() => setPopop(true)} />
          {openPopup ? <>
            <div className='popup' onClick={()=>setPopop(false)}>
              <div className='flex items-center gap-2'>
              <div className='bg-gray-200 p-1 rounded-full'><MdTask/></div>
                <div className='text-sm'>Collaborators view</div>
              </div>
              <div className='flex items-center gap-2 my-2' >
              <div className='bg-gray-200 p-1 rounded-full'><BsFillChatDotsFill/></div>
                <div className='text-sm'>Message</div>
              </div>
              <div className='flex items-center gap-2 my-2' >
              <div className='bg-gray-200 p-1 rounded-full'><FaUserPlus/></div>
                <div className='text-sm'>Assign</div>
              </div>
            </div>
          </> : null}
        </div>
      </div>

      <div className='LessContant'>
        {showMoreContent ?
          <></>
          :
          <div onClick={() => setShowMoreContent(true)} className="">
            <div className='flex justify-between border_line'>
              <div className='font-bold px-5 pt-5'>The little black riding hood</div>
              <div className='flex gap-1 items-center px-5 color_icon'>
                <FaUserMinus />
                <div className='text-sm font-semibold'>Unassign</div>
              </div>
            </div>
            <div className='lg:flex gap-2 py-3 px-5'>
              <div className='flex gap-2'><span className='font-bold'>Status: </span><span> Approve</span></div>
              <div className='flex gap-2'><span className='font-bold'>Permission: </span><span>Full Collaborator</span></div>
              <div className='flex gap-2'><span className='font-bold'>Date join: </span><span> 10/25/2022</span></div>
              <div className='flex gap-2'><span className='font-bold'>Owner: </span><span>Adam</span></div>
            </div>
            <div className='flex justify-between border_line'>
              <div className='font-bold px-5 pt-4'>The quick brown fox jumps over the lazy dog</div>
              <div className='flex gap-1 items-center px-5 color_icon'>
                <FaUserMinus />
                <div className='text-sm font-semibold '>Unassign</div>
              </div>
            </div>
            <div className='lg:flex gap-2 py-2 px-5'>
              <div className='flex gap-2'><span className='font-bold'>Status: </span><span> Approve</span></div>
              <div className='flex gap-2'><span className='font-bold'>Permission: </span><span>Full Collaborator</span></div>
              <div className='flex gap-2'><span className='font-bold'>Date join: </span><span> 10/25/2022</span></div>
              <div className='flex gap-2'><span className='font-bold'>Owner: </span><span>Adam</span></div>
            </div>
          </div>
        }
      </div>
    </CardSection>

  )
}

export default Collaborators
const CardSection = styled.section`
  background: ${(props) => props.theme.pure};
  border-radius: 6px;
  border: 1px solid ${(props) => rgba(props.theme.base, 0.2)};
  .parent{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    position: relative;
  }
  img{
    border-radius: 10px
  }
  p{
    font-weight: 600;
    font-size: 16px;
  }
  span{
    color: ${(p) => rgba(p.theme.base, 0.6)};
  }
  .menu_button{
    font-size: 20px;
  }
  .color_icon{
    color: ${(p) => rgba(p.theme.base, 0.6)};
  }
  .active_button{
    border:1px solid${(props) => props.theme.base};
    color: ${(props) => props.theme.base};
    padding: 4px 20px;
    border-radius: 100px
  }
  button{
    display: flex;
    gap: 10px;
    align-items: center;
    color: ${(props) => props.theme.primary};
    border-radius: 5px;
    transform:all 1s;
  }
  .LessContant{
    background: ${(p) => rgba(p.theme.base, 0.06)}
  }
  .border_line{
    border-top: 1px solid ${(props) => rgba(props.theme.base, 0.1)};
 }
  .popup{
    background: ${(props) => props.theme.pure};
    box-shadow: 0px 0px 15px rgba(9, 42, 81, 0.02), 0px 2px 12px 4px rgba(9, 42, 81, 0.1);
    width: 250px;
    position: absolute;
    right: 10px;
    padding: 1rem;
    border-radius: 10px;
    top: 2.5rem;
  }
`
