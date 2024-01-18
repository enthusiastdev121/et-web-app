
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function GameShowAuditions() {
    const router = useRouter()
    useEffect(() => {
        router.push('/join/talentb')
    }, [router])
    return (
        <Head>
            <title>Be a Game Show Contestant</title>
            <meta name="description" content="Game Show Contestants Wanted Now Get Hired as Game Show Contestant !" />
        </Head>
    )
}

export default GameShowAuditions
