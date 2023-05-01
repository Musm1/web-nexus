import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import JoinUs from '@/components/JoinUs';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nexus MRG</title>
        <meta name="description"/>
      </Head>
      <TransitionEffect/>
      <main className='flex items-center w-full min-h-screen text-dark dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} 
              alt="Nexus Medical Research Group" 
              className="w-full h-auto lg:hidden md:inline-block md:w-full "
              priority
              sizes='(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw'
              />
            </div>
            <div className='flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center'>
              <AnimatedText text="Welcome to our website, We are Nexus Medical Research Group." 
              className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='self-start my-4 text-base font-medium md:text-sm sm:text-xs'>
              Welcome to our website, where we aim to 
              explore and discover new knowledge in various fields of study. 
              Our team of experts is dedicated to conducting thorough research and 
              providing insightful analysis to help you stay up-to-date with 
              the latest trends and advancements. From scientific breakthroughs 
              to social issues, our website covers a wide range of topics to satisfy 
              your curiosity and expand your knowledge. We invite you to browse through 
              our articles and join us on this exciting journey of exploration and discovery.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="mailto:nexusmedicalresearchgroup@gmail.com" 
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light 
                hover:text-dark border-2 border-solid border-transparent hover:border-dark
                 dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                 md:p-2 md:px-4 md:text-base'
                target={"_blank"}>Contact Us</Link>
                <Link href="tel:+923341907479" target={"_blank"} 
                className='ml-4 text-lg font-medium underline capitalize underline-offset-4 text-dark dark:text-light md:text-base'>
                  +92-334-1907479
                  </Link>
              </div>
              <div className='flex items-center self-start mt-2 lg:self-center'>
              <p 
                className='text-lg font-medium underline underline-offset-4 text-dark dark:text-light md:text-base'>
                  nexusmedicalresearchgroup@gmail.com
                  </p>
              </div>
            </div>
          </div>
        </Layout>
        <JoinUs/>
        <div className='absolute inline-block w-24 right-8 bottom-8 lg:hidden'>
          <Image src={lightBulb} className='w-full h-auto' alt='Nexus'/>
        </div>
      </main>
    </>
  )
}
