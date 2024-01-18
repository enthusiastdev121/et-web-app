import { BROKEN_IMAGE_FALLBACK, EMPTY_IMAGE_SQUARE, NEW_MESSAGE_SOUND } from '@/utils/constants/resources';
import Button from 'components/Button';
import { useMessagingV2 } from 'context/MessagingContextV2';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { rgba } from 'polished';
import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components'
import useSound from 'use-sound';

const SHOW_TIMEOUT = 9;

export default function FloatingMessage() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [playSound] = useSound(NEW_MESSAGE_SOUND);
    const { floatingMessage } = useMessagingV2();

    useEffect(() => {
        if (show) {
            playSound();
        }
    }, [show, playSound])


    useEffect(() => {
        let tm: any;
        if (show) {
            tm = setTimeout(() => {
                setShow(false)
            }, 1000 * SHOW_TIMEOUT)
        }

        return () => {
            if (tm) {
                clearTimeout(tm)
            }
        }
    }, [show, floatingMessage.items])


    useEffect(() => {

        if (floatingMessage.items && !router.pathname.includes('messages')) {
            setShow(true)
        }

    }, [floatingMessage.items])

    console.log("SHOW", show, floatingMessage)

    return (
        <AnimatePresence>
            {show &&
                <Root className='shadow-lg rounded-xl px-3 py-2 ' initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.9 }} >

                    <div className='header flex justify-between mb-3 items-center'>

                        <div className='flex gap-2 items-center '>
                            <div className='aspect-square h-8 overflow-hidden object-cover rounded-full'>
                                <img src={floatingMessage.user?.pic || EMPTY_IMAGE_SQUARE} />
                            </div>
                            <div className='name text-sm font-semibold'>
                                {floatingMessage.user?.name}
                            </div>
                        </div>

                        <div className='close aspect-square h-9 flex items-center justify-center cursor-pointer' onClick={() => setShow(false)} >
                            <IoClose size={20} />
                        </div>

                    </div>

                    <div className='messages text-xs flex flex-col gap-2 opacity-70'>

                        {floatingMessage.items?.map((i, ind) => {
                            return (
                                <div className='item' key={ind} >
                                    {i.type === 'text' ? i.text : "Send a media"}
                                </div>
                            )
                        })}

                    </div>

                    <div className='mt-3'>
                        <Link href='/messages'>
                            <a>
                                <button className={`primary ${btnClass}`} onClick={() => setShow(false)} >
                                    View
                                </button>
                            </a>
                        </Link>
                        {/* <Button primary size='small'>View </Button> */}
                    </div>
                </Root>}
        </AnimatePresence>
    )
}

const btnClass = `px-2 py-1 rounded-md text-sm font-regular`;


const Root = styled(motion.div)`
position: fixed;
bottom: 6rem;
right: 2rem;
background: ${p => p.theme.pure};
z-index: 99;


.close{
    background: ${p => rgba(p.theme.base, 0.12)};
    border-radius: 120px;
    overflow: hidden;
    color: ${p => rgba(p.theme.base, 0.7)};
}


.messages{
    .item{
        width: 90vw;
        max-width: 360px;
        max-height: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        /* white-space: nowrap; */
    }
}


button{
    background: transparent;
    border: none;

    &.primary{
        background: ${p => p.theme.primary};
        color:#fff;
    }
}
`;