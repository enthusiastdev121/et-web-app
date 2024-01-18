import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import CollaboratorsCrad from './mainSection/collaboraters'
import ProjectCrat from './mainSection/myProjectList'
import RecentNotes from './sidebar/RecentNotes'
import ShortListed from './sidebar/ShortListed'
import ViewAppliction from './sidebar/ViewAppliction'

function Dashboard() {
  
  return (
    <DashboardSection>
      <div className='dashboard_container '>
        <div className='title_section'>
          <h2>CD Dashboard</h2>
          <div>
            <Link href="/cd/add-project">
              <a>
                <button className='button'>Create new project +</button>
              </a>
            </Link>
          </div>
        </div>
        <div className='lg:flex gap-6 my-6'>
          <div className='main_section'>
            <ProjectCrat />
            <CollaboratorsCrad />
          </div>
          <div className='sidebar_section'>
            <ShortListed />
            <RecentNotes />
            <ViewAppliction />
          </div>
        </div>
      </div>
    </DashboardSection>
  )
}

export default Dashboard

const DashboardSection = styled.section`
background: ${(props) => props.theme.paper};
  .dashboard_container{
    max-width: 1200px;
    padding:20px;
    width:100%;
    margin: auto;
  }
  .title_section{
    display: flex;
    justify-content: space-between;
  }
  @media (max-width:499px){
    .title_section{
      display:flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
      
    }
  }
  h2{
    font-weight: 700;
    font-size: 32px;
  }
  .button{
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.pure};
    padding: 8px 50px;
    border-radius: 5px;
  }
 
  .main_section{
    width: 100%;
    
  }
  .sidebar_section
    {
    width: 100%;
  }

  @media (min-width:1025px) {
  .main_section{
    width: 70%;
  }
  .sidebar_section
    {
    width: 30%;
  }
  }

`;
