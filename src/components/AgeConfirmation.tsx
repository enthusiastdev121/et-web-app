import React, { useEffect, useState } from 'react'
import ModalAnimated, { ModalPaper } from './ModalAnimated'
import styled from "styled-components";
import { rgba } from 'polished';
import { useRouter } from 'next/router';
import { IoClose } from 'react-icons/io5';
import { useAuth } from 'context/AuthContext';
import { useProfileStore } from 'context/ProfileStore';
import { updatePhysicalAttrsApi } from 'network/apis/ownProfile';
import Button from './Button';

export default function AgeConfirmation() {
  const router = useRouter();
  const [open, setOpen] = useState(false)
  const [btnDisable, setBtnDisable] = useState(true)
  const { placeHolder, profile, setProfile } = useProfileStore();
  const { user, token } = useAuth();
  const [dob, setDob] = useState<any>(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!profile.dob?.year && profile.talentnum) {
      setOpen(true)
    }
  }, [profile.dob, profile.talentnum])

  const onSave = async () => {
    console.log("DDDD", dob)
    const y = new Date(dob).getFullYear();
    const m = new Date(dob).getUTCMonth();
    const d = new Date(dob).getUTCDate();
    try {
      setLoading(true);
      let kkk = {
        dobyyyy: y,
        dobmm: m + 1,
        dobdd: d
      };
      const res = await updatePhysicalAttrsApi(
        token,
        JSON.stringify({ ...kkk })
      );
      console.log("checkres", res);

      setLoading(false);
      setOpen(false)

      setProfile((s) => ({
        ...s,
        dob: {
          day: d, year: m, month: y
        },
        age: new Date().getUTCFullYear() - y
      }));
      console.log(y, "age", kkk.dobyyyy);
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  };

  return (
    <ModalAnimated open={open} onClose={() => setOpen(false)}>
      <Paper>
        <div className='flex justify-between items-center'>
          <div className='text-2xl py-6 font-bold title'>Age Confirmation</div>
          <div className="hover:bg-red-500 hover:text-white border rounded-full p-2 text-4xl" onClick={() => setOpen(false)}>
            <IoClose className='cursor-pointer' color='inherit' />
          </div>
        </div>
        <div className='text-base'>Please enter your date of birth to continue. This information will be kept<br /> confidential and will not be displayed in your profile.</div>
        <div className='pt-6 font-semibold text-lg label'>Date of Birth</div>
        <input className='w-full p-4 my-2 rounded-lg date_input' type="date" onChange={(e) => { setBtnDisable(false); setDob(e.target.value) }} />
        <div className='flex gap-6 py-8 '>
          <Button loading={loading} primary onClick={onSave} disabled={btnDisable}>Next</Button>
          <NoBtn onClick={() => setOpen(false)}>Cancel</NoBtn>
        </div>
      </Paper>
    </ModalAnimated>
  )
}
const Paper = styled(ModalPaper)`
  border-radius: 12px;
  background: ${(p) => p.theme.paper};
  padding: 1rem 3rem;
  .title{
    color: ${(p) => p.theme.base};
  }
  .label{
    color: ${(p) => p.theme.base};
  }
  .date_input{
    border:2px solid ${(p) => p.theme.primary};
  }
`;

const NoBtn = styled.div`
 background: ${(p) => rgba(p.theme.base, 0.50)};
  padding: 10px 30px;
  color: ${(p) => p.theme.pure};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

