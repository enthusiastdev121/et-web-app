import { rgba } from 'polished'
import React from 'react'
import styled, { useTheme } from 'styled-components'
export default function Sidebar() {
    const theme = useTheme()
    return (
        <SidebarSection theme={theme}>
            <h2 className='text-base font-bold'>Checkout summary</h2>
            <div className='coupon mt-3'>
                <input type='text' placeholder='Promote code' />
                <button>Apply</button>
            </div>
            <div className='detail_box'>

                <p>Package 1 <span>$24.95</span></p>
                <p>Subtotal<span>$24.95</span></p>
            </div>
            <div className='flex justify-between'>
                <h2 className='font-bold text-lg'>Total</h2>
                <h2 className='font-bold text-lg'>$24.95</h2>
            </div>
        </SidebarSection>
    )
}
const SidebarSection = styled.section`
    .coupon {
        input {
            padding: 8px;
            border: 1px solid ${p => rgba(p.theme.base, 0.2)};
            border-radius: 6px 0px 0px 6px;
        }
        button{
            background: ${p => rgba(p.theme.base, 0.5)};
            padding: 9px 8px;
            color:${p => p.theme.pure};
            border-radius: 0px 6px 6px 0px;
        }
    }
    .detail_box {
        border: 1px solid ${p => rgba(p.theme.base, 0.2)};
        margin: 20px 0px;
        border-width: 1px 0px;
        min-height: 200px;
        p {
            margin: 10px 8px;
            display: flex;
            justify-content: space-between;
            font-weight: 500;
        }
    }
`