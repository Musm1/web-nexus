import React from 'react'
import {motion} from 'framer-motion'

const AnimatedText = ({text, className=""}) => {
  return (
    <div className ='flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center sm:py-0'>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl text-center ${className} dark:text-light`}
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
                transition:{
                    delay:0.5,
                    staggerChildren: 0.08,
                }
            }}
        >
            {
                text.split(" ").map((word,index)=>
                <motion.span key={word+'-'+index} className='inline-block'
                initial={{
                    opacity:0,
                    y:50
                }}
                animate={{
                    opacity:1,
                    y:0,
                    transition:{
                      duration:1
                    }
                }}
                >
                    {word} &nbsp;
                </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText