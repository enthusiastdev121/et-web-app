import Layout from 'components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function MovieAuditions() {
    const router = useRouter()

    useEffect(() => {
        router.push('/join/talentb')
    }, [router])
    return (
        <Head>
            <title>Movie Auditions</title>
            <meta name="description" content="Agents Looking for new faces movie paid acting jobs get hired" />
        </Head>

    )
}

export default MovieAuditions
