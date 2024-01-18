import ModalAnimated, { ModalPaper } from 'components/ModalAnimated';
import { AiOutlineClose, AiOutlineQuestionCircle } from 'react-icons/ai';
import styled from 'styled-components';

function InviteModal({open,setPopop}:any) {
  return (
    <ModalAnimated open={open} onClose={setPopop}>
            <Paper>
              <div className='flex gap-3 justify-end'>
                <button className='text-3xl question_button' ><AiOutlineQuestionCircle /></button>
                <button className='text-3xl close_button' onClick={setPopop}><AiOutlineClose /></button >
              </div>
              <h2>Send collaborator invite</h2>
              <p className='my-4'>Invite a collaborator to a project to give you assistance and offer feedback on your applicants.</p>
              <div>
                <label className='font-bold'>Email address</label>
                <input type="email" placeholder=" Email, comma separated for multiple" className='w-full p-2 border rounded ' />
              </div>
              <div className='my-6'>
                <label className='font-bold'>Message</label>
                <div>
                  <textarea className='border w-full rounded' placeholder='Message '></textarea>
                </div>

              </div>

              <div className='flex justify-end gap-4'>
                <button className='cancel'>Cancel</button>
                <button className='send_invit'>send invite</button>
              </div>
            </Paper>
          </ModalAnimated>
  )
}

export default InviteModal
const Paper = styled(ModalPaper)`
    border-radius: 12px;
    background: ${(p) => p.theme.pure};
    padding: 2rem;
.cancel{
    color: ${(p) => p.theme.primary};
    background-color: unset;
    font-weight:bold ;
}

.send_invit{
    color: ${(p) => p.theme.pure};
    background: ${(p) => p.theme.primary};
    border-radius: 8px !important;
    padding: 5px 20px;
    font-weight:bold ;
}
textarea{
        height:120px;
        padding: 1rem;
    }
.question_button{
    background: unset;
}
.close_button{
    background: unset;
}
`;
