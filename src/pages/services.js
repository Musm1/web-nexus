import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

// images imports
import journal from '../../public/images/Journal-Banner.jpg'
import pubplusmntr from '../../public/images/PubPlusMent.jpg'
import pub from '../../public/images/plbi.jpg'
import sys from '../../public/images/Systematic.jpg'
import cases from '../../public/images/casesstudy.jpeg'
import casprm from '../../public/images/casprm.jpg'
import scondlast from '../../public/images/scondlast.jpg'
import last from '../../public/images/last.jpg'
import { motion } from 'framer-motion'

const FramerImage= motion(Image);

const FeaturedServices= ({img, title,type, summary, price})=>{
  return (
    <article className='relative flex items-center justify-between w-full p-6 border border-solid shadow-2xl rounded-br-2xl rounded-3xl dark:border-light border-dark bg-light dark:bg-dark dark:text-light lg:flex-col lg:p-5 xs:rounded-2xl xs:rounded-br-3xl xs:p-3 '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      '/>
      <div className='w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full'>
        <FramerImage 
        whileHover={{
          scale:1.05
        }}
        transition={{
          duration:0.2
        }}
        src={img} 
        alt='title' 
        className='w-full h-auto'
        priority
        sizes='(max-width:768px) 100vw,
        (max-width:1200px) 50vw,
        50vw'
        />
      </div>

      <div className='flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6'>

        <span className='text-2xl font-medium text-primary xs:text-base'>{type}</span>

        <h1 className='w-full my-2 text-4xl font-bold text-left sm:text-sm'>{title}</h1>

        <div className='flex flex-row flex-wrap text-lg font-semibold cursor-pointer'>
          <span className='underline underline-offset-2'>Price</span> &nbsp;- &nbsp;
          <h2 className='text-lg font-semibold'>{price}</h2> &nbsp;- &nbsp;
          <span className='text-emerald-500 lg:flex-col'>Payment Gateway Coming Soon </span>
        </div>

        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

      </div>

    </article>
  )
}

const ServiceNormal=({img, title, price})=>{
  return(
    <article className='relative flex flex-col items-center justify-center w-full p-3 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-2 '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]'/>
      <div className='w-full overflow-hidden rounded-lg cursor-pointer '>
      <FramerImage 
        whileHover={{
          scale:1.05
        }}
        transition={{
          duration:0.2
        }} 
        src={img} 
        alt='title' 
            className='w-full h-auto'/>
      </div>

      <div className='flex flex-col items-start justify-between w-full mt-4'>

        <h1 className='w-full my-2 text-3xl font-bold text-left lg:text-2xl'>{title}</h1>

        <div className='flex flex-row text-lg font-semibold cursor-pointer'>
          <span className='underline underline-offset-2'>Price</span> &nbsp;- &nbsp;
          <h2 className='text-lg font-semibold'>{price}</h2>
        </div>

      </div>
    </article>
  )
}

const services = () => {
  return (
    <>
        <Head>
            <title>Nexus MRG | Services</title>
            <meta name="description"/>
        </Head>
        
        <TransitionEffect/>

        <main className='flex flex-col items-center justify-center w-full mb-16 dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Services We Provide" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>

                  <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-10 '>

                    <div className='col-span-12'>
                      <FeaturedServices 
                      type="Featured Service"
                      title="Publication Only"
                      summary=" Welcome to our research website! We are a team of experts dedicated to 
                      helping IMGs (International Medical Graduates) and doctors across the globe 
                      succeed in their careers. We are proud of the work we do and the impact we have on the medical community."
                       price="250$"
                       img={journal}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                      <ServiceNormal
                      img={pubplusmntr}
                      price="350$"
                      title="Publication Plus Mentoring"
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={pub}
                      price="150$"
                      title="Narative Mentoring"
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={cases}
                      price="250$"
                      title="Case Report Premium Research Program"
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={sys}
                      price="350$"
                      title="Systematic Review - Publication Only"
                      />
                    </div>

                    <div className='col-span-12'>
                      <FeaturedServices 
                        type="Promotional Offer"
                        title="Case Report Mentoring"
                        summary=" Welcome to our Case Report Mentoring Service! Our service 
                        is designed to help healthcare professionals and researchers develop 
                        high-quality case reports for publication. Our experienced mentors are 
                        experts in their fields, with years of experience writing and publishing 
                        case reports in top-tier medical journals."
                        price="50$"
                        img={casprm}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={scondlast}
                      price="450$"
                      title="Systematic Publication & Mentoring"
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={last}
                      price="150$"
                      title="Systematic Review No Publication-Only Mentoring"
                      />
                    </div>

                  </div>

                </Layout>
        </main>

    </>
  )
}

export default services