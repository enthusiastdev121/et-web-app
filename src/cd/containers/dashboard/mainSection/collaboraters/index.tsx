
import Pagination from 'components/Pagination'
import { rgba } from 'polished'
import React, {  useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import {  HiUsers } from 'react-icons/hi'
import styled from 'styled-components'
import InviteModal from '../../inviteModal/inviteModal'
import ListSkel from '../ListSkel'
import Collaborators from './Item'
const COLLABORATOR = ['Recently invited', 'Active project', 'All'];
const Data2 = [
  {
    img: '/cdimages/img1.png',
    title: "Raphael Chapman",
    desc: "Back to the past and future Project",
    check: false
  },
  {
    img: '/cdimages/img1.png',
    title: "Raphael Chapman",
    desc: "Back to the past and future Project",
    check: false
  },
  {
    img: '/cdimages/img1.png',
    title: "Raphael Chapman",
    desc: "Back to the past and future Project",
    check: false
  },
  {
    img: '/cdimages/img1.png',
    title: "Raphael Chapman",
    desc: "Back to the past and future Project",
    check: false
  },

]

const LIMIT = 4
function CollaboratorsCrad() {
  const [collaboratorTab, setCollaboratorTab] = useState(COLLABORATOR[0]);
  const [collaboratorInput, setCollaboratorInput] = useState<any>([]);
  const [inputValue2, setInputValue2] = useState('');
  const [openPopup, setPopop] = useState(false)
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<any>(1);
  const [total, setTotal] = useState<number>(0);
  const addCollaboratorInput = () => {
    setCollaboratorInput([...collaboratorInput, inputValue2]);
    setInputValue2('');
  };
  
  const onPage = (e: any) => {
    setPage(e);
  };
  return (
    <div>
      <hr className='my-6' />
      <ProjectList >
        <div className='flex gap-4 items-center'>
          <HiUsers className='briefcase' />
          <span>Collaborators</span>
          <button>{Data2.length}</button>
        </div>
        <div className='flex gap-4'>
          <div className='h6'> Manage collaborators
          </div>

          <div className='h6' onClick={() => setPopop(true)}>Invite +</div>
          <InviteModal open={openPopup} setPopop={() => setPopop(false)} />
        </div>
      </ProjectList>
      <FilterButton>
        <div className="tab_section ">
          {COLLABORATOR.map(type => (
            <button key={type} className={collaboratorTab === type ? 'active' : ''} onClick={() => setCollaboratorTab(type)}>
              {type}
            </button>
          ))}
        </div>
        <div className='relative search_icon'>
          <AiOutlineSearch className='absolute m-2 text-[24px]' onClick={addCollaboratorInput} />
          <input type="text" placeholder="search project..." className='px-10 py-2 rounded-full border' value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
        </div>
      </FilterButton>
      {loading ? (
        <ListSkel />
      ) : (
        <div>
          {Data2.map((i, ind) => {
            return (
              <div key={ind} className="my-4">
             <Collaborators data={i} />
              </div>)
          })}

          {/* {!loading && total > LIMIT && ( */}
            <div className="flex justify-center my-5">
              <Pagination current={page} onChange={(e) => onPage(e)} total={total} pageSize={LIMIT} />
            </div>
          {/* )} */}
        </div>)}
      {/* {Data2.map((i, ind) => {
        return (
          <div key={ind} className="my-4" >
            <Collaborators data={i} />
          </div>)
      })} */}
    </div>
  )
}

export default CollaboratorsCrad


const FilterButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width:499px){
    display: flex;
    flex-direction: column-reverse;
    align-items: unset;
    margin-top: 1rem;
    .tab_section{
      margin-top: 1rem;
    }
  }
  .search_icon{
    color: ${(p) => rgba(p.theme.base, 0.5)};
    input{
    width: 100%;
    background: ${(p) => rgba(p.theme.base, 0.02)}
  }
  }

  .tab_section{
      button{
        
        color: ${(p) => rgba(p.theme.base, 0.5)};
        background: ${(p) => rgba(p.theme.base, 0.05)};
          border-radius: 100px;
          padding: 6px 20px;
          font-weight: 600;
          margin: 5px 10px;
          &.active{
            background: ${(p) => p.theme.primary};
            color: ${(p) => p.theme.pure};
          }
      }
  }

`;
const ProjectList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width:499px){
    display: flex;
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
    .h6{
      margin-top: 1rem;
    }
  }
  .h6{
    color:rgba(60, 60, 67, 0.7);
    font-weight: 600;
  }
  .briefcase{
    font-size: 25px;
  }
  span{
    font-weight: bold;
  }
  button{
    color: ${(p) => rgba(p.theme.base, 0.7)};
    background: ${(p) => rgba(p.theme.base, 0.1)};
    border-radius: 100px;
    padding: 5px 13px;
    font-weight:bold ;
  }
`

