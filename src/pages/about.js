import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import PPic from '../../public/images/profile/logoNxs.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import SmallServices from '@/components/SmallServices'
import Pricing from '@/components/Pricing'

const AnimatedNumbers=({value})=>{

    const ref= useRef(null);

    const montionValue= useMotionValue(0);
    const springValue= useSpring(montionValue, {duration: 3000})
    const isInView= useInView(ref,{once:true});

    useEffect(()=>{
        if(isInView){
            montionValue.set(value);
        }
    },[isInView, value, montionValue]);

    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Nexus MRG | About</title>
            <meta name="description"/>
        </Head>
        <TransitionEffect/>
        <main className='flex flex-col items-center justify-center w-full dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" 
                className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:self-center md:text-4xl'>About Us</h2>
                        <p className='font-medium'>
                        Welcome to our research website! We are a team of experts dedicated to 
                        helping IMGs (International Medical Graduates) and doctors across the globe 
                        succeed in their careers. We are proud of the work we do and the impact we have on the medical community.
                        </p>
                        <p className='my-4 font-medium'>
                        At our organization, we specialize in mentoring and preparing IMGs and doctors for
                         important exams such as USMLE and PLAB. We understand the challenges that IMGs 
                         face and are committed to providing personalized support and guidance to help them achieve their goals.
                        </p>
                        <p className='my-4 font-medium'>
                        Our team of experts has extensive experience in the medical field and is passionate 
                        about sharing their knowledge and expertise with others. We believe that mentoring and
                         support are crucial for success in the medical field, and we strive to provide the best
                          possible resources and guidance to help our clients reach their full potential.
                        </p>
                        <p className='mt-4 font-medium'>
                        We are dedicated to providing high-quality services that meet the unique
                         needs of each of our clients. Whether you are a medical student, resident,
                          or practicing physician, we are here to help you succeed. We are committed to 
                          staying up-to-date with the latest trends and developments in the medical field, 
                          and we use this knowledge to provide the most effective and relevant support to our clients.
                        </p>
                    </div>

                    <div className='relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image 
                        src={PPic} 
                        alt="Nexus" 
                        className="w-full h-auto rounded-2xl"
                        priority
                        sizes='(max-width:768px) 100vw,
                        (max-width:1200px) 50vw,
                        33vw'
                        />
                    </div>

                    <div className='flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-5xl sm:text-4xl xd:text-3xl'>
                                <AnimatedNumbers value={500}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Completed Projects</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-5xl sm:text-4xl xd:text-3xl'>
                            <AnimatedNumbers value={1500}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Costumers</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-5xl sm:text-4xl xd:text-3xl'>
                            <AnimatedNumbers value={50}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Awards Achieved</h2>
                        </div>
                    </div>

                </div>

                <SmallServices/>

                <Pricing/>
                
            </Layout>
        </main>
   </>
  )
}

export default about