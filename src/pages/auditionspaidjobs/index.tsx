import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function CastingPaidAudition() {
    const router = useRouter()
    useEffect(() => {
        router.push('/join/talentb')
    }, [router])
    return (
        <Head>
            <title>Casting Calls & Auditions</title>
            <meta name="description" content="Find Thousands of Audition & Open Casting Calls. Apply & Get Hired !" />
        </Head>
    )
}

export default CastingPaidAudition
