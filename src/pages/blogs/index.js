import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
    <Head>
        <title>Nexus MRG | Blogs</title>
        <meta name="description"/>
    </Head>
    
    <TransitionEffect/>

    <main className='flex flex-col items-center justify-center w-full dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Welcome To Our Blogs!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
            <div className='flex flex-row flex-wrap items-center justify-center h-[80vh] text-5xl md:text-4xl sm:text-3xl'>
              New Blogs & PodCast Videos Will Be Added Soon.
              </div>
            </Layout>
    </main>

  </>
  )
}

export default index