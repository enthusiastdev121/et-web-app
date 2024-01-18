import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Router from 'next/router'
import { rgba } from 'polished';
import Link from 'next/link';
import { btnNextActive, btnNextDisable } from './styled';
import { Label } from 'containers/payments/CardDetailForm';
import Review from './Review';
import { interestArray } from '@/utils/constants/profile';
import { updateMyIntrestApi } from 'network/apis/cd/profile'
import { useAuth } from 'context/AuthContext'


type propType = {
    auth: any
}

export default function Talents({ auth }: propType, activeTab: any) {

    const [talents, setTalents] = useState<any>(interestArray)
    const [checkTalent, setCheckTalent] = useState<any>([])
    const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token, user, userType }: any = useAuth();


    const [btnDisable, setBtnDisable] = useState(false)
    const theme = useTheme()
    const Selected = (id: any) => {
        const check = talents.map((i: { id: any; checked: any; }) => {
            if (i.id === id) {
                return {
                    ...i, checked: !i.checked
                }
            } else {
                // console.log('else:----',i)
                return {
                    ...i
                }
            }
        })
        setTalents(check)
        // console.log(check,'set?talents....')

    }


    useEffect(() => {
        const choseTalent = talents.filter((i: { checked: any; }) => i.checked);
        setCheckTalent(choseTalent);
    }, [talents])
    // console.log(checkTalent,'checktalent')




    useEffect(() => {
        if (talents.every((i: { checked: boolean; }) => i.checked === false) === false) {
            setBtnDisable(false)
        } else {
            setBtnDisable(true)
        }
    }, [talents])



    const submitTalent = async(refresh:boolean = false) =>{
        try{
            if (!token && userType! == 'talent') {
                return;
            }
            if (refresh) {
                setRefreshing(true);
            } else {
                setLoading(true)
            }

            const responce = await updateMyIntrestApi({
                cd_category_interests:checkTalent.filter((i:any) => i.id).map((i2:any) => ({category_id:i2.id, subcategory_id: i2.sub.map((k:any) => k.id)})),
                token
            })
            console.log('responceTalent++',responce)
            if ( responce.access_token) {
                console.log("number",  responce.access_token.expires_in);
            }
            setLoading(false);
            Router.push('/cd/getting-started?keyword=project');
            console.log('onSubmit---',  responce);
        }
        catch (error) {
            console.log("error:=",error)
            console.log("Token:-",token)
        }
    }
    [token]








    return (
        <><TalentsSection theme={theme}>
            <p className='congrats font-bold text-sm'>Congrats! your account is ready. let’ complete your details so that yo can easily find best talents.</p>
            <h1 className='confetti font-bold sm:text-3xl text-2xl'>
                <span><img src='/images/confetti-gp-2.png' /></span>
                Welcome Adam, what talent are you looking for?
                <span className=''><img src='/images/confetti-gp-1.png' /></span>
            </h1>
            <p className='text-sm mt-2'>Select as many talent that you are looking for.</p>
            <div className='talents'>
                {talents.map((i: { id: React.Key | null | undefined; checked: any; cdIcon: string | undefined; label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
                    return (
                        <div key={i.id}
                            className={i.checked ? 'talent_box select' : 'talent_box'}
                            onClick={() => { Selected(i.id); }}>
                            <img src={i.cdIcon} />
                            <h1 className='font-bold my-3'>{i.label}</h1>
                        </div>
                    );
                })}
            </div>
            <div className='buttons flex items-center justify-end mt-5'>  
            <button onClick={() => { auth(checkTalent) , submitTalent() }} className={btnDisable ? `${btnNextDisable} ` : `${btnNextActive}`} disabled={btnDisable}>Next          <HiOutlineArrowNarrowRight />
            </button>
            </div>
        </TalentsSection></>

    )
}
const TalentsSection = styled.section`
    max-width:800px;
    margin:auto;
    padding:20px;
    margin-top: 40px;
    .confetti{
        position:relative;
        display: flex;
        

        span {
            position: absolute;
            top: 0px;
            @media (max-width:768px){
                display:none;
            }
        }
        span:nth-child(1){
            left: -70px;
        }
        span:nth-child(2){
            right: -30px;
        }
    }
    .congrats{
        color:${p => p.theme.primary}
    }
    .talents {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;     
        gap: 20px;
        margin-top: 20px;
        @media (max-width:768px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .talent_box{
        text-align: center;
        border: 1px solid #a1a1aa6b;
        border-radius: 8px;
        padding: 24px;
        cursor: pointer;
        box-shadow: 0px 0px 15px rgb(9 42 81 / 0%), 0px 2px 12px 4px rgb(9 42 81 / 0%);
        transition: all 0.5s;
        :hover{
            box-shadow: rgb(0 0 0 / 24%) 0px 0px 8px;
        }
        img{
            margin:auto;
        }
        .talent_box img {
            margin: auto;
        }
    }
    .talent_box.select {
        
        background: ${p => rgba(p.theme.primary, 0.1)};
        box-shadow: 0px 0px 15px rgba(9, 42, 81, 0.05), 0px 2px 12px 4px rgba(9, 42, 81, 0.15);
        border: 1px solid   ${p => p.theme.primary};
    }
`
const Data = [
    {
        id: 1,
        name: 'Actors & performers',
        logo: '/svg/cd/actors.svg',
        checked: false,
    },
    {
        id: 2,
        name: 'Model',
        logo: '/svg/cd/model.svg',
        checked: false,
    },
    {
        id: 3,
        name: 'Musician',
        logo: '/svg/cd/music.svg',
        checked: false,
    },
    {
        id: 4,
        name: 'Dancer',
        logo: '/svg/cd/dancer.svg',
        checked: false,
    },
    {
        id: 5,
        name: 'Extras',
        logo: '/svg/cd/extras.svg',
        checked: false,
    },
    {
        id: 6,
        name: 'Influencers',
        logo: '/svg/cd/Influencers.svg',
        checked: false,
    },
    {
        id: 7,
        name: 'Crews',
        logo: '/svg/cd/Crews.svg',
        checked: false,
    },
    {
        id: 8,
        name: 'Presenters',
        logo: '/svg/cd/Presenters.svg',
        checked: false,
    },
    {
        id: 9,
        name: 'Others',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
]
