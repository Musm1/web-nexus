import React, { useState } from 'react'
import  Link  from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {TwitterIcon, DribbbleIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink= ({href, title,className=""})=>{
  const router= useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300
      ${router.asPath === href ? 'w-full': 'w-0'} dark:bg-light`}> &nbsp;</span>
    </Link>
  )
}

const CustomMobileLink= ({href, title,className="", toggle})=>{
  const router= useRouter();

  const handleClick=()=>{
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300
      ${router.asPath === href ? 'w-full': 'w-0'} dark:bg-dark `}> &nbsp;</span>
    </button>
  )
}

const Navbar = () => {

  const [isOpen, setIsOpen]= useState(false);

  const handleClick=()=>{
    setIsOpen(!isOpen);
  }

  const [mode, setMode]= useThemeSwitcher();

  return (
    <header 
    className='relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8'>
      
      <button
       onClick={handleClick}
       className='flex-col items-center justify-center hidden lg:flex'>
        <span className={`bg-dark dark:bg-light block h-0.5 transition-all duration-300 ease-out w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 transition-all duration-300 ease-out w-6 rounded-sm my-0.5  ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 transition-all duration-300 ease-out w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
        
        {/* desktop Navbar */}
      <div className='flex items-center justify-between w-full lg:hidden'>
        <nav>
            <CustomLink href="/" title={"Home"} className='mr-4'/>
            <CustomLink href="/about" title={"About"} className='mx-4'/>
            <CustomLink href="/services" title={"Services"} className='mx-4'/>
            <CustomLink href="/blogs" title={"Blogs"} className='ml-4'/>
            {/* <CustomLink href="/contactus" title={"Contact Us"} className='ml-4'/> */}
        </nav>

        <nav className='flex flex-wrap items-center justify-center'>
            <motion.a href="https://www.twitter.com" target={"_blank"}
            whileHover={{
              y:-3
            }}
            whileTap={{scale:0.9}}
            className='w-8 mr-3'
            >
              <TwitterIcon/>
            </motion.a>
            <motion.a href="https://www.twitter.com" target={"_blank"}
             whileHover={{
              y:-3
            }}
            whileTap={{scale:0.9}}
            className='w-8 mx-3'>
              <LinkedInIcon/>
            </motion.a>
            <motion.a href="https://www.twitter.com" target={"_blank"}
             whileHover={{
              y:-3
            }}
            whileTap={{scale:0.9}}
            className='w-8 ml-3'>
              <DribbbleIcon/>
            </motion.a>

            <button 
            className={`flex items-center justify-center p-1 ml-3 rounded-full ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            onClick={()=> setMode(mode=== "light"? "dark" : "light")}>
              {
                mode === "dark" ? 
                <SunIcon className={"fill-dark"}/> : 
                <MoonIcon className={"fill-dark"}/>
              }
            </button>

        </nav>
      </div>

      {/* mobile navbar */}
      {
        isOpen ? 
        <motion.div
        initial={{
          scale:0,
          opacity:0,
          x:"-50%",
          y:"-50%"
        }}
        animate={{
          scale:1,
          opacity:1
        }}
         className='flex flex-col items-center justify-between min-w-[70vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
        <nav className='flex flex-col items-center justify-center'>
            <CustomMobileLink href="/" title={"Home"} className='' toggle={handleClick} />
            <CustomMobileLink href="/about" title={"About"} className='' toggle={handleClick} />
            <CustomMobileLink href="/services" title={"Services"} className='' toggle={handleClick} />
            <CustomMobileLink href="/blogs" title={"Blogs"} className='' toggle={handleClick} />
            {/* <CustomMobileLink href="/contactus" title={"Contact Us"} className='' toggle={handleClick} /> */}
        </nav>

        <nav className='flex flex-wrap items-center justify-center mt-2'>
            <motion.a href="https://www.twitter.com" target={"_blank"}
            whileHover={{
              y:-3
            }}
            whileTap={{scale:0.9}}
            className='w-8 mr-3 sm:mx-1'
            >
              <TwitterIcon/>
            </motion.a>
            <motion.a href="https://www.twitter.com" target={"_blank"}
             whileHover={{
              y:-3
            }}
            whileTap={{scale:0.9}}
            className='w-8 mx-3 sm:mx-1'>
              <LinkedInIcon/>
            </motion.a>
            <motion.a href="https://www.twitter.com" target={"_blank"}
             whileHover={{
              y:-3
            }}
            whileTap={{scale:0.9}}
            className='w-8 ml-3 sm:mx-1'>
              <DribbbleIcon/>
            </motion.a>

            <button 
            className={`flex items-center justify-center p-1 ml-3 rounded-full ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            onClick={()=> setMode(mode=== "light"? "dark" : "light")}>
              {
                mode === "dark" ? 
                <SunIcon className={"fill-dark"}/> : 
                <MoonIcon className={"fill-dark"}/>
              }
            </button>

        </nav>
      </motion.div>
      : 
      null
      }

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>

    </header>
  )
}

export default Navbar