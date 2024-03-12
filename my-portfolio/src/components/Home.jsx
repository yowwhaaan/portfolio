import React from 'react';
import heroImg from '../../asset/hero.jpg';
import { FaArrowRight } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function Home() {
    const links = [
        {
            id: 1,
            child: <FaLinkedin size={30}/>,
            href:'https://www.linkedin.com/in/kym-ezekeil-palacol-b79bab2b9/',
            name:'LinkedIn',
        },
        {
            id: 2,
            child:<FaGithub size={30}/>,
            href:'https://github.com/yowwhaaan',
            name:'GitHub',   
        },
        {
            id: 3,
            child:<HiOutlineMail size={30}/>,
            href:'mailto:kympalacol@yahoo.com.ph',
            name:'Mail',
        },
        {
            id: 4,
            child: <FaFacebook size={30}/>,
            href:'https://web.facebook.com/pal.cdm/', 
            name:'Facebook',  
        },
        {
            id: 5,
            child:<BsFillPersonLinesFill size={30}/>,
            href:'/resume.pdf',
            download: true,
            name:'Resume',    
        }
    ]
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-purple-500 via-indigo-900 to-pink-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center
            h-full'>
                <h2 className='mt-20 text-4xl sm:text-5xl md:text-7xl font-bold text-white'>I'm a Future Web Developer</h2>
                <p className='text-white py-4 max-w-md font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio sed excepturi nemo id amet iusto culpa hic provident dicta labore dolore est fugiat adipisci cum, aut totam, dolor commodi!</p>

                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <button className='group border-none text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md bg-gradient-to-r from-green-500 via-yellow-500 to-red-500
                    cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'><FaArrowRight size={25} className='ml-1'/></span>
                    </button>
                    <ul className='flex justify-center items-center lg:hidden'>
                    
                    {links.map((link)=> (
                        <>
                            <li key={link.id} className='flex items-center justify-center mx-2 w-10 h-10 bg-indigo-500 rounded-full hover:bg-indigo-300 duration-300' >
                                <a href={link.href} className='group hover:scale-110 duration-300'
                                target='blank'
                                download={link.download}
                                rel='noreferrer'>
                                    <span id={link.name}className='group-hover:opacity-100 opacity-0 tooltip absolute rounded-md p-1 bg-gray-500 top-[-5px] left-[-15px] text-white -mt-8 duration-200'>{link.name}</span>
                                    {link.child}
                                </a>
                            
                            </li>
                            
                        </>
                        
                    ))}
                    
                    
                    
                    
                    </ul>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="my profile"
                className='rounded-2xl mx-auto w-2/3 md:w-full max-w-md
                lg:hover:scale-105 duration-200'/>
            </div>
        </div>
    </div>
  )
}

export default Home