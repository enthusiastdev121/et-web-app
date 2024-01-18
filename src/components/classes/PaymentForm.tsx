import SingleNav from "components/Layout/Header/SingleNav";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import { ArrowDown2 } from "iconsax-react";
import { useRouter } from "next/router";
import { rgba } from "polished";
import { useState } from "react";
import { BsArrowLeft, BsQuestionCircle } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import styled from "styled-components";

export default function PaymentForm() {

    const [open, setOpen] = useState(false)
    const [paymentDetails, setPaymentDetails] = useState(false)
    const [paymentDone, setPaymentDone] = useState(false)
    const router = useRouter();
    const openPaymentCart = () => {
        router.push("  /classes/classes-cart/");
    };

    const openProfile = () => {
        router.push("/classes/details/")
    }

    const paymentProcess = () => {
        setOpen(true)
        console.log('before intervarkl')
        setTimeout(() => {
            setPaymentDone(true)
            console.log('after intervarkl')
        }, 2000)

    }
    return (
        <div className="">
            <SingleNav />
            <div className="max-w-[1200px] mx-auto py-4">
                <div className="w-[100%] mx-auto">
                    <div className="flex justify-between items-center py-6 font-bold max-w-[80%] mx-auto">
                        <div><BsArrowLeft /></div>
                        <div className="text-xl">Checkout</div>
                        <div className="txt-primary text-sm">save</div>
                    </div>
                    <div className="md:w-[100%] md:flex gap-10  justify-center mx-auto">
                        <div className="md:w-[50%] mx-2 px-2">
                            <div className="">
                                <div className="flex bg-gray-100 px-6 gap-16 py-3 rounded">
                                    <div className="cursor-pointer">
                                        <input type="radio" name="paymethod" id="new" />
                                        <label htmlFor="new"> Add New Billing Method</label>
                                    </div>
                                    <div className="cursor-pointer">
                                        <input type="radio" name="paymethod" id="existing" />
                                        <label htmlFor="existing"> Use Existing Billing Method</label>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center my-4">
                                <div className="font-bold">Credite Card Payment</div>
                                <div className="flex gap-2 text-3xl ">
                                    <div className=""><img src="/images/Visa2.png" alt="loding..." /></div>
                                    <div className=""><img src="/images/Mastercard2.png" alt="loding..." /></div>
                                    <div className=""><img src="/images/Discover2.png" alt="loding..." /></div>
                                    <div className=""><img src="/images/Amex2.png" alt="loding..." /></div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-4 my-6">
                                <div className="w-[66%]" >
                                    <label className=" text-base">Card Number</label>
                                    <input type="text" placeholder="Enter Cart nuber" className="w-full my-2 border py-1 px-2" />
                                </div>

                                <div className="w-[32%]" >
                                    <label className="text-base">CV2</label>
                                    <div className="flex  justify-between  items-center  my-2 border py-1 px-2">
                                        <input type="text" placeholder="123" className="w-full " />
                                        <div className="flex justify-center items-center"><BsQuestionCircle /></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-4 my-6">
                                <div className="" >
                                    <div className="text-base">Name&nbsp;on&nbsp;Card</div>
                                    <div className="border p-1 bg-white">
                                        <input type="text" placeholder="First Name" className="w-full" />
                                    </div>

                                </div>
                                <div className="" >
                                    <div>&nbsp;</div>
                                    <div className="border p-1 bg-white">
                                        <input type="text" placeholder="Last Name" className="w-full" />
                                    </div>
                                </div>
                                <div className="text-base" >
                                    <div className="">Expiration&nbsp;Date</div>
                                    <div className="border p-1 bg-white">
                                        <input type="text" placeholder="MM/YY" className="w-full" />
                                    </div>
                                </div>
                            </div>

                            <hr className="w-full my-4" />
                            <div className="flex justify-between items-center my-4">
                                <div className="text-gray-400">Billing Address</div>
                                <div className="txt-primary font-semibold text-sm">Auto Complete Fields</div>
                            </div>
                            <div className="mt-4">Address</div>
                            <div className="border p-1 bg-white" >
                                <input type="text" className="w-full" placeholder="Do not include city,state or zip code" />
                            </div>
                            <div className="flex justify-between items-center my-6 font-semibold gap-4">
                                <div className=""  >
                                    <div>City</div>
                                    <div className="border p-1 bg-white">
                                        <input type="text" className="w-full" placeholder="City" />
                                    </div>
                                </div>
                                <div className="" >
                                    <div>State</div>
                                    <div className="border p-1 bg-white">
                                        <input type="text" className="w-full" placeholder="State" />
                                    </div>
                                </div>
                                <div  >
                                    <div>Zip Code</div>
                                    <div className="border p-1 bg-white">
                                        <input type="text" className="w-full" placeholder="Zip Code" />
                                    </div>
                                </div>
                            </div>


                        </div>
                        <hr className="md:hidden my-10 mx-2" />
                        <div className="md:w-[30%]  mx-2 px-2">
                            <div className="bg-pure p-6"
                                style={{ boxShadow: "0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05)" }}>
                                <div className="font-bold">Order Summery</div>
                                <div className="flex justify-between items-center py-2">
                                    <div className="text-sm">Original price</div>
                                    <div className="text-sm">$47.97</div>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <div className="text-sm">Original price</div>
                                    <div className="text-sm">-$1.00</div>
                                </div>
                                <hr className="w-full mx-2" />

                                <div className="flex justify-between items-center py-4 font-bold">
                                    <div className="text-sm">Total</div>
                                    <div className="text-sm">$46.97</div>
                                </div>
                                <div className="text-sm">By clicking complete checkout  you agree to these </div>
                                <div className="txt-primary text-sm f">Terms of Service.</div>
                                <div className="pt-4">
                                    <button className="flex justify-center items-center bg-primary text-white w-full py-2 rounded" onClick={paymentProcess}>Complete Checkout</button>
                                </div>
                            </div>

                            {/* <div className="md:my-4 text-sm my-4">

                                <div>
                                    <span className="mr-2">
                                        <input type="checkbox" />
                                    </span>Save my payment information so payment is easy next time (Safe & Secure)</div>
                            </div> */}
                            <div className="my-4 text-sm">

                                <span className=" font-semibold">By clicking pay now you agree to</span> <span className="txt-primary">User Agreement Terms</span>
                                *You may easily cancel your Subscription without any obligation within 7 days online, by email or phone.
                                Future billing stops immediately upon cancellation. Upon completion of your 7 days trial, the package of
                                your choice will be charged. Unless you cancel, your subscription will be renewed after your initial term.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PopupSection>
                {/* Popup code  */}
                {open ? <>
                    <ModalAnimated open={open}>
                        <div className='bg-[#F8F9FB] w-screen h-screen flex justify-center items-center '>
                            <Paper>
                                {paymentDone ?
                                    <div className='payment_done'>
                                        <IoCheckmarkCircleSharp className="success_icon" />
                                        <span className="text-xl font-bold">Payment successful</span>
                                        <div>Your have successfully purchased classes successfully!<br />If you have any questions please <span className="text-blue-500 font-bold">Contact Us</span> </div>
                                        <div className='receipt_box'>
                                            <div>
                                                <div className='flex items-center justify-between my-1' onClick={() => setPaymentDetails((s: any) => !s)}>
                                                    <h3>Order Review</h3>
                                                    <ArrowDown2 size="15" />
                                                </div>
                                                {paymentDetails ? <>
                                                    <div className='font-bold'>
                                                        <div className="flex items-center justify-between">
                                                            <h3>The captivating actor - a comprehensive guide</h3>
                                                            <h2>$15.99</h2>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <h3>How to put a microphone on talent</h3>
                                                            <h2>$15.99</h2>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <h3>Actor boss kickstarter</h3>
                                                            <h2>$15.99</h2>
                                                        </div>
                                                    </div>
                                                </> : null}
                                            </div>


                                            <hr />
                                            <div>
                                                <div className='flex items-center justify-between'>
                                                    <h3>Subtotal</h3>
                                                    <h2>$15.99</h2>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <h3>Discount</h3>
                                                    <h2>$15.99</h2>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <h3 className="font-bold">TOTAL</h3>
                                                    <h2>$15.99</h2>
                                                </div>
                                            </div>

                                        </div>

                                        <h5 onClick={openPaymentCart}>Go to your classes</h5>
                                        <button className="profile_back my-3" onClick={openProfile}>Back to your profile</button>

                                    </div> :
                                    <div className='loading_box'>
                                        <div className='loader flex justify-center'>
                                            <img src='/svg/Processing card.svg' />
                                            {/* <img src='/images/Processing loader.png' /> */}
                                        </div>
                                        <div className='text-center mt-3 text-3xl font-bold'>Processing your payment...</div>
                                        <p className='text-center text-xl my-10 text-[#191919]'>Please don’t close this brower. It may take a while</p>
                                    </div>}
                            </Paper>
                        </div>
                    </ModalAnimated>
                </> : null}
            </PopupSection>
        </div>
    )
}

/* Popup model styled component css */
const Paper = styled(ModalPaper)`
    position: relative;
    max-width: 800px;
    width: 95%;
    margin: auto;
    border-radius: 12px;
    background: ${(p) => p.theme.paper};
    box-shadow: 0px 0px 15px rgba(9, 42, 81, 0.05), 0px 2px 12px 4px rgba(9, 42, 81, 0.15);
    text-align:center;
    &::before{
        content: '';
        position: absolute;
        top: -72px;
        left: 50%;
        transform: translateX(-50%);
        background: url(/svg/explore-talent.svg);
        width: 220px;
        height: 42px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    p{
        max-width: 318px;
        margin: 20px auto;
    }
    .payment_done{
        color:${p => rgba(p.theme.base, 0.8)};
        padding: 10px 0px 0px;
        &::after{
            background: linear-gradient(-45deg, transparent 16px, #f8f9fb 0), linear-gradient(45deg, transparent 16px, #f8f9fb 0);
            background-repeat: repeat-x;
            background-position: left bottom;
            background-size: 24px 32px;
            content: "";
            display: block;
            width: 100%;
            height: 32px;
            position: relative;
            top: 14px;
            left: 0px;
        }
        h1{
            color:${p => p.theme.primary};
            font-weight: 600;
            font-size: 22px;
            display: flex;
            align-items: center;
            gap: 2px;
            justify-content: center;
            svg {
                font-size: 26px;
            }
        }
        .receipt_box{
            border: 1px solid ${p => rgba(p.theme.base, 0.2)};
            border-radius: 4px;
            padding:20px;
            text-align: left;
            margin: 40px;
            @media (max-width:450px){
                margin: 10px;
            }
            > div {
                padding: 10px 0px;
            }
            h2 {
                font-weight: 700;
                font-size: 18px;
            }
        }
        .receipt_box h1 {
            font-size: 16px;
            gap: 8px;
            cursor: pointer;
        }
        h5{
            background:${p => p.theme.primary};
            color:${p => p.theme.pure};
            cursor: pointer;
            margin: 0px 40px;
            padding: 12px 0px;
            border-radius: 5px;
            font-weight: 700;
            font-size: 16px;
        }
        .success_icon{
          margin: 0px auto;
          color: #21c452;
          font-size: 150px;
        }
        .profile_back{
            font-weight: 700;
            color:${p => p.theme.primary};
        }
    }
    hr{ 
        margin: 2px 0px;
    }
    .loader{
        position:relative;
        height: 150px;
        width: 150px;
        margin: auto;
        &::before{
            content: '';
            background:url(/images/Processing_loader.png);
            height: 122px;
            width: 122px;
            background-size: cover;
            position: absolute;
            top: 50%;
            left: 50%;
            animation: Rotate 1s linear infinite;
        }
        img{
            width: 40px;

        }
    }
    @keyframes Rotate {
0%{
    transform: translate(-50%, -50%) rotate(360deg);
}
100%{
    transform: translate(-50%, -50%) rotate(0deg);
}
    }
    .loading_box {
        padding: 50px;
    }
`;
const PopupSection = styled.section`
    div#bg {
        background: ${p => rgba(p.theme.base, 0.1)};
    }
`
