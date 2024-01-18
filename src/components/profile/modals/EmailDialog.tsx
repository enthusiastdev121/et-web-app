import ModalAnimated from "components/ModalAnimated";
import { RiCloseFill } from 'react-icons/ri'
import { useState } from "react";
import Button from "components/Button";
import { HiOutlineMail } from "react-icons/hi";
import { validateEmail } from "@/utils/helper";
export default function EmailDialog({ open, onClick, onSubmit, onClose }: {
    open: boolean, onClick: boolean, onSubmit: (email: string) => any, onClose: any
}) {
    const [emailDialog, setEmailDialog] = useState(false);
    const [email, setEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState('');
    // const {
    //     open,
    //     onClose,
    // } = props;
    return (
        <>
            <ModalAnimated open={open}  >
                <div className="p-5 z-50 w-[600px]">
                    <div className="z-50 w-full  bg-white rounded-lg py-10">
                        <div className="sm:w-[60%] w-[82%] mx-auto">
                            <h1 className="font-semibold text-[30px] py-5">Enter Your Email </h1>
                            <div className="relative">
                                <div className="text-left absolute top-1/2 -translate-y-2/4 left-2 text-xl txt-base">
                                    <HiOutlineMail />
                                </div>
                                <input
                                    className="border border-gray-400 rounded py-3 px-9 w-full bg-paper txt-base"
                                    type="email"
                                    placeholder="Email..."
                                    value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />

                            </div>
                            {errorMsg ? <p className='text-[#ff0000] test h-[20px] my-3'>{errorMsg}</p> : <p className='my-6'>{errorMsg}</p>}
                            <div className='gap-5 grid grid-cols-2 '>
                                <Button primary onClick={() => {
                                    if (validateEmail(email)) {
                                        onSubmit(email)
                                    } else {
                                        setErrorMsg('* Enter Valid Email Address');
                                    }
                                }}>Submit</Button>
                                <Button primary outlined onClick={onClose}>Cancel</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalAnimated>
        </>


    )
}