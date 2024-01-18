import React, { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { TiWarning } from 'react-icons/ti'
export default function SideBar({ value }: propType) {

    const [data, setData] = useState(value)
    const [progress, setProgress] = useState(0)
    const theme = useTheme()
    // Code for progress bar on sidebar
    useEffect(() => {
        const a = value
        if (a?.projectDetails?.title?.length > 1) {

            setProgress(100)
        }
        else {

        }
    }, [value])
    return (
        <ParentSection theme={theme}>
            <div className="progress_section">
                <div className={progress === 0 ? 'progress_box in_action' : 'progress_box'}>
                    <span className={progress === 0 ? 'icon' : 'icon in_action'}><TiWarning /></span>
                    <h2>Project details <span >{progress}%</span></h2>
                    <div className='progress'><span style={{ width: `${progress}%` }}></span></div>
                    <ul>
                        <li>No Title</li>
                        <li>No Description</li>
                    </ul>
                </div>
                <div className='progress_box'>
                    <span className='icon'><TiWarning /></span>
                    <h2>Roles <span>0%</span></h2>
                    <div className='progress'><span></span></div>
                </div>
                <div className='progress_box'>
                    <span className='icon'><TiWarning /></span>
                    <h2>Payment information <span>0%</span></h2>
                    <div className='progress'><span></span></div>
                </div>
                <div className='progress_box'>
                    <span className='icon'><TiWarning /></span>
                    <h2>Key dates <span>0%</span></h2>
                    <div className='progress'><span></span></div>
                </div>
                <div className='progress_box'>
                    <span className='icon'><TiWarning /></span>
                    <h2>Submission type <span>0%</span></h2>
                    <div className='progress'><span></span></div>
                </div>
            </div>
        </ParentSection>
    )
}
type propType = {
    value: any
}
const ParentSection = styled.section`
    width:100%;
    background-color:${p => p.theme.pure};
    box-shadow: 0px -3px 15px #0000001a, 0px 4px 4px #0000000d;
    border-radius: 8px;
    padding: 20px;
    h2{
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 8px;
        span {
            float: right;
        }
    }
    /* Progress bar      */
    .progress {
        height: 5px;
        border-radius: 10px;
        width: 100%;
        background: #D9D9D9;
        position: relative;  
        margin-bottom: 10px;      
    }
    .progress span {
        height: 5px;
        background: #F59E0B;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 10px;
        transition:all 3s;
    }
    .progress.in_action span{
        /* width: 50%; */
    }
    .progress_section{
        > div {
            padding: 0px 0px 30px 20px;
            border-left: 2px solid #D9D9D9;
            position: relative;  
        }
        span.icon {
            position: absolute;
            left: -12px;
            background: ${p => p.theme.pure};
        }
       
    }
    .progress_section div:last-child{
        border:none;
        padding: 0px 0px 6px 20px;
    }
    .icon svg {
        font-size: 22px;
        color:${p => p.theme.red};
    }
    .icon.in_action svg{
        color:#F59E0B;
    }
    .progress_box li {
        font-size: 14px;
    }

`