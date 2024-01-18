import { THEME } from '@/utils/constants/theme'
import TalentProfileModal from 'cd/containers/TalentProfileModal'
import { Dislike, Edit, EmptyWalletTick, Like1, LoginCurve, Message, SmsStar, Trash, UserCirlceAdd } from 'iconsax-react'
import { rgba } from 'polished'
import React, { useState } from 'react'
import { BsPlayCircleFill, BsSquareFill, BsThreeDots } from 'react-icons/bs'
import { MdDone } from 'react-icons/md'
import styled from 'styled-components'
import RequestAudition from '../RequestAuditionModal/requestAudition'
import AddShortListModal from './addShortlistModal'
type propType = {
    data: any,
    setPopup:any
}
function UserCard({ data,setPopup }: propType) {
    const [like, setLike] = useState("none")
    const [showMoreContent, setShowMoreContent] = useState(false)
    const [showMenu, setShowMenu] = useState(true)
    const [openPopup, setPopop] = useState(false)
    const [showModal1, setShowModal1] = useState(false);
    console.log(setPopup,"34345353535");
    return (
        <>
            <Mainsection >
                <div className='image_card'>
                    <div className='relative top_section'>
                        <img src={data?.img} alt='loding...' className='' onClick={() => setPopup(true)} />
                        <button className='play_icon'>
                            <BsPlayCircleFill />
                        </button>
                        <button className='check_Button'>
                            <BsSquareFill />
                        </button>
                        <button className='edit_button hidden_value'>
                            <span className='px-2'>Add note</span>
                            <Edit size="30" className=' visible_value ' />
                        </button>
                        <button className='like_dislike flex gap-2 items-center hidden_value_like' >
                            <span className="px-2">Rate</span>
                            <Dislike size="30" className='dislike_button' onClick={() => setLike("dislike")} />
                            <Like1 size="30" className="active_like_button" onClick={() => setLike("like")} />

                            <div className='like-dislike'>
                                {like === "like" ? <Like1 size="30" className="active_like_button" onClick={() => setLike("like")} /> : like === "dislike" ?
                                    <Dislike size="30" className='dislike_button' onClick={() => setLike("dislike")} /> : <Like1 size="30" className='like_button' />}
                            </div>
                        </button>
                    </div>
                    <div className='text_card'>
                        <div className='font-bold'>{data?.name}</div>
                        <p>{data?.city}</p>
                        <p>Age Range: <span>{data?.age}Year old</span></p>
                        <p>Height: <span>{data?.height}</span></p>
                        <span>Non-Union</span>
                    </div>
                    <div className='botton_section'>
                        <div className='flex justify-between gap-2 items-center'>
                            <button className={showMoreContent ? 'request_button ' : ' request_button btn1'} onClick={() => setShowMoreContent(true)}>
                                {showMoreContent ?
                                    <><MdDone className='text-xl' /><span>Shortlisted</span></>
                                    : <>
                                        <UserCirlceAdd size="25" className='button_text' />
                                        <div className='button_text'>Add&nbsp;to&nbsp;shortlist</div>
                                    </>}
                            </button>
                            <AddShortListModal open={showMoreContent} setPopop={() => setShowMoreContent(false)} />

                            <div><button className='down_button ' onClick={() => { setPopop(s => !s), setShowMenu(s => !s) }}><BsThreeDots className='text-xl' /></button></div>

                            <div className=' open_popup'>
                                {openPopup ? <>
                                    <div className='popup ' onClick={() => setPopop(false)}>
                                        <div className='flex items-center gap-2'>
                                            <div className='popup_icon p-1 rounded-full'><Message variant="Bold" /></div>
                                            <div className='text-sm'>Send Message</div>
                                        </div>
                                        <div className='flex items-center gap-2 my-2' >
                                            <div className='popup_icon p-1 rounded-full'><LoginCurve variant="Bold" /></div>
                                            <div className='text-sm'>Move to</div>
                                        </div>
                                        <div className='flex items-center gap-2 my-2' >
                                            <div className='popup_icon p-1 rounded-full'><EmptyWalletTick variant="Bold" /></div>
                                            <div className='text-sm'>Hire & pay</div>
                                        </div>
                                        <div className='flex items-center gap-2 my-2' >
                                            <div className='popup_icon p-1 rounded-full'><Trash variant="Bold" /></div>
                                            <div className='text-sm'>Deny & remove applicant</div>
                                        </div>
                                    </div>
                                </> : null}
                            </div>
                        </div>
                        <button className='down_button w-full flex gap-2 justify-center items-center'>
                            <SmsStar size="23" />
                            <button className='' onClick={() => setShowModal1(true)}>Request audition</button>
                            <RequestAudition open={showModal1} setPopop={() => setShowModal1(false)} />
                        </button>
                    </div>
                </div>
            </Mainsection >
            
        </>
    )
}

export default UserCard
const Mainsection = styled.section`
 .popup{
    background: ${(props) => props.theme.pure};
    box-shadow: 0px 0px 15px rgba(9, 42, 81, 0.02), 0px 2px 12px 4px rgba(9, 42, 81, 0.1);
    width: 250px;
    position: absolute;
    right: 10px;
    padding: 1rem;
    border-radius: 10px;
    top: 54px;
    z-index: 1;
    cursor: pointer;
    animation: mymove 0.2s;
  }
  .popup_icon{
    background: ${(props) => rgba(props.theme.base, 0.2)};
    color: ${(props) => props.theme.base};
  }
 
  @keyframes mymove {
        from {
            top: 100px;
        }
        to {
            top: 54px;
        }
    }
  
 img{
    aspect-ratio: ${THEME.profilePicRatio};
    width: 100%;
 }
.text_card{
    padding: 16px 10px;
    background: ${(p: any) => p.theme.pure}; 
}
.image_card{
    border: 1px solid #CECECE;
    border-radius: 8px;
}
span{
    font-size: 14px;
    font-weight: 600;
}
p{
    padding: 2px 0px;
}
.request_button{
    border:2px solid ${(p) => rgba(p.theme.base, 0.07)};
    color:${(p) => rgba(p.theme.base, 0.8)};
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    border-radius: 6px;
    padding: 5px 10px;
}
.request_button.btn1{
    color:${(p) => (p.theme.pure)};
    background:${(p) => (p.theme.primary)};
}
.down_button{
    border:2px solid ${(p) => rgba(p.theme.base, 0.07)};
    padding: 5px 10px;
    margin: 5px 0px;
    border-radius: 6px;
}
.botton_section{
    padding: 8px;
    position: relative;
}
.button_text{
    /* color: ${(props) => props.theme.pure}; */
    color:#fff;
  }
.top_section{
    > button{
        position: absolute;
    }
    .play_icon{
        background: ${(p: any) => p.theme.pure}; 
        padding: 2px;
        border-radius: 100px;
        font-size: 40px;
        bottom: -20px;
        right: 8px;
    }
    .check_Button{
        top: 10px;
        left: 2px;
        padding: 2px;
        font-size: 15px;
        color: ${(p: any) => p.theme.pure}; 
    }
    .edit_button{
        top: 10px;
        display: flex;
        padding:4px;
        right: 6px;
        gap: 4px 8px;
        align-items: center;
        background:${(p) => rgba(p.theme.pure, 0.8)};
        border-radius: 100px;
    }
    .hidden_value {
        visibility: hidden;
        &:hover {
            visibility: visible;
            animation: myfirst 5s ;
        }
    }
    
    @keyframes myfirst {
        0%   {right: -50px;}
        25%  {right: 0px;}
    }
    .visible_value {
       visibility: visible;
        padding:4px;
        background: ${(p: any) => p.theme.pure}; 
        border-radius: 100px;

}
    .hidden_value_like {
        visibility: hidden;
        &:hover {
            visibility: visible;
            background: ${(p: any) => p.theme.pure}; 
            padding: 4px;
            border-radius: 100px;
            animation: likeAnimation 5s ;
        }
    }
    @keyframes likeAnimation {
  0%   {right: -50px;}
  25%  {right: 0px;}
  
}
    .hidden_value_like:hover .like_button{
        display:none;
    }
    .dislike_button{
        top: 55px;
        right: 2px;
        padding: 4px;
        color: ${(p: any) => p.theme.pure}; 
        /* color: ${(p: any) => p.theme.base};  */
        border-radius: 100px;
        background: ${(p: any) => p.theme.red};   
    }
    button.like_dislike {
        top: 55px;
        right: 6px;
    }
    .active_like_button{
        background: ${(p: any) => p.theme.primary};  
        top: 55px;
        right: 2px;
        padding: 4px;
        color: ${(p: any) => p.theme.pure}; 
        /* color: ${(p: any) => p.theme.base};  */
        border-radius: 100px;
    }

    .like_button{
        visibility: visible;
        top: 55px;
        right: 2px;
        padding: 4px;
        background: ${(p: any) => p.theme.pure}; 
        border-radius: 100px;
        
    }
   
}
.like-dislike > svg {
    visibility: visible;
}
`
