import Info from './Info'
import Organization from './Organization'
import Projects from './Projects'
import Talents from './Talents'
import Review from './Review'
import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

import Header from './Header'

function GettingStarted(activeTab:any) {
    const [active, setActive] = useState<any>("talents")
   

    const [allData,setAllData]=useState({
        talent:[],
        project:[],
        organization:[],
        info:{}
    })
    console.log(allData,"allCheckData")
    const theme = useTheme()
    const router = useRouter()

    useEffect(() => {
        setActive(router.query.keyword || 'talents')
    }, [router.query])
    console.log('----------parent ',allData)
    return (
        <div>
            <LayoutSection theme={theme}>
                <Header activeTab={active}/>
                
                {active === "talents" ? <Talents auth={(i: any) => setAllData({...allData, talent:i})}/> :
                    active == "project" ? <Projects auth={(project:any) =>setAllData({...allData, project})}/> :
                        active == "organization" ? <Organization  auth={(organization:any) => setAllData({...allData, organization})}/> :
                            active == "info" ? <Info  auth={(i:any) => setAllData({...allData, info:i})}/> : 
                                active == "review" ?  <Review allData={allData} /> : 
                                null}

            </LayoutSection>
        </div>
    )
}

export default GettingStarted


const LayoutSection = styled.section`
    max-width:1530px;
    margin:auto;
    padding:0px 20px;
    @media (max-width:450px){
                padding: 0px 10px;
            }
    header{
        @media (max-width:768px){
            flex-direction: column;
        }
    }
    
   
    .menus {
        margin: auto;
        @media (max-width:450px){
            display:grid;
            grid-template-columns: repeat(4 , 1fr); 
        }
        a{
            font-weight: 600;
            font-size: 14px;
            margin: 0px 10px;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            border-bottom: 3px solid #ff000000;
            @media (max-width:768px){
                margin: 0px 2px;
            }
            @media (max-width:450px){
                padding: 14px 2px;
                gap: 8px;
                flex-direction: column;
            }
            span { 
                color: #000000;
                display: flex;
                width: 30px;
                height: 30px;
                background: #EFF1F4;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                font-weight: 700;
                font-size: 14px;
            }
        }
        a.active {
            background: ${p => p.theme.pure};
            color : ${p => p.theme.primary};
            border-bottom: 3px solid ${p => p.theme.primary};
            span{
                background: ${p => p.theme.primary};
                color: ${p => p.theme.pure};
            }
        }
    }

`
































// function GettingStarted({state}:propTypes) {
//     const [active, setActive] = useState(1)

//     return (
//         <div>
//             <Layout>
//             <Talents />
//                 {(() => {
//                     switch (state) {
//                         case active == 1:
//                             return (<Talents />);
//                         case active == 2:
//                             return (<Projects />);
//                         case active == 3:
//                             return (<Organization />);
//                         case active == 4:
//                             return (<Info />);
//                         default:
//                             return null;
//                     }
//                 })}
//             </Layout>
//         </div>
//     )
// }

// type propTypes = {
//     state: any,

// }