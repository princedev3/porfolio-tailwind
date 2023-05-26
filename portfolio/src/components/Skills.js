import React from 'react'
import html from "../assests/html.png"
import css from "../assests/css.png"
import firebase from "../assests/firebase.png"
import javascript from "../assests/javascript.png"
import mongo from "../assests/mongo.png"
import node from "../assests/node.png"
import react from "../assests/react.png"
import tailwind from "../assests/tailwind.png"
import aws from "../assests/aws.png"
import github from "../assests/github.png"

const Skills = () => {
  return (
    <div name="skills" className=' w-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            {/* first div */}
                 <div>
                         <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                         <p className='py-4'>// These are the technoligies I've worked with</p>
                 </div>
                {/* second div */}

                  <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={html} alt='HTML icon'/>
                            <p className='my-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={css} alt='css icon'/>
                            <p className='my-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={firebase} alt='firebase icon'/>
                            <p className='my-4'>FIREBASE</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={javascript} alt='javascript icon'/>
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={mongo} alt='mongo icon'/>
                            <p className='my-4'>MONGO</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={node} alt='node icon'/>
                            <p className='my-4'>NODE</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={react} alt='react icon'/>
                            <p className='my-4'>REACT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={tailwind} alt='tailwind icon'/>
                            <p className='my-4'>TAILWING</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={aws} alt='aws icon'/>
                            <p className='my-4'>aws</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto'  src={github} alt='github icon'/>
                            <p className='my-4'>github</p>
                        </div>
                 </div>
        </div>
    </div>
  )
}

export default Skills