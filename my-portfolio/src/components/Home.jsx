import React from 'react';
import heroImg from '../../asset/hero.jpg';
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-purple-500 via-indigo-900 to-pink-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center
            h-full'>
                <h2 className='mt-20 text-4xl sm:text-5xl md:text-7xl font-bold text-white'>I'm a Future Web Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio sed excepturi nemo id amet iusto culpa hic provident dicta labore dolore est fugiat adipisci cum, aut totam, dolor commodi!</p>

                <div>
                    <button className='group border-none text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md bg-gradient-to-r from-green-500 via-yellow-500 to-red-500
                    cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'><FaArrowRight size={25} className='ml-1'/></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="my profile"
                className='rounded-2xl mx-auto w-2/3 md:w-full max-w-md
                hover:scale-105 duration-200'/>
            </div>
        </div>
    </div>
  )
}

export default Home