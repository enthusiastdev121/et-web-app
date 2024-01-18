import { rgba } from 'polished'
import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { FiArrowRight } from 'react-icons/fi'
import ModalAnimated, { ModalPaper } from 'components/ModalAnimated'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { FiCopy } from 'react-icons/fi'
import { BiChevronDown } from 'react-icons/bi'
import { BiDownload } from 'react-icons/bi'

export default function PaymentMethod() {
    const [open, setOpen] = useState(false)
    const [paymentDone, setPaymentDone] = useState(false)
    const [referenceNumber, setReferenceNumber] = useState('7583235087730384035')
    const theme = useTheme()
    const paymentProcess = () => {
        setOpen(true)
        console.log('before intervarkl')
        setTimeout(() => {
            setPaymentDone(true)
            console.log('after intervarkl')
        }, 2000)

    }
    const copy = () => {
        console.log('copy ', referenceNumber)
        navigator.clipboard.writeText(referenceNumber);
    }
    return (
        <ContentSection theme={theme}>
            <h1>Payment method</h1>
            <div className='check_box'>
                <input type="radio" id="New" name="method" checked />
                <label htmlFor="New">Add New Billing Method</label>
                <input type="radio" id="Existing" name="method" />
                <label htmlFor="Existing">Use Existing Billing Method</label>
            </div>
            <div className='card_details'>
                <label>Card number</label>
                <div className='md:flex block gap-6 items-center '>
                    <input type='number' placeholder="0000 000 00000" />
                    <div className='flex gap-3 '>
                        <img src='/images/Visa2.png' />
                        <img src='/images/Mastercard2.png' />
                        <img src='/images/Discover2.png' />
                        <img src='/images/Amex2.png' />
                    </div>
                </div>
                <div className='flex gap-4 code_box'>
                    <div>
                        <label>Security code</label>
                        <input type='number' placeholder='000' />
                    </div>
                    <div>
                        <label>Expiration date</label>
                        <input type='text' placeholder='DD/YY' />
                    </div>
                </div>
                <label>Name on card</label>
                <input type='text' placeholder="Name" />

            </div>
            {/* <div className='save_card my-4'>
                <input type="checkbox" id="Save" />
                <label htmlFor="Save"> Save my payment information so payment is easy next time (Safe & Secure)</label>
            </div> */}
            <button className='mt-2' onClick={paymentProcess}>Complete payment & Post <FiArrowRight /></button>

            <PopupSection>
                {/* Popup code  */}
                {open ? <>
                    <ModalAnimated open={open}>
                        <div className='bg-[#F8F9FB] w-screen h-screen flex justify-center items-center '>
                            <Paper>
                                {paymentDone ?
                                    <div className='payment_done'>
                                        <h1><span><RiCheckboxCircleFill /></span>Payment successful</h1>
                                        <p>11:23:40 pm June 21, 2022</p>
                                        <div className='receipt_box'>
                                            <div className='flex items-center justify-between'>
                                                <h3><b>Customer receipt</b></h3>
                                                <img src='/images/Visa2.png' />
                                            </div>
                                            <hr />
                                            <div className='flex items-center justify-between'>
                                                <div>
                                                    <h3>Reference number</h3>
                                                    <h2>{referenceNumber}</h2>
                                                </div>
                                                <h1 onClick={copy}>Copy <span><FiCopy /></span></h1>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <div>
                                                    <h3>Order review</h3>
                                                    <h2>$111.55 Total Post Project</h2>
                                                </div>
                                                <h1 onClick={() => console.log('')}>More details <span><BiChevronDown /></span></h1>
                                            </div>

                                        </div>
                                        <h5>Congratulations! Your job post is now ready for the talents to join.</h5>
                                        <button>Check your job post</button>
                                        <button className='download'><BiDownload />Download</button>
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

        </ContentSection>
    )
}
const ContentSection = styled.section`
    h1{
        font-weight: 700;
        font-size: 18px;
    }
    hr{
        margin: 40px 0px;
    }
    .card_details{
        label {
            font-weight: 600;
            font-size: 16px;
            display: block;
        }
        input{  
            border: 1px solid ${p => rgba(p.theme.base, 0.2)};
            max-width: 325px;
            width: 100%;
            padding: 10px;
            border-radius: 4px;
            margin: 10px 0px;
        }
        .code_box{
            max-width: 325px;
        }
    }
    .save_card{
        label , input{
            cursor:pointer;
        }
    }
    .check_box {
        display: grid;
        gap: 8px;
        align-items: center;
        grid-template-columns: 20px 1fr 20px 1fr;
        background:${p => rgba(p.theme.base, 0.05)};
        padding: 14px;
        border-radius: 8px;
        margin: 16px 0px;
        font-weight: 600;
        @media (max-width:450px){
            grid-template-columns: 20px 1fr;
        }
        label:nth-child(2) {
            margin-right: 20px;
        }

    }
    button{
        background:${p => p.theme.primary};
        color:${p => p.theme.pure};
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 22px;
        border-radius: 6px;
        font-weight: 600;
        transition :all 0.5s;
        
    }
    button:hover{
        box-shadow: rgb(0 0 0 / 54%) 0px 4px 13px;
    }

/*Radio button and checkbox size   */
input#New , input#Existing{
    width: 16px;
    height: 16px;
}
input#Save{
    width: 14px;
    height: 14px;
}
`
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
        padding: 40px 0px 0px;
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
            font-weight: 700;
            font-size: 16px;
            margin: 20px;
        }
        > button{
            margin:10px auto;
        }
        button.download {
            background: none;
            color: ${p => p.theme.primary};
            position: absolute;
            bottom: -70px;
            margin: 0px;
            left: 50%;
            transform: translateX(-50%);
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