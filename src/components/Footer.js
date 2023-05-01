import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base'>
        <Layout className='flex items-center justify-between py-6 xl:py-3 lg:flex-col lg:py-4 md:py-3 sm:py-3'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div>
                Built by <Link className='underline underline-offset-2' href="https:musm1.vercel.app" target={"_blank"}>Mishkat Ullah Saif</Link>
            </div>
            <div className='flex flex-col self-center justify-center text-center'>
              <div>
              Join Nexus <Link href="https://chat.whatsapp.com/HCFBEixCDiFEj6SvVI19gK" target={'_blank'} className='text-green-400 underline underline-offset-2 '>Whatsapp Group</Link>
              </div>
              <div>
              Follow Nexus <Link href="https://instagram.com/img.nmrg?igshid=YmMyMTA2M2Y=" target={'_blank'} className='text-orange-400 underline underline-offset-2 '>Instagram Page</Link>
              </div>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer