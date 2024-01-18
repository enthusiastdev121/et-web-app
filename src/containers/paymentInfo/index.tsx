import React from 'react'
import styled from 'styled-components'
import CountdownPayment from './CountdownPayment';
import PaymentCard from './PaymentCard';

export default function PaymentInfo() {

    return (
        <Root>
            <div className='bg-primary-clr md:pt-20 pt-10 md:pb-32 pb-28 px-5 flex flex-col justify-center items-center gap-3 text-white'>
                <h2 className='lg:text-5xl md:text-4xl text-3xl font-semibold'>Complete Payment Info</h2>
                <p>Instant Access | Proven Value | Real Results </p>
                <CountdownPayment />
            </div>
            <div className='relative bottom-20'>
                <PaymentCard />
            </div>
            {/* ========= countdown timer ========== */}
        </Root>
    )
}

const Root = styled.div`
  .table-header {
    th, td {
      padding: 10px 40px;
    }
  }
`;
