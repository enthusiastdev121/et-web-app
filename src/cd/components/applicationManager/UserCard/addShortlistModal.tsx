
import ModalAnimated, { ModalPaper } from 'components/ModalAnimated';
import { rgba } from 'polished';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineClose, AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const arr = [1, 2, 3, 4, 5]
function AddShortListModal({ open, setPopop }: any) {
    const [Active, setActive] = useState(false)
    return (
        <ModalAnimated open={open} >
            <Paper>
                <div className='flex  justify-end gap-4'>
                    <button className='text-2xl question_button' ><AiOutlineQuestionCircle /></button>
                    <button className='text-2xl close_button' onClick={() => setPopop(false)}><AiOutlineClose /></button >
                </div>
                <div className='font-bold text-left text-2xl'>Add talent to shortlist</div>
                <div className=''>
                    <div className='project_text my-2'>{arr.length} TALENT SELECTED</div>
                    <div className='small_card my-5'>
                        <div className="flex  items-center space-x-2 ">
                            <div className="flex -space-x-2 overflow-hidden">
                                {arr.map((index: number,) => {
                                    return (
                                        <div className='image'>
                                            <img src='/cdimages/profile.png' alt="" key={index} className='w-full h-full' />
                                            <div className='font-bold'>Leonard</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <span className='project_text '>PROJECT</span>
                <div className=''>
                    <label className='font-bold '>Audition project</label>
                    <div className='audition_project'>
                        <div className='w-10 h-10'>
                            <img src='/cdimages/selected.png' alt='loding..' className='w-full h-full' />
                        </div>
                        <div className='font-semibold'>Back to the past and future Project</div>
                    </div>
                </div>

                <div className='w-full'>
                    <label className='font-bold '>Role</label>
                    <select className=''>
                        <option value="all">Teens</option>
                        <option value="ethnicity1">Ethnicity1</option>
                        <option value="ethnicity2">Ethnicity2</option>
                    </select>
                </div>

                <div className='flex justify-end'>
                    <div className='flex gap-10 my-2 justify-end'>
                        <button className='cancel_button'>Cancel</button>
                        <button className={Active ? 'request_button ' : ' request_button btn1'} onClick={() => {
                            setActive(s => !s);
                            toast.success("Successfully added to shortlist", {
                                position: "bottom-right",
                            });
                        }}>

                            {Active ?
                                <><MdDone className='text-xl' /><span>Shortlisted</span></>
                                : <>
                                    <div className='button_text'>Add&nbsp;to&nbsp;shortlist</div>
                                </>}
                        </button>
                    </div>
                </div>
            </Paper>
        </ModalAnimated>
    )
}

export default AddShortListModal
const Paper = styled(ModalPaper)`
    border-radius: 12px;
    background: ${(p) => p.theme.pure};
    padding: 1.5rem;
    text-align: left;
    width: 700px;
   

    label{
    font-weight: 700;
    font-size: 14px;
    display:block;
    margin: 8px 0px;
  }
 select{
    width: 100%;
    border: 1px solid ${(p) => rgba(p.theme.base, 0.04)};
    padding: 8px;
    border-radius: 4px;
    background: ${(p) => rgba(p.theme.base, 0.04)};
  }

.small_card{
    display: flex;
    gap: 1rem;
    align-items: center;
}
.image{
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid ${(p) => p.theme.pure};
    border-radius: 100px;

}
.audition_project{
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
    border: 1px solid ${(p) => rgba(p.theme.base, 0.04)};
    padding: 8px;
    border-radius: 4px;
    background: ${(p) => rgba(p.theme.base, 0.04)};
}
.project_text{
    color: ${(p) => rgba(p.theme.base, 0.5)};
    font-weight: 700;
}
.cancel_button{
    color: ${(p) => p.theme.primary};
    background: none;
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
    padding: 5px 20px;
}
.request_button.btn1{
    color:${(p) => (p.theme.pure)};
    background:${(p) => (p.theme.primary)};
}
.question_button{
    background: unset;
}
.close_button{
    background: unset;
}
`;