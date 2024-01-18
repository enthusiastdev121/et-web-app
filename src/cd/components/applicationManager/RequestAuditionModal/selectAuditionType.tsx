
import ModalAnimated, { ModalPaper } from 'components/ModalAnimated';
import { ArrowLeft, Microphone2, Notepad2, Video } from 'iconsax-react';
import { rgba } from 'polished';
import { AiOutlineClose, AiOutlineQuestionCircle } from 'react-icons/ai';
import styled from 'styled-components';

function SelectAuditionType({ open, setPopop }: any) {
    return (
        <ModalAnimated open={open} >
            <Paper>
                <div className='flex  justify-end gap-4'>
                    <button className='text-2xl question_button' ><AiOutlineQuestionCircle /></button>
                    <button className='text-2xl close_button' onClick={() => setPopop(false)}><AiOutlineClose /></button >
                </div>
                <div className="flex gap-6 items-center">
                    <ArrowLeft size="32" color="#65b5ff" onClick={() => setPopop(false)}
                    />
                    <div className='font-bold text-left text-2xl'> Select audition type</div>
                </div>

                <div className='my-6'>
                    <div>Selected audition type</div>
                    <div className='sm:flex gap-4 items-center '>
                        <div className='small_card'>
                            <div className='icon'>
                                <Video size="24" variant="Bold" />
                            </div>
                            <div>Video</div>
                        </div>
                        <div className='small_card'>
                            <div className='icon'>
                                <Microphone2 size="24" variant="Bold" />
                            </div>
                            <div>Audio</div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <label className='font-bold '>Audition project</label>
                    <div className='audition_project'>
                        <div  className='w-10 h-10'>
                            <img src='/cdimages/selected.png' alt='loding..'  className='h-full w-full'/>
                        </div>
                        <div className='font-semibold'>Back to the past and future Project</div>
                    </div>
                </div>

                <div className='w-full'>
                    <label className='font-bold '>Role</label>
                    <select className=''>
                        <option value="all">All</option>
                        <option value="ethnicity1">Ethnicity1</option>
                        <option value="ethnicity2">Ethnicity2</option>
                    </select>
                </div>

                <div>
                    <label className='font-bold'>Message</label>
                    <textarea placeholder='send message to this taoejt' className='h-24'></textarea>
                </div>
                <div className='sm:flex justify-between'>
                    <div>
                        <div><span className='font-bold'>File attachment</span> (e.g. script)</div>
                        <button className='attach_button'><Notepad2 variant="Bold" />Attach file</button>
                    </div>
                    <div className='flex gap-10 my-6 justify-end'>
                        <button className='cancel_button'>Cancel</button>
                        <button className='save_button' >Save</button>
                    </div>
                </div>
            </Paper>
        </ModalAnimated>
    )
}

export default SelectAuditionType
const Paper = styled(ModalPaper)`
    border-radius: 12px;
    background: ${(p) => p.theme.pure};
    padding: 2rem;
    text-align: left;
    height: 720px;
    width: 850px;
   overflow-y: scroll;
   ::-webkit-scrollbar {
  width: 0px;
}

    label{
    font-weight: 700;
    font-size: 14px;
    display:block;
    margin: 10px 0px;
  }
  textarea , select{
    width: 100%;
    border: 1px solid ${(p) => rgba(p.theme.base, 0.04)};
    padding: 8px;
    border-radius: 4px;
    background: ${(p) => rgba(p.theme.base, 0.04)};
  }
  textarea{
    height:120px;
  }
.small_card{
    background: ${(p) => rgba(p.theme.base, 0.2)};
    padding: 20px 40px;
    border-radius: 10px;
    margin: 10px 0px;
    @media (max-width:500px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
.icon{
    background: ${(p) => p.theme.pure}; 
    border-radius: 100px;
    padding: 10px;
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    @media (max-width:500px){
        border-radius: 100px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
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
.attach_button{
      color: ${(p) => rgba(p.theme.base, 0.5)};
      background: ${(p) => rgba(p.theme.base, 0.05)};
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 5px 10px;
      border-radius: 10px;
      margin: 10px 0px;
}
.cancel_button{
    color: ${(p) => p.theme.primary};
    background: none;
}
.save_button{
      margin: 10px 0px;
      background-color:${(p) => p.theme.primary};
      color: ${(p) => p.theme.pure};
      padding: 5px 18px;
      border-radius: 4px;
}
.question_button{
    background: unset;
}
.close_button{
    background: unset;
}
`;


