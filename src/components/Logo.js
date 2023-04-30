import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const MontionLink= motion(Link);

const Logo = () => {
  return (
    <motion.div className='flex items-center justify-center mt-2'>
      <MontionLink href="/" 
      className='flex items-center justify-center w-20 h-20 font-bold text-center border border-transparent border-solid rounded-full bg-dark text-light dark:border-light'
      whileHover={{
        backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:3, repeat: Infinity}
      }}
      >
        Nexus <br/> MRG
      </MontionLink>
    </motion.div>
  )
}

export default Logo