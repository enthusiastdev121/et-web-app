
import { Archive, DirectboxNotif, EmptyWalletTick, Notepad2, ProfileCircle, Refresh2, TaskSquare } from 'iconsax-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { rgba } from 'polished'
import { useState } from 'react'
import styled from 'styled-components'
import SubmissionsSection from '../applicationManagerSubmissions'
import SelectedProject from '../selectedProjectMenu'

const AllTab = [
    { id: 1, name: "Dashboard /", push: '/cd/dashboard' },
    { id: 2, name: "Application manager /", push: '/cd/application-manager' },
    { id: 3, name: "Submissions" }
]

const tabData = [
    { id: 1, img: <Notepad2 variant="Bold" />, name: "Submissions", number: "149" },
    { id: 2, img: <TaskSquare variant="Bold" />, name: "Shortlist", number: "8" },
    { id: 3, img: <ProfileCircle variant="Bold" />, name: "Auditions", number: "16" },
    { id: 4, img: <Refresh2 />, name: "Callbacks", number: "6" },
    { id: 5, img: <EmptyWalletTick />, name: "Hire & pay", number: "24" }

]

function ApplicationManagerLayout() {
    const router = useRouter();
    const [invited, setInvited] = useState(false)
    const [archived, setArchived] = useState(false)
    const [activeTab, setActiveTab] = useState<any>(0);
    const [active, setActive] = useState(0)

    return (
        <>
            <MainNavbar>
                <div className='main_nav'>
                    <Nav className='flex gap-2 font-bold '>
                        {AllTab.map((i, ind) => {
                            return (
                                <div key={ind} className={`${i.id === active ? 'active_tab ' : ''}`} onClick={() => { setActive(i.id) }}>
                                    <Link href={`${i.push}`}>
                                        <a><button> {i?.name} </button> </a>
                                    </Link>
                                </div>)
                        })}
                    </Nav>
                    <div className='title_section '>
                        <h2>Application manages</h2>
                    </div>
                    <Maintab >
                        <div className='flex items-center flex-wrap cursor-pointer' >
                            {tabData.map((i, ind) => {
                                return (
                                    <div key={ind} className={`${i.id === activeTab ? 'talent_box select ' : 'talent_box'}`} onClick={() => { setActiveTab(i.id) }}>
                                        <div className='flex gap-2 items-center text-sm'>
                                            <span>{i.img}</span>
                                            <div>{i?.name}</div>
                                            <span>{i.number}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='flex items-center gap-6 flex-wrap cursor-pointer' >
                            <div onClick={() => { setInvited(s => !s) }} className={invited ? 'talent_box select flex gap-2 items-center' : 'talent_box flex gap-2 items-center'}>
                                <DirectboxNotif />
                                <div>Invited</div>
                            </div>
                            <div className={archived ? 'talent_box select flex gap-2 items-center' : 'talent_box flex gap-2 items-center'} onClick={() => { setArchived(s => !s) }}>
                                <Archive />
                                <div>Archived</div>
                            </div>
                        </div>
                    </Maintab>
                </div>
            </MainNavbar>
            <Application>
                <div className='application_container '>
                    <div className='lg:flex gap-6'>
                        <div className='sidebar_section '>
                            <SelectedProject />
                        </div>
                        <div className='main_section'>
                            <SubmissionsSection />
                        </div>
                    </div>
                </div>

            </Application>
        </>
    )
}

export default ApplicationManagerLayout

const MainNavbar = styled.section`

background: ${(props) => props.theme.pure};
.main_nav{
    max-width: 1400px;
    padding:20px 0px;
    width:95%;
    margin: auto;
  }
   
  .title_section{
    color: ${(props) => props.theme.base};
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
  }
  h2{
    font-weight: 700;
    font-size: 32px;
  }
`

const Maintab = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  flex-wrap: wrap;

  .talent_box{
        text-align: center;
        color: ${p => rgba(p.theme.base, 0.7)};
        border-radius: 8px;
        padding: 8px 20px;
    }
    .talent_box.select {
        color: ${p => p.theme.primary};
    }
    img{
      width: 25px;
    }
`

const Nav = styled.section`
    .active_tab{
        color: ${(props) => props.theme.primary};
    }
    color: ${(props) => rgba(props.theme.base, 0.8)};

`

const Application = styled.section`
background: ${(props) => props.theme.paper};
  .application_container{
    max-width: 1400px;
    width:95%;
    margin: auto;
  }
  @media (max-width:499px){
    .title_section{
      display:flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
      
    }
  }

  .main_section{
    padding: 20px 0px;
    width: 95%;
    margin: auto;
  }
  .sidebar_section {
    padding: 20px 0px;
    width: 95%;
    margin: 0px auto;
  }

  @media (min-width:1050px) {
  .main_section{
    width: 75%;
  }
  .sidebar_section
    {
    width: 25%;
  }
  }

`;
