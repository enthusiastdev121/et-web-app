import React from 'react'
import { SingleInfo, MainInfo } from './styles'

export default function Info() {
    return (
        <MainInfo className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 xl:px-1 px-5">
            <SingleInfo>
                <h3>3,254</h3>
                <p>New roles posted this week</p>
            </SingleInfo>
            <SingleInfo>
                <h3>10,791,666</h3>
                <p>Modeling members and counting</p>
            </SingleInfo>
            <SingleInfo>
                <h3>521,782</h3>
                <p>Creators looking for Models</p>
            </SingleInfo>
            <SingleInfo>
                <h3>62</h3>
                <p>Years of insider knowledge</p>
            </SingleInfo>
           <img src="/images/ic_round-keyboard-double-arrow-down.png" className='droplogo'/>
        </MainInfo>
    )
}
