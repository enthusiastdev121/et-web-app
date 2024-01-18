import { BlackOutline, PrimaryBtn, PrimaryBtnLight, PrimaryBtnOutline, PrimaryBtnRounded, PrimaryBtnSingle, PrimaryLight, SecondaryBtn, TertiaryBtn, TertiaryBtnOutline } from '@/styles/Btn.styled';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { SelectBox, RadioBox, ConfirmBox, TextInput, SelectInput } from './Fields';
import TelePopup from 'components/telemarketing/TelePopup';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';


const INFO_TEXT = [
    {
        id: 1,
        title: 'Caller wants callback',
        desc: "Okay, let me get my agent to schedule a time with you.",
    },
    {
        id: 2,
        title: 'Who is this?',
        desc: "I'm with Consumer Insurance Association. We work with State Farm, Allstate, and Farmers agents in your area to save your money on your car insurance. Would you like to save a few hundred dollars today with no obligation?",
    },
    {
        id: 3,
        title: "I'm already with...",
        desc: "Well chances are you can get a better deal from one of other carriers. Let’s see what their price is. This will only take a minute.",
    },
    {
        id: 4,
        title: 'Callback request',
        desc: "Well chances are you can get a better deal from one of other carriers. Let’s see what their price is. This will only take a minute.",
    },
]

const QUESTIONS = [{
    id: 1,
    text: `What’s the billing address on your card?`,
    inputType: 'text',
    key: 'billingAddress',


}, {
    id: 2,
    text: 'Best phone number to reach you?',
    inputType: 'text',
    key: 'phone',


}, {
    id: 3,
    text: 'Best email address? ',
    inputType: 'text',
    key: 'email',


}, {
    id: 4,
    text: 'And the card you want to use for the $119.94 is that a visa, master or American Express? ',
    inputType: 'select',
    options: ["VISA", "American Express", "Master"],
    key: 'cardType',


}, {
    id: 5,
    text: 'What sparked your interest to pursue a career in the entertainment industry?',
    inputType: 'text',
    key: 'interest',


}, {
    id: 7,
    text: 'What are your career goals? Is this something you want to do Full time or Part time?',
    inputType: 'select',
    options: ["Full time", "Part time"],
    key: 'duration',

}, {
    id: 8,
    text: 'Are you currently working?',
    inputType: 'select',
    options: ['Yes', "No"],
    key: 'working',

}, {
    id: 9,
    text: 'Do you have time for auditions?',
    inputType: 'select',
    options: ['Yes', "No"],
    key: 'time',


}, {
    id: 10,
    text: 'On a scale of 1-10, how motivated are you pursue your dream of Acting or Modeling?',
    inputType: 'select',
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    key: 'rate',

}]



const Step1 = ({ onNext }: any) => {
    return (
        <Box>

            <P>
                Hi this is ___ a senior talent advisor here at explore talent.  My Colleague let me know you are very interested in pursuing a career in the Entertainment Industry.
            </P>
            <P>

                Let me pull up your profile and see what we can get started with.
            </P>

            <P  >

                Let me tell you I’m looking here at your profile, (great pictures, by the way), and I see you have these matched projects:  “present at least 2”
                <ul className='list-disc mb-2 mt-2'>
                    <li className='ml-8' >
                        Project1 w/ pay rate
                    </li>
                    <li className='ml-8'>
                        Project2 w/ pay rate
                    </li>

                </ul>
            </P>

            <P >
                Let’s get you submitted to these projects, ok?
            </P>
            <div className='mt-4'>


                <Button primary onClick={onNext} >Okay</Button>
            </div>

        </Box>
    )

}
const Step2 = ({ onNext }: any) => {
    return (
        <Box>

            <P>
                Ok great, let’s go ahead and complete your registration to get you started.
            </P>
            <P>

                We prefer to work with talent for 6 months and above
                It gives us an opportunity to find the right matches for you, get you a couple jobs and get you some pay so you can see that this is a viable option for you.

            </P>

            <P  >
                I’m not going to just stop at one audition, I am going to send you multiple matched auditions ok?
            </P>

            <Button primary onClick={onNext} >Continue</Button>

        </Box>
    )

}
const Step3 = ({ onNext }: { onNext: () => any }) => {

    const [alternate, setAlternate] = useState(false);

    return (
        <Box>

            {!alternate ? <>

                <P>
                    Let me give you the breakdown and we can make an informed decision.
                </P>
                <P>


                    Now for the registration, there are few different options.
                </P>
                <P>

                    If you want the best results I recommend a 1-year VIP membership, which gives you unlimited access to the website and membership benefits, plus you get your own talent advisor who will submit your profile to at least 3 matching roles per day on your behalf for only $288.73
                </P>
                <P>

                    OR, if you would prefer
                </P>
                <P>

                    The 6-month pro membership is $188.00 which gives you unlimited access to the website and membership benefits for 6 months, but you will need to be proactive and do your own submissions.

                </P>
                <P>

                    Where do you feel comfortable, would you like to set up the VIP and have me to do your submissions or do you prefer to set up your own submissions?

                </P>


                <div className='flex gap-3 justify-center'>


                    <Button red light onClick={() => setAlternate(true)}  >Decline</Button>
                    <Button primary onClick={onNext} >Accept</Button>
                </div>

            </>
                :

                <>
                    <P>
                        Because I believe in you and really want you to try out the membership and see what it can do for you, I can give you the 3-month pro membership for only $99, which gives you unlimited access to the website and members benefits for 3 months.Does that sound like it would work for you?

                    </P>
                    <div className='flex gap-3 justify-center'>

                        <Button red light onClick={onNext} >Decline</Button>
                        <Button primary onClick={onNext}>Accept</Button>
                    </div>



                </>
            }



        </Box >
    )

}
const Step4 = ({ onNext }: { onNext: () => any }) => {

    const [alternate, setAlternate] = useState(false);

    return (
        <Box>



            <P>
                So, let’s go ahead and get you set up and go to work?

            </P>
            <P>

                Grab a pen, a paper and the credit card you want to use to pay, <b>{`<talent’s name>`}</b>.  Just so I get this right go ahead fill the details below ?

            </P>

            <div className=' flex flex-col gap-4 mb-4'>

                <InputContainer>
                    <label>First name</label>
                    <Input
                        onChange={
                            () => { }}
                        type="text" name="fname" />
                </InputContainer>
                <InputContainer>
                    <label>Last name</label>
                    <Input
                        onChange={
                            () => { }}
                        type="text" name="lname" />
                </InputContainer>
                <InputContainer>
                    <label>What’s the billing address on your card?</label>
                    <Input
                        onChange={
                            () => { }}
                        type="text" name="lname" />
                </InputContainer>
                <InputContainer>
                    <label>Best phone number to reach you?</label>
                    <Input
                        onChange={
                            () => { }}
                        type="text" name="lname" />
                </InputContainer>
                <InputContainer>
                    <label>Best email address? </label>
                    <Input
                        onChange={
                            () => { }}
                        type="text" name="lname" />
                </InputContainer>
                <InputContainer>
                    <label>And the card you want to use for the $119.94 is that a visa, master or American Express? </label>
                    <Input
                        onChange={
                            () => { }}
                        type="text" name="lname" />
                </InputContainer>

            </div>




            <div className='flex gap-3 justify-center'>

                <Button primary onClick={onNext}>Continue</Button>
            </div>





        </Box >
    )

}


const Step5 = ({ onNext }: any) => {

    const [showOffer, setShowOffer] = useState(false);


    return (

        <Box>

            {!showOffer ? <>


                <P>Before I activate your membership, would you like to hear about a better offer?  We have a VIP membership that is for 2 to 3 years.</P>


                <div className='flex gap-3 justify-center'>

                    <Button red light onClick={onNext} >No</Button>
                    <Button primary onClick={() => setShowOffer(true)}>Yes</Button>
                </div>

            </>

                :
                <>

                    <P>


                        The VIP membership gives you

                        <Ul>


                            <li>Your own talent advisor that submits your profile to at least 3 matched auditions per day.</li>
                            <li>Unlike the pro membership which is a self-submission.</li>
                            <li>Explore Talent will be sending you notifications through email or text.</li>
                            <li>Make sure you check your text messages and email. </li>
                            <li>Please respond as quickly as possible.</li>
                        </Ul>

                    </P>
                    <P>

                        The VIP membership packages start at
                        <Ul>

                            <li>2 years for $475 (That’s only $19.80/month)</li>
                            <li>3 years for $575 (That’s only $15.97/month)</li>

                        </Ul>
                    </P>
                    <P>

                        If you break it down to the monthly price, the one the one-year membership at $288 is $24 monthly compared to the 2-year membership at $475 is $19.80 per month and the 3-year membership at $575 is only $15.97 per month.
                    </P>
                    <P>

                        I highly recommend the 3-year membership as you can save more money this way.  Which would you prefer?
                    </P>

                    <div className='flex gap-3 justify-center'>

                        <Button red light onClick={onNext} >Decline</Button>
                        <Button primary onClick={onNext}>Accept</Button>
                    </div>

                </>
            }


        </Box>

    )
}



const Step6 = ({ onNext }: any) => {

    return (
        <Box>
            <P>Now I want you to make your profile more attractive to casting directors.  Please upload more pictures, like 5 headshots and 5 body shots showing different looks that show the range of your personality. </P>

            <Button primary onClick={onNext}>Finish</Button>
        </Box>
    )

}



export default function CloseScript() {

    const [state, setState] = useState<any>({

    })

    const [activeIndex, setActiveIndex] = useState(0);




    const renderStep = () => {

        switch (activeIndex) {

            case 0:
                return <Step1 onNext={() => setActiveIndex(s => s + 1)} />
            case 1:
                return <Step2 onNext={() => setActiveIndex(s => s + 1)} />
            case 2:
                return <Step3 onNext={() => setActiveIndex(s => s + 1)} />
            case 3:
                return <Step4 onNext={() => setActiveIndex(s => s + 1)} />
            case 4:
                return <Step5 onNext={() => setActiveIndex(s => s + 1)} />
            case 5:
                return <Step6 onNext={() => setActiveIndex(0)} />
            default:
                return <Step1 />

        }

    }




    return (
        <>
            <Root className='flex flex-col justify-between'>

                <div>



                    {renderStep()}

                </div>
                {/* {
                    slide !== 5 && <div className='flex justify-center items-center mt-5 gap-3'>
                        <PrimaryBtnLight className={`btn ${slide === 1 ? "hidden" : "block"}`}
                            onClick={() => { setSlide(slide - 1) }}>Back</PrimaryBtnLight>
                        <PrimaryBtn className={`btn ${slide === 4 ? "hidden" : "block"}`}
                            onClick={() => { setSlide(slide + 1) }}>Next</PrimaryBtn>
                    </div>
                } */}

            </Root>
            <BottomButtons className='flex flex-col gap-5 justify-center items-center mt-7 px-5'>
                <div className='flex flex-wrap items-center justify-center gap-5'>

                    {
                        INFO_TEXT.map(({ title, desc, id }: any) => {
                            return (
                                <div key={id}>
                                    <Button size='small' outlined onClick={() => open(desc)}>
                                        {title}
                                    </Button>
                                </div>
                            )

                        })
                    }
                </div>

                <div>
                    <Button size='small' outlined primary onClick={() => { open("Are you sure? I saved the last person $450. It’s free and takes 8 minutes. Are you currently insured?") }}>Not interested</Button>
                </div>

            </BottomButtons>

        </>
    )
}



const Root = styled.div`
    /* min-height: 600px; */
    width: 850px;
    background-color: ${p => p.theme.paper};
    padding: 1.5rem 3rem;
    color: ${p => p.theme.darkSurface};
    @media screen and (max-width: 1050px) {
        width: 100%;
        padding: 1.5rem 2rem;
    }
    .title {
        text-transform: uppercase;
    }

    

`;

export const P = tw.p`text-lg mb-6`;
export const Box = styled.div`
  background-color: #e8eefa;
  padding: 2rem;
  border-radius: 5px;
  border: 2px solid #d0dcfa;
`;


const BottomButtons = styled.div`
  
  `

const InputContainer = styled.div`
display: flex;
flex-direction: column;


label{
    font-size: 14px;
    opacity: 0.7;
    margin-bottom: 4px;
}

`;

const Input = tw.input`rounded-md border-2 px-3 bg-pure text-base transition-all py-2 outline-none`;

const Ul = styled.div`

li{
    margin-left: 3rem;
}
`;
