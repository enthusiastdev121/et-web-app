import { rgba } from 'polished'
import React from 'react'
import styled, { useTheme } from 'styled-components'
export default function RoleProfile() {
    const theme = useTheme()
    return (
        <ProfileSection theme={theme}>
            <div className='profile_box'>
                <h1>Bert Harrison<img src='/svg/cd/actors.svg' /></h1>
                <p className='text-sm'>The narrator of the story, is a good friend to Mary Poppins. An everyman, Bert has many occupations, including hurdy-gurdy player, sidewalk artist and chimney sweep. Bert watches over the children as well as the goings on in Cherry Tree Lane. He has charm, speaks with a Cockney accent and is a song-and-dance man.</p>
                <h2>Seeking 1 talent for this role</h2>
                <div className='talent_specs'>
                    <h2>Talent specs:</h2>
                    <h3>Gender <span>Male</span></h3>
                    <h3>Ethnicity <span>Asian</span></h3>
                </div>
                <h3>Age <span>28 to 40</span></h3>
                <h3>Expired in <span>Aug 10, 2022, 3:00 PM</span></h3>
                <button>Apply now</button>
            </div>
        </ProfileSection>
    )
}
const ProfileSection = styled.section`
    .profile_box{
        box-shadow: 0px -3px 15px #0000001a, 0px 4px 4px #0000000d;
        border-radius: 8px;
        padding: 20px;
        background:${p => p.theme.pure};
        margin: 20px 0px;
        h1{
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            margin: 10px 0px;
            img{
                width: 26px;
            }
        }
        h2 {
            font-weight: 600;
            font-size: 16px;
            margin: 8px 0px;
        }
        .talent_specs h2 {
            font-weight: 700;
        }   
        h3 {
            font-weight: 600;
            font-size: 16px;
            span{
                color:${p => p.theme.primary};
            }
        }
        button {
            background: ${p => rgba(p.theme.primary, 0.9)};
            color: ${p => p.theme.pure};
            padding: 8px 20px;
            border-radius: 4px;
            margin-top: 12px;
        }
    }
`
