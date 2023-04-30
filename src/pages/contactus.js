import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React from 'react'

const contactus = () => {
  return (
    <>
    <Head>
        <title>Nexus MRG | Contact Us</title>
        <meta name="description"/>
    </Head>
    
    <TransitionEffect/>

    <main className='flex flex-col items-center justify-center w-full dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Contact Us" className='mb-16'/>
          
        </Layout>
    </main>

  </>
  )
}

export default contactus