import React from 'react'
import styled from "styled-components";
import { rgba } from "polished";

export default function SingleInvitation() {
    return (
        <Container>
            <Nav >
                <div className='single-invitation-user'>
                    <div className='image-user-single'>
                        <img
                            src="/images/img-2.png"
                            alt="profile"
                            className='user-image'
                        />
                    </div>
                    <div className='data-user-single'>
                        <h5>Rangga Cahya <span className='invited-color'> has invited you for the role </span>
                            <span className='invited-name'> “Beth Harrison” </span> </h5>
                        <p>30 minutes</p>
                        <div className='view-invitation'>
                            <p>Mary Poppins Jr. Auditions in Michigan and in the t... Mary Poppins Jr. Auditions in Michigan and in the t...</p>
                            {/* <h6>Role: “Beth Harrison”</h6> */}
                            <div className='location'>

                                {/* <h5> <span><img src="/images/location.png" alt=""/></span> Cleveland, OH</h5> */}
                                <button className='mt-2'>View Invitation</button>

                            </div>
                        </div>
                    </div>

                </div>

            </Nav>
            <Nav >
                <div className='single-invitation-user'>
                    <div className='image-user-single'>
                        <img
                            src="/images/img-2.png"
                            alt="profile"
                            className='user-image'
                        />
                    </div>
                    <div className='data-user-single'>
                        <h5>Rangga Cahya <span className='invited-color'> has invited you for the role </span>
                            <span className='invited-name'> “Beth Harrison” </span> </h5>
                        <p>30 minutes</p>
                    </div>

                </div>
                <div className='view-invitation'>
                    <p>Mary Poppins Jr. Auditions in Michigan and in the t... Mary Poppins Jr. Auditions in Michigan and in the t...</p>
                    {/* <h6>Role: “Beth Harrison”</h6> */}
                    <div className='location'>

                        {/* <h5><span><img src="/images/location.png" alt=""/></span>Cleveland, OH</h5> */}
                        <button className='mt-2'>View Invitation</button>

                    </div>
                </div>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
    & >div :first-child{
        border-bottom:none;
    }
`;

const Nav = styled.div`
// border-top:1px solid #E5E7EB;
// border-bottom:1px solid #E5E7EB;


.single-invitation-user{
    display:flex;
    align-items:center;
    padding:8px 15px;


.status{
    width:10px;
    height:10px;
    border-radius:50%;
    background:${p => p.theme.primary};
    margin-left:22px;
}

.image-user-single{
    img{
        min-width:80px;
        height:80px;
        border-radius:50%;
    }
}

.data-user-single{
    margin-left:10px;

    h5{
        font-size:13px;
        height:32px;
        line-height:16px;
        color:${p => p.theme.base}
        font-weight: 600;
        width:280px;

        @media (max-width:768px) {
            width:200px;

        }

        .invited-color{
            color: ${p => rgba(p.theme.base, 0.6)};
        font-weight: 400 !important;
        }

        .invited-name{
            color: ${p => p.theme.primary};
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
        }
       
    }


    p{
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        height:13px;
        line-height:13px;
        margin-top:5px;
        color: ${p => rgba(p.theme.base, 0.6)};
    }
    }
}

.view-invitation{
    padding:5px 15px 11px 15px;

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: ${p => p.theme.base};
        height:16px;
        line-height:16px;
        width:265px;
        overflow:hidden;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width:768px) {
            width:290px;

        }
    }

    h6{
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
         color: ${p => p.theme.base};
        height:18px;
        margin-top:5px;
        line-height:18px;
    }

    .location{
        display:flex;
        align-items:center;
        margin-top:5px;
        justify-content:space-between;

        h5{
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            color: ${p => p.theme.primary};
            margin-left:12px;
            display:flex;
            align-items:center;

            span{
                margin-right:10.13px;
            }
        }

        button{
            background: ${p => p.theme.primary};
            border-radius: 4px;
            padding:6px 16px;
            color: #FFFFFF;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
        }
        
    }
}

`;