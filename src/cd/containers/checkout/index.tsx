
import Link from 'next/link'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import PaymentMethod from './PaymentMethod'
import PostProject from './PostProject'
import Sidebar from './Sidebar'
export default function Checkout() {
    const theme = useTheme()
    return (
        <CheckoutSection theme={theme}>
            <ContentSection>
                <h1 className='font-bold sm:text-3xl text-2xl'>Checkout & Post Project</h1>
                <p className=''>Select package, enter your details and complete payment to post this job.</p>
                <PostProject />
                <PaymentMethod />
                <p>Upon clicking on complete payment you  have read and agree to the <Link href='/'>Terms & Conditions</Link></p>
            </ContentSection>
            <SideSection>
                <Sidebar />
            </SideSection>
        </CheckoutSection>
    )
}
const CheckoutSection = styled.section`
    display: flex;
    padding: 20px;
    gap: 20px;
    max-width: 1080px;
    margin: 0 auto;
    width:100%;
    @media (max-width:450px){
        padding: 10px;
    }
    
/* Hide Arrows From Input Number */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

`
const ContentSection = styled.section`
    flex:1;
    width:100%;
    & > section{
        background: ${p => p.theme.pure};
        box-shadow: 0px -3px 15px #0000001a, 0px 4px 4px #0000000d;
        border-radius: 8px;
        padding: 20px;
        margin: 30px 0px;
        @media (max-width:450px){
            padding: 14px;
        }
    }
    a {
        color: ${p => p.theme.primary};
    }
    
`
const SideSection = styled.section`
    height: 100%;
    width: 320px;
    position: sticky;
    top: 86px;
    @media (max-width:768px){
        display:none;
    }
    & > section{
        background: ${p => p.theme.pure};
        box-shadow: 0px -3px 15px #0000001a, 0px 4px 4px #0000000d;
        border-radius: 8px;
        padding: 20px;
        margin: 24px 0px;
        @media (max-width:450px){
            padding: 14px;
        }
    }
`