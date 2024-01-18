import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { THEME } from '@/utils/constants/theme';
import { darken, rgba } from 'polished';
import { useRouter } from 'next/router';
import { IoClose } from 'react-icons/io5';
import { useAuth } from 'context/AuthContext';
import { useProfileStore } from 'context/ProfileStore';
import { updatePhysicalAttrsApi, updateProfileDetailApi } from 'network/apis/ownProfile';
import ModalAnimated, { ModalPaper } from 'components/ModalAnimated';
import Button from 'components/Button';

export default function PasswordSet() {
    const router = useRouter();
    const { profile } = useProfileStore();
    const { user, token, passwordOpen, setPasswordOpen } = useAuth();
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');


    const onSubmit = async () => {
        try {

            setLoading(true)
            const res = await updateProfileDetailApi({
                raw: {
                    talentpass: password,
                },
                token,
                talentnum: profile.talentnum

            });
            setPasswordOpen(false)
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
            console.log("Err", err)
        }
    };


    return (
        <ModalAnimated open={passwordOpen} onClose={() => setPasswordOpen(false)}>
            <Paper  >
                <div className='w-full pb-4' >

                    <div className='flex justify-between items-center pb-6'>
                        <div className='text-xl py-2 font-bold title'>Set a strong password</div>
                        <div className="hover:bg-red-500 hover:text-white border rounded-full p-2 text-4xl" onClick={() => {
                            setPasswordOpen(false)
                        }}>
                            <IoClose className='cursor-pointer' color='inherit' />
                        </div>
                    </div>

                    <div className='mb-6 flex' >
                        <input type='password' className='bg-gray-200 px-4 py-4 rounded-lg w-full' placeholder='Enter a strong password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <Button primary onClick={onSubmit} >Update password</Button>
                    </div>
                </div>


            </Paper>
        </ModalAnimated>
    )
}
const Paper = styled(ModalPaper)`
  border-radius: 12px;
  background: ${(p) => p.theme.paper};
  padding: 1rem 2rem;
  width: 460px;
  max-width: 90%;
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

