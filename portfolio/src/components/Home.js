import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >

             <p className='text-pink-600'>Hi, my name is</p>
                <h2 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Prince Hector</h2>
             <h3 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>i'm a Front End Developer</h3>
              <p className='text-[#8892b0] text-justify py-4 max-w-[700px]'>i`m a UI Developer specializing in building and occasionally designing expectional digital experiences.
                 currently, im focused on building responsive web application
               </p>

               <div>
                <button className='text-white group border-2 px-6 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work  <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight  className='ml-3'/>
                        </span>
                        </button>
               </div>

    </div>
    </div>
  )
}
//{}[]
export default Home