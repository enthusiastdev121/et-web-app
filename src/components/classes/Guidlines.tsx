import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsArrowRightShort } from "react-icons/bs";
import styled from "styled-components";

export default function Guidlines() {
    return (
        <Container>
            <Image src="/images/guideline-bg.png" alt="talent" width={390} height={319} />

            <GradContainer>
                <div className="font-bold text-xl mb-2">How to book acting jobs?</div>
                <p className="text-sm mb-7">The 25 guidelines to booking technique</p>

                <Link href="#">
                    <a className="underline flex items-center justify-center gap-2">Find out more <span className="text-xl"><BsArrowRight /></span></a>
                </Link>
            </GradContainer>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    display: flex;
    border-radius: 4px;
    min-width: 320px;

    @media(min-width: 768px) {
        min-width: 300px;
    }
    @media(min-width: 1340px) {
        min-width: 350px;
    }
    @media(min-width: 1680px) {
        min-width: 390px;
    }
`

const GradContainer = styled.div`
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
    border-radius: 4px;
    margin: 0 auto;
    width: 98%;
    color: #fff;
    text-align: center;
    padding: 21px 0;
    padding-top: 31px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`