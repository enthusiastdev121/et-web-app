import { AddCircle, DocumentText1, Minus, Notepad2 } from 'iconsax-react'
import Link from 'next/link'
import { rgba } from 'polished'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { MdModeEditOutline } from 'react-icons/md'
import { RiDeleteBinFill } from 'react-icons/ri'
import styled from 'styled-components'
type propType = {
  data: any,
  List: any
}
function ProjectLists({ data, List }: propType) {
  const [showMoreContent, setShowMoreContent] = useState(true)
  const [openPopup, setPopop] = useState(false)
  const [storeData, setStoreData] = useState<any>(List)
  // const handleDelete = () => {
  //   setStoreData(storeData.filter((p: any) => p.casting_id !== data?.casting_id))
  //   setStoreData([...storeData])
  //   console.log(storeData,"jdshdydgndguweyhdjskdywdjks")
  // }

  // console.log("data",data);
  // console.log("list",storeData);




  return (
    <CardSection >
      <div className='parent'>
        <div className='sm:flex gap-4 items-center'>
          <img src="/cdimages/img1.png" alt='loding..' />
          <div>
            <div className='sm:flex gap-2 items-center'>
              <div className='p'>{data?.title}</div>
              <div>
                <button className='active_button'>Active</button>
              </div>
            </div>
            <span className='text-sm font-semibold'>2 New . cast 1 .audition. 9 total</span>

            <div className='sm:flex gap-2 my-2 '>
              <button className='font-semibold text-sm' onClick={() => setShowMoreContent(s => !s)}>{showMoreContent ? <AddCircle size="15" variant="Bold" /> : <Minus size="15" />}{showMoreContent ? 'Show more info' : 'Less more info'} </button>
              <hr className='hr_line' />
              <Link href='/cd/application-manager'>
                <a>
                  <button className='font-semibold text-sm'><DocumentText1 size="15" variant="Bold" /> Application manager</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <BsThreeDots className='menu_button' onClick={() => setPopop(true)} />
          {openPopup ? <>
            <div className='popup' onClick={() => setPopop(false)}>
              <div className='flex items-center gap-2 cursor-pointer'>
                <button className='edit_button'><MdModeEditOutline /></button>
                <div className='text-sm'>Edit details</div>
              </div>
              <div className='flex items-center gap-2 my-2 cursor-pointer' >
                <button className='delete_button'><RiDeleteBinFill /></button>
                <div className='text-sm'
                // onClick={ handleDelete }
                >Delete project</div>
              </div>
            </div>
          </> : null}
        </div>
      </div>
      <div className='LessContant'>
        {showMoreContent ?
          <></>
          :
          <div onClick={() => setShowMoreContent(true)}>
            <div className='md:flex gap-8 py-4  px-5 border_line'>
              <div className='flex gap-2'><div className='font-bold'>Status: </div><div> Approved</div></div>
              <div className='flex gap-2'><div className='font-bold'>Created on: </div><div> {data?.date_created}</div></div>
              <div className='flex gap-2'><div className='font-bold'>Expires on: </div><div> {data?.asap}</div></div>
            </div>
            <div className='font-bold px-5' >Teens</div>
            <div className='pt-2 pb-4 flex justify-between  px-5'>
              <span className='flex items-center gap-1 font-semibold'>35 <span className='text-sm'>New</span> . 1,230 <span className='text-sm'>total</span></span>
              <Link href='/cd/application-manager'>
                <a>
                  <button className='font-semibold text-sm'><Notepad2 size="20" variant="Bold" /> Application manager</button>
                </a>
              </Link>
            </div>
            <div className='border_line '>
              <div className='font-bold  px-5 py-2'>Teens</div>
              <div className='pt-2 pb-4 flex justify-between  px-5'>
                <span className='flex items-center gap-1 font-semibold'>35<span className='text-sm'>New</span> . 1,230 <span className='text-sm'>total</span></span>
                <Link href='/cd/application-manager'>
                  <a>
                    <button className='font-semibold text-sm'><Notepad2 size="20" variant="Bold" /> Application manager</button>
                  </a>
                </Link>

              </div>
            </div>

          </div>
        }
      </div>
    </CardSection>
  )
}

export default ProjectLists

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
  @media (max-width:499px){
    .active_button{
    display: none;
  }
  }
  .hr_line{
    transform: rotate(90deg);
    width:20px;
    margin-top: 10px;
  }
  img{
    border-radius: 10px
  }
  .p{
    font-weight: 600;
    font-size: 16px;
  }
  span{
    color: ${(p) => rgba(p.theme.base, 0.6)};
  }
  .menu_button{
    font-size: 20px;
    position: relative;
  }
  .active_button{
    border:1px solid${(props) => props.theme.base};
    color: ${(props) => props.theme.base};
    padding: 0px 10px;
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
  .edit_button{
    background:${(p) => rgba(p.theme.base, 0.1)};
    color:unset;
    padding: 5px;
    border-radius: 100px;
  }
  .delete_button{
    background:${(p) => rgba(p.theme.base, 0.1)};
    color:unset;
    padding: 5px;
    border-radius:100px;
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
    top: 4rem;
  }
  
`