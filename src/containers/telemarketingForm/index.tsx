import { BlackOutline, PrimaryBtn, PrimaryBtnLight, PrimaryBtnOutline, PrimaryBtnRounded, PrimaryBtnSingle, PrimaryLight, SecondaryBtn, TertiaryBtn, TertiaryBtnOutline } from '@/styles/Btn.styled';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Input, { SelectBox, RadioBox, ConfirmBox, TextInput, SelectInput } from './Fields';
import TelePopup from 'components/telemarketing/TelePopup';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AllDataD } from 'types/telemarketing';
import CallTransfer from './CallTransfer';
import { Box, P } from './CloseScript';

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

export default function TelemarketingForm() {
    const [allData, setAllData] = useState<AllDataD>({} as AllDataD);
    const [slide, setSlide] = useState<number>(1);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const open = (text: string) => {
        setShowModal(true);
        setText(text);
    }
    const close = () => setShowModal(false);

    console.log(allData, "telemarketing allData");

    const renderItems = (slide: number) => {
        switch (slide) {
            case 1:
                return <FormOne allData={allData} setAllData={setAllData} />
            case 2:
                return <FormTwo allData={allData} setAllData={setAllData} />
            case 3:
                return <FormThree allData={allData} setAllData={setAllData} />
            case 4:
                return <FormFour allData={allData} setAllData={setAllData} slide={slide} setSlide={setSlide} />
            case 5:
                return <CallTransfer />
            default:
                return <></>;
        }
    }


    return (
        <>
            <Root className='flex flex-col justify-between'>

                <div>
                    {/* {slide !== 5 && <h4 className='title text-center font-bold mb-4 text-2xl'>To Caller</h4>} */}

                    {renderItems(slide)}
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
                        INFO_TEXT.map(({ title, desc }: { title: string, desc: string }) => {
                            return (
                                <div>
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

                {showModal && (
                    <Modal handleClose={close}>
                        <TelePopup text={text} handleClose={close} />
                    </Modal>
                )}
            </BottomButtons>

        </>
    )
}


const FormOne = ({ allData, setAllData }: any) => {

    const QUESTIONS = [{
        id: 1,
        text: 'When you registered online with Explore Talent ?',
        inputType: 'dateTime',
        key: 'register',


    }, {
        id: 2,
        text: 'What kind of opportunities were you looking for?',
        inputType: 'text',
        key: 'opportunity',


    }, {
        id: 3,
        text: 'Are you more into acting or modeling',
        inputType: 'select',
        options: ["Acting", 'Modeling', "Both"],
        key: 'role',


    }, {
        id: 4,
        text: 'Do you have any experience in acting / modeling?',
        inputType: 'select',
        options: ["Yes", 'No'],
        key: 'experience',


    }, {
        id: 5,
        text: 'What is the last project you worked on?  Check Notes',
        inputType: 'text',
        key: 'lastProject',


    }, {
        id: 6,
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


    },
    {
        id: 10,
        text: 'On a scale of 1-10, how motivated are you pursue your dream of Acting or Modeling?',
        inputType: 'select',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        key: 'rate',

    },
    {
        id: 11,
        key: 'finish',

    },
    ]



    const [state, setState] = useState<any>({

    })

    const [activeIndex, setActiveIndex] = useState(0);
    const [started, setStarted] = useState(false);




    const renderItem = () => {


        const activeItem = QUESTIONS[activeIndex];


        if (activeItem.key === 'finish') {

            return <></>

        }


        switch (activeItem.inputType) {
            case 'text':
                return <TextInput title={activeItem.text} className="self-stretch" onChange={e => {
                    // setActiveIndex(s => s > ind ? s : ind + 1)
                    setState((s: any) => ({ ...s, [activeItem.key]: e }))
                }} value={state[activeItem.key] || ''} type="text" />

            case 'dateTime':
                return <TextInput title={activeItem.text} className="self-stretch" onChange={e => {
                    // setActiveIndex(s => s > ind ? s : ind + 1)

                    setState((s: any) => ({ ...s, [activeItem.key]: e }))
                }} value={state[activeItem.key] || ''} type="datetime-local" />
            case 'select':
                return <>
                    <SelectInput value={state[activeItem.key] || ''} title={activeItem.text} options={activeItem.options} className="self-stretch w-full" onChange={e => {
                        // setActiveIndex(s => s > ind ? s : ind + 1)
                        setState((s: any) => ({ ...s, [activeItem.key]: e }))
                    }} />



                </>



            default:
                return <></>
        }


    }


    return (
        <div className='flex flex-col gap-5'>

            {!started ? <>

                <Box>

                    <P>
                        OB: Hi this is (Name) a talent advisor from Explore Talent, the reason for the call today (talent's name) is we came across your profile on our website and we would like to follow up regarding your profile and availability in doing auditions.
                    </P>

                    <P>

                        IB:  Hi this is ___from Explore Talent, how can I help you?
                    </P>

                    <P>
                        I have a few quick questions that the Casting Directors have requested that I ask, ok?
                    </P>

                    <div className='mt-3'>

                        <Button primary onClick={() => setStarted(true)}>Okay</Button>

                    </div>


                </Box>

            </> : <>










                {renderItem()}


                {QUESTIONS[activeIndex].key === 'finish' && <>


                    {state.rate < 6 ? <>

                        <Box>

                            <P>


                                Unfortunately we are looking for people that are highly motivated, what is holding you back?  If not able to resolve concern.. end call.
                            </P>

                        </Box>
                    </> : <>


                        <Box>
                            <P>


                                That’s great to hear! We are here to help motivated people like you achieve their dreams.  We currently have casting directors looking in your area for (Trending Gig project).  Let me get you over to my senior talent advisor, who will get you set up to start getting auditions.  Please Hold while I bring them on the line.
                            </P>

                        </Box>
                    </>}


                </>}



                {
                    <div className='flex justify-center items-center mt-5 gap-3'>
                        <PrimaryBtnLight className={`btn ${activeIndex === 0 ? "hidden" : "block"}`}
                            onClick={() => {
                                if (activeIndex !== 0) {
                                    setActiveIndex(s => s - 1)
                                }
                            }}>Back</PrimaryBtnLight>
                        <PrimaryBtn className={`btn ${activeIndex === QUESTIONS.length - 1 ? "hidden" : "block"}`}
                            onClick={() => {
                                if (activeIndex < QUESTIONS.length - 1) {
                                    setActiveIndex(s => s + 1)
                                }
                            }}>Next</PrimaryBtn>
                    </div>
                }

            </>}









        </div>
    )
}
const FormTwo = ({ allData, setAllData }: any) => {
    return (
        <div className='flex flex-col gap-5'>
            <Input title="What is your zip code?" className="" selectedValue="zipCode" allData={allData?.zipCode} setAllData={setAllData} />
        </div>
    )
}

const FormThree = ({ allData, setAllData }: any) => {
    return (
        <div className='flex flex-col gap-5'>
            <SelectBox selectedValue="licence" title="Is your drivers license currently in good standing?" options={["Yes - Good Licence", "No - Bad Licence"]} allData={allData?.licence} className="" setAllData={setAllData} />

            {allData?.licence && <SelectBox selectedValue="DUI" title="Have you had 1 or more DUI’s in the last 7 years?" allData={allData?.DUI} options={["No - No DUI's", "Yes - I have a DUI"]} className="" setAllData={setAllData} />}

            {allData?.DUI && <SelectBox selectedValue="rent" title="Do you own or rent your home?" allData={allData?.rent} options={["rent", "own"]} className="" setAllData={setAllData} />}
        </div>
    )
}

const FormFour = ({ allData, setAllData, slide, setSlide }: any) => {
    return (
        <div className='flex flex-col gap-5'>
            <RadioBox selectedValue="carQuantity" title="How many cars in your household?" options={[0, 1, 2]} allData={allData?.carQuantity} className="" setAllData={setAllData} />

            {allData?.carQuantity?.toString() && <Input title="How do you spell your FIRST NAME?" className="" selectedValue="firstName" allData={allData?.firstName} setAllData={setAllData} />}

            {allData?.firstName && <ConfirmBox title="Good news! I found you a great discount. My agent is going to join the line. Is that ok?" selectedValue="confirmation" allData={allData?.confirmation} setAllData={setAllData} slide={slide} setSlide={setSlide} />}
        </div>
    )
}

const Root = styled.div`
    min-height: 600px;
    justify-content: center;
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

const BottomButtons = styled.div`
  
`


