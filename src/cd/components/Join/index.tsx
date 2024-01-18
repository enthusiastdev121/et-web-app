import React from 'react'
import Form from './formSection'
import LeftBanner from './leftBanner'
import styled from 'styled-components'
export default function CdJoin() {
    return (
        <JoinSection>
            <LeftBanner />
            <Form />
        </JoinSection>
    )
}
const JoinSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    gap: 10px;
& > section:nth-child(1){                   
    width: 28%;
    height: 100%;
    @media (max-width:768px){
        display: none;
        width: 0%;
    }
}
& > section:nth-child(2){
    width: 72%;
    @media (max-width:768px){   
        width: 100%;
    }
}
`