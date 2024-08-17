

import ModalAnimated, { ModalPaper } from 'components/ModalAnimated';
import { LoginCurve } from 'iconsax-react';
import { rgba } from 'polished';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineQuestionCircle } from 'react-icons/ai';
import styled from 'styled-components';
import PersonAudition from './PersonAudition';
import SelectAuditionType from './selectAuditionType';

function RequestAudition({ open, setPopop }: any) {
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    return (

        <>
            <ModalAnimated
                open={open}
            >
                <Paper>
                    <div className='flex  justify-end'>
                        <button className='text-2xl question_button' ><AiOutlineQuestionCircle /></button>
                        <button className='text-2xl close_button' onClick={()=>setPopop(false)}><AiOutlineClose /></button >
                    </div>
                    <div className='font-bold text-left text-2xl'> Select audition request from Leonard</div>
                    <div className='my-6 text-left'>Select which type of
                        audition you’d like for this talent. once you sent a audition on a talent they
                        <br />will automatically go to auditions page.</div>
                    <div className='flex justify-between gap-8'>
                        <div className='parent' onClick={() => setShowModal2(true)} >
                            <div className='main_container'>
                                <img src='/cdImages/modalAudition.png' alt="loding" className="image" />
                                <div className='middle'>
                                    <div className="font-bold my-2"> Self tape audition</div>
                                    <div className="">Request the talent a recording
                                        of their audition using video
                                        or audio file.</div>
                                </div>
                            </div>
                            <div className='font-bold my-5 texttt'>Self-tape</div>
                        </div>
                        <div className='parent' onClick={() => setShowModal3(true)}>
                            <div className='main_container'>
                                <img src='/cdImages/modalAudition2.png' alt="loding" className="image" />
                                <div className='middle'>
                                    <div className="font-bold my-2"> In-Person audition</div>
                                    <div className="">Send the talent a schedule for
                                        personal interview with your
                                        preference of location, date
                                        and time.</div>
                                </div>
                            </div>
                            <div className='font-bold my-5 texttt'>In-Person</div>
                        </div>

                        <div className='parent'>
                            <div className='main_container'>
                                <img src='/cdImages/modalAudition3.png' alt="loding" className="image" />
                                <div className='middle'>
                                    <div className="font-bold my-2"> Live-virtual audition</div>
                                    <div className="">Send the talent a schedule for
                                        Online live video call. This will
                                        automatically saves recording.</div>
                                </div>
                            </div>
                            <div className='font-bold my-5 texttt'>Live-Vitrual</div>
                        </div>
                    </div>
                    <div className='button'>
                        <button className='font-bold'>
                            <LoginCurve size="32" />
                            Move this talent directly to auditions page
                        </button>
                    </div>
                </Paper>
            </ModalAnimated>
            <SelectAuditionType  open={showModal2} setPopop={() => setShowModal2(false)} />
            <PersonAudition  open={showModal3} setPopop={() => setShowModal3(false)} />
        </>
    )
}

export default RequestAudition
const Paper = styled(ModalPaper)`
    border-radius: 12px;
    background: ${(p) => p.theme.pure};
    padding: 1.5rem;

.parent{
    position: relative;
}
.parent:hover .texttt{
    opacity:0;
}
.main_container {
    position: relative;
    transition: transform 0.2s;
}
.main_container:hover .middle{
    opacity:1;   
}
.middle {
    border-radius: 5px;
    color: ${(p) => p.theme.pure};
    background:${(p) => rgba(p.theme.base, 0.7)}; 
    opacity: 0;
    position: absolute;
    top: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: center;
    text-align: left;
    padding: 10px;

}
.main_container:hover {
    transform: scale(1.06);
}
.question_button{
    background: unset;
}
.close_button{
    background: unset;
}
.button{
    display: flex;
    justify-content: center;
}
button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 5px 20px;
    border-radius: 10px ;
    background: ${(p) => rgba(p.theme.base, 0.1)};
}
`;




// Fix JavaScript Errors in UI Kit 9
