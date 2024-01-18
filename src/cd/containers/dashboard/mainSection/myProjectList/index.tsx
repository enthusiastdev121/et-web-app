import Pagination from 'components/Pagination'
import { useAuth } from 'context/AuthContext'
import { formatCdProjectItem } from 'network/apiFormatter/jobs'
import { getProjectApi } from 'network/apis/cd/job'
import { rgba } from 'polished'
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiBriefcase, HiUsers } from 'react-icons/hi'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'
import { cdProjectItem, JobFilterTypeD } from 'types/cd/jobs'
import ListSkel from '../ListSkel'
import ProjectLists from './Item'

const LIMIT = 2
function ProjectCrat() {
  const [projectInput, setProjectInput] = useState<any>([]);
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState<cdProjectItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<any>(1);
  const [total, setTotal] = useState<number>(0); 
  const [activeTab, setActiveTab] = useState<JobFilterTypeD>("");
  const { token } = useAuth();
  

  const addProjectInput = () => {
    setProjectInput([...projectInput, inputValue]);
    setInputValue('');
  };
  const fetchList = useCallback(async () => {
    if (!token) {
      return;
    }
    try {
      setLoading(true);
      const res = await getProjectApi({
        page: page,
        perPage: LIMIT,
        status: activeTab,
        search:inputValue,
        token,
      });
      console.log("getProjectApi res", res);
      const data = res.data.map((i: any) => formatCdProjectItem(i));
      setList(data);
      setTotal(Number(res.total));
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [token, page, activeTab,inputValue]);
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const onPage = (e: any) => {
    setPage(e);
  };

  return (
    <div>
      <ProjectList className='' >
        <div className='flex gap-4 items-center'>
          <HiBriefcase className='briefcase' />
          <span>My project list</span>
          <button>{list.length}</button>
        </div>
        <div className='h6'> Manage my project </div>
      </ProjectList>
      <FilterButton>
        <div className="ml-3 sm:ml-0 flex gap-2 items-center text-sm md:text-base font-semibold mb-3">
          <Tab activeee={activeTab === ""} onClick={() => { setActiveTab("") }}>
            All
          </Tab>
          <Tab activeee={activeTab === "active"} onClick={() => { setActiveTab("active") }}>
            Active
          </Tab>
          <Tab activeee={activeTab === "draft"} onClick={() => { setActiveTab("draft")}}>
            Drafts
          </Tab>
          <Tab activeee={activeTab === "pending"} onClick={() => { setActiveTab("pending")}}>
            Expired
          </Tab>
        </div>
        <div className='relative search_icon'>
          <AiOutlineSearch className='absolute m-2 text-[24px]' onClick={addProjectInput} />
          <input type="text" placeholder="search project..." className='px-10 py-2 rounded-full border' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
      </FilterButton>

      {loading ? (
        <ListSkel />
      ) : (
        <div>
          {list.map((i, ind) => {
            return (
              <div key={ind} className="my-4">
                <ProjectLists data={i} List={list} />
              </div>)
          })}

          {/* {!loading && total > LIMIT && ( */}
            <div className="flex justify-center my-5">
              <Pagination current={page} onChange={(e) => onPage(e)} total={total} pageSize={LIMIT} />
            </div>
          {/* )} */}
        </div>)}
    </div>
  )
}





export default ProjectCrat


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

const Tab = tw.div<{ activeee: boolean; }>`
${(p) => (p.activeee ? "bg-primary text-white" : "text-gray-500 bg-gray-200")};
px-6 py-1 rounded-full mt-2
cursor-pointer
`;