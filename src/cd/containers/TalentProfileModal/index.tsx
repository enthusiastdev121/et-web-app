import OtherUserProfile from 'containers/otherUserProfile'
import { ArrowLeft, ArrowRight, Dislike, Edit, Like1, LoginCurve, Message2, MessageNotif, SmsStar, TaskSquare, UserCirlceAdd, UserSquare } from 'iconsax-react'
import { rgba } from 'polished'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

function TalentProfileModal({ open, setPopup }: any) {
    console.log('--check---', open);

    return (
        <Parent className={open ? 'profile_model open' : 'profile_model'}>
            <Child >
                <div className='modal-content'>
                    <div className=' sticky top-0 '>
                        <div className='flex justify-between px-6 py-2 '>
                            <div>
                                <button className='text-2xl close_button' onClick={() => setPopup(false)}><AiOutlineClose /></button >
                            </div>
                            <div className='flex items-center'>
                                <div className='text-sm'>View full profile</div>
                                <hr className='hr_line' />
                                <div className='flex items-center gap-2'>
                                    <ArrowLeft size="20" />
                                    <span className='text-sm'> Previous Next</span>
                                    <ArrowRight size="20" />
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-wrap gap-4 mx-10 my-4'>
                            <button >
                                <LoginCurve size="20" />
                                <div>Move&nbsp;to </div>
                            </button>
                            <button className=''>
                                <div className='flex items-center gap-1 mx-2'>
                                    <Like1 size="20" />
                                    <div>Like </div>
                                </div>
                                <div className='flex items-center gap-1 mx-2'>
                                    <Dislike size="20" />
                                    <div>Dislike </div>
                                </div>
                            </button>
                            <button >
                                <Message2 size="20" />
                                <div>Message </div>
                            </button>
                            <button >
                                <SmsStar size="20" />
                                <div>Request&nbsp;audition </div>
                            </button>
                            <button >
                                <UserCirlceAdd size="20" />
                                <div>Add&nbsp;to&nbsp;shortlist </div>
                            </button>
                        </div>
                        <div className='tabs'>
                            <div className='flex items-center gap-2 hover:text-blue-600 '>
                                <UserSquare size="28" />
                                <span>Profile Details</span>
                            </div>

                            <div className='flex items-center gap-2 hover:text-blue-600'>
                                <TaskSquare size="28" />
                                <span>Roles & audtions 8</span>
                            </div>

                            <div className='flex items-center gap-2 hover:text-blue-600'>
                                <Edit size="28" />
                                <span>Notes 16</span>
                            </div>
                        </div>
                    </div>
                    <OtherUserProfile />
                </div>
            </Child>
        </Parent>
    )
}

export default TalentProfileModal

const Parent = styled.div`
    min-height: 100vh;
    position: relative;
    max-width: 100%;
    &.profile_model{
        display:none;
        &.open{
            display:block;
        }
    }

    .hr_line{
    transform: rotate(90deg);
    width:20px;
  }
    
`;
const Child = styled.div`
    background: ${(p) => rgba(p.theme.base, 0.3)};
    z-index: 9999; 
    width: 100%;
    height: 100%; 
    position: fixed;
    top: 0px;
    left: 0px;
    overflow: auto; 
.modal-content {
    background-color: ${(p) => p.theme.paper};
    width: 60%; 
    height: 100vh;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    .close_button{
        padding: 10px;
        background-color: unset;
    }
}
button{
    background-color: ${(p) => rgba(p.theme.base, 0.07)};
    color: ${(p) => p.theme.base};
    padding: 8px 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    border-radius: 5px;
    gap: 4px;
}
.tabs{
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 16px 60px;
    background: ${(p) => rgba(p.theme.base, 0.06)};

}


`;