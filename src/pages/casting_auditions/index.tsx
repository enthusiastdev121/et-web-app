
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function CastingCallAuditions() {
    const router = useRouter()

    useEffect(() => {
        router.push('/join/talentb')
    }, [router])

    return (
        <Head>
            <title>Casting Calls & Auditions</title>
            <meta name="description" content="Agents Looking for new faces Get Hired for acting modeling jobs" />
        </Head>
    )
}

export default CastingCallAuditions
