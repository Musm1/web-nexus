import React from 'react'
import {NexusImg} from './Icons'
import Link from 'next/link'

const JoinUs = () => {
  return (
    <div className='fixed flex items-center justify-center overflow-hidden left-4 bottom-4 md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
        <div className='relative flex items-center justify-center w-48 h-auto md:w-24'>
            <NexusImg className="fill-dark animate-spin-slow dark:fill-light"/>
            <Link href="mailto:nexusmedicalresearchgroup@gmail.com" 
            className='absolute flex items-center justify-center w-20 h-20
             font-semibold -translate-x-1/2 -translate-y-1/2 border-solid rounded-full
              shadow-md hover:bg-light hover:border hover:border-dark hover:text-dark bg-dark
               text-light border-dark left-1/2 top-1/2 dark:text-dark dark:bg-light hover:dark:bg-dark
                hover:dark:text-light hover:dark:border-light
                md:w-10 md:h-10 md:text-[10px]'>
                Join Us
            </Link>
        </div>
    </div>
  )
}

export default JoinUs