import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function AuditionLasVegas() {
    const router = useRouter()
    useEffect(() => {
        router.push('/join/talentb')
    }, [router])
    return (
        <>
            <Head>
                <title>Auditions in Las Vegas</title>
                <meta name="description" content=" Get started in the Entertainment Industry In Las Vega.Free Auditions" />
            </Head>
        </>
    )
}

export default AuditionLasVegas
