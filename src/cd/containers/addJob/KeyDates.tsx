
import React, { useEffect, useState } from 'react'
import styled, { useTheme } from "styled-components"
import moment from 'moment';
export default function KeyDates({ getDate, onChange }: propTypes) {
    const theme = useTheme()
    const [subDate, setSubDate] = useState<any>()
    const [startDate, setStartDate] = useState<any>()
    const [relssDate, setRelDate] = useState<any>()
    useEffect(() => {
        // Project submission expiration?
        if (typeof getDate.submission === typeof 11111) {
            const val = getDate.submission
            let now = new Date(val * 1000)
            now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
            setSubDate(now.toISOString().slice(0, 16))
        }
        if (typeof getDate.submission !== typeof 11111) {
            setSubDate(getDate.submission)
        }
        if (getDate.submission === 0) {
            setSubDate(getDate.submission)
        }
        // Audition date start?
        if (typeof getDate.start === typeof 11111) {
            const val = getDate.start
            let now = new Date(val * 1000)
            now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
            setStartDate(now.toISOString().slice(0, 16))
        }
        if (typeof getDate.start !== typeof 11111) {
            setStartDate(getDate.start)
        }
        if (getDate.start === 0) {
            setStartDate('')
        }
        // Release date of this project?
        if (typeof getDate.releaseDate === typeof 11111) {
            const val = getDate.releaseDate
            let now = new Date(val * 1000)
            now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
            setRelDate(now.toISOString().slice(0, 16))
        }
        if (typeof getDate.releaseDate !== typeof 11111) {
            setRelDate(getDate.releaseDate)
        }
        if (getDate.releaseDate === 0) {
            setRelDate('')
        }
    }, [getDate])


    return (
        <ContentSection theme={theme}>
            <h2>Key dates</h2>
            <div>
                <label>Project submission expiration?</label>
                {/* <input type="datetime-local" placeholder='E.g. Family Guy' onChange={(e) => { onChange({ submission: e.target.value }); setSubDate(e.target.value) }} value={subDate} /> */}
                <input type="datetime-local" placeholder='E.g. Family Guy' onChange={(e) => { onChange({ submission: e.target.value }); setSubDate(e.target.value) }} value={subDate} />
            </div>
            <hr />
            <div>
                <label>Audition date start?</label>
                <input type="datetime-local" placeholder='E.g. Family Guy' onChange={(e) => { onChange({ start: e.target.value }); setStartDate(e.target.value) }} value={startDate} />
            </div>
            <hr />
            <div>
                <label>Release date of this project?</label>
                <input type="datetime-local" placeholder='E.g. Family Guy' onChange={(e) => { onChange({ releaseDate: e.target.value }); setRelDate(e.target.value) }} value={relssDate} />
            </div>
            <hr />

        </ContentSection>
    )
}
type propTypes = {
    getDate: any,
    onChange: any
}
const ContentSection = styled.section`
   
   
/*  */
  
    label{
        font-weight: 700;
        font-size: 14px;
        display:block;
        margin: 10px 0px;
        span{
            font-weight:400;
            color:#3C3C4399;
        }
    }
    input ,textarea{
        width: 100%;
        border: 1px solid #A1A1AA;
        padding: 8px;
        border-radius: 4px;
    }
    hr {
        margin: 30px 0px;
    }
`