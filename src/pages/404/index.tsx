import Layout from 'components/Layout'
import React from 'react'

const page = () => {
    return (
        <Layout >
            <div className='w-full h-[100vh] flex justify-center items-center flex-col'>
                <h1 className='text-9xl font-extrabold'>404</h1>
                <p className='text-4xl font-extrabold'>Page Not Found</p>
            </div>
        </Layout>
    )
}

export default page