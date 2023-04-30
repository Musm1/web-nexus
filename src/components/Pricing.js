import React, { useRef } from 'react'
import {useScroll, motion} from 'framer-motion'
import LiIcon from './LiIcon'

const Details= ({title, description, price})=>{
    const ref= useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{
                y:50
            }}
            whileInView={{
                y:0
            }}
            transition={{
                duration:0.5,
                type:"spring"
            }}
            >
                <h3 className='text-4xl font-bold capitalize sm:text-2xl xs:text-xl'>{title} &nbsp;</h3>
                <h4 className='text-xl font-semibold capitalize text-dark dark:text-light/75 xs:text-base'>{price}</h4>
                <p className='w-full font-medium md:text-sm'>{description}</p>
            </motion.div>
        </li>
    )
}

const Pricing = () => {

    const ref= useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start center", "center start"]
    })

  return (
    <div className='my-64'>
        <h2 className='w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16'>
            Our Pricing
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
            />

            <ul className='flex flex-col items-start justify-between w-full ml-4 xs:ml-2'>
                <Details 
                    title="Publication Only" 
                    price="250$" 
                    description={`
                    Welcome to our Publication Service! Are you looking for a reliable and professional
                    platform to publish your content? Look no further! Our Publication Service offers
                    you the opportunity to showcase your writing skills to a global audience.
                `}/>
                <Details 
                    title="Publication Plus Mentoring " 
                    price="350$" 
                    description={`
                    Welcome to our Publication and Mentoring Service! We offer a unique service
                    that combines the benefits of publication with one-on-one mentoring from experienced
                    writers and editors.
                `}/>
                <Details 
                    title="Narative Mentoring" 
                    price="150$" 
                    description={`
                    We provide resources and services to help writers improve their skills and achieve their writing goals.
                    One of the key sections of this website is the "Mentorship" section, which offers one-on-one mentorship programs,
                    online courses, workshops, and webinars.
                `}/>
                <Details 
                    title="Case Report Mentoring Promotional Offer" 
                    price="50$" 
                    description={`
                    Welcome to our Case Report Mentoring Service! Our service is designed to help healthcare 
                    professionals and researchers develop high-quality case reports for publication. 
                    Our experienced mentors are experts in their fields, with years of
                    experience writing and publishing case reports in top-tier medical journals.
                `}/>
                <Details 
                    title="Case Report Premium Research Program " 
                    price="250$" 
                    description={`
                    Welcome to our Case Report Premium Research Program! We offer a range of
                    services, including mentoring, research assistance, and publication support, to help you achieve your goals. 
                    Our team of experts includes experienced researchers, editors, and mentors,
                    who are committed to helping you produce a case report that meets the highest 
                    standards of quality and relevance.
                `}/>
                <Details 
                    title="Systematic Review - Publication only " 
                    price="350$" 
                    description={`
                    Welcome to our Systematic Review-Publication Only service! If you've
                    already conducted a systematic review and are looking for a reliable
                    platform to publish your findings, our service is the perfect solution.
                    We offer a streamlined publication process that makes it easy for you to share your research with a global audience. 
                `}/>
                <Details 
                    title="Systematic Publication & Mentoring" 
                    price="450$" 
                    description={`
                    Welcome to our Systematic Publication Plus Mentoring service! 
                    Our experienced team of mentors and researchers will work closely with you
                    to develop your research question, design your study, and analyze your 
                    data. We'll provide you with guidance and feedback throughout the process,
                    ensuring that your findings are robust and scientifically sound. 
                    In addition to research support, we offer one-on-one mentoring to
                    help you refine your writing skills and develop your manuscript for
                    publication. Our mentors will work with you to structure your paper,
                    improve your writing style, and ensure that your manuscript meets the
                    highest standards of quality and relevance.
                `}/>
                <Details 
                    title="Systematic Review No Publication-Only Mentoring" 
                    price="150$" 
                    description={`
                    Welcome to our Systematic Review No Publication-Only Mentoring service! 
                    If you've conducted a systematic review and are looking for support and guidance
                    on improving your research and writing skills, our service is the perfect solution.
                    Our experienced mentors will provide you with one-on-one support to help you refine
                    your research question, design your study, and analyze your data. 
                `}/>
            </ul>
        </div>
    </div>
  )
}

export default Pricing