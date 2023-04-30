import React from 'react'
import {motion} from 'framer-motion'

const Services= ({name, x, y})=>{
    return (
        <motion.div 
        className='absolute flex items-center justify-center px-5 py-3 font-semibold rounded-full
         cursor-pointer bg-dark dark:text-dark text-light shadow-dark dark:bg-light
         lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
         xs:font-bold
         '
         initial={{
            x:0,
            y:0
         }}
         whileInView={{
            x:x,
            y:y
         }}
         transition={{
            duration:0.4
         }}
        whileHover={{
            scale:0.9
        }}
        viewport={{
            once:true
        }}
        >
            {name}
        </motion.div>
    )
}

const SmallServices = () => {
  return (
    <>
        <h2 className='w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32'>
            Our Services
        </h2>
        <div className='relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm

        '>
            <motion.div 
            className='flex items-center justify-center p-5 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 '
            whileHover={{
                scale:0.9
            }}
            transition={{
                duration:0.4
            }}
            >
                Publications
            </motion.div>
            <Services name="USMLE Mentoring" x="-25vw" y="6vw"/>
            <Services name="Interview Mentoring" x="-5vw" y="-10vw"/>
            <Services name="Interview Mentoring" x="25vw" y="-5vw"/>
            <Services name="Personal Statement Mentoring" x="0vw" y="12vw"/>
            <Services name="PLAB Mentoring" x="-20vw" y="-15vw"/>
            <Services name="Medical School Survival Mentoring" x="0vw" y="-20vw"/>
        </div>
    </>
  )
}

export default SmallServices