import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function SocialLinks() {
    const links = [
    {
        id: 1,
        child: (
            <>
                LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/kym-ezekeil-palacol-b79bab2b9/',
        style:'rounded-tr-md'    
    },
    {
        id: 2,
        child: (
            <>
                GitHub <FaGithub size={30}/>
            </>
        ),
        href:'https://github.com/yowwhaaan',   
    },
    {
        id: 3,
        child: (
            <>
                Mail <HiOutlineMail size={30}/>
            </>
        ),
        href:'mailto:kympalacol@yahoo.com.ph',
          
    },
    {
        id: 4,
        child: (
            <>
                Facebook <FaFacebook size={30}/>
            </>
        ),
        href:'https://web.facebook.com/pal.cdm/',   
    },
    {
        id: 5,
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:'/resume.pdf',
        style:'rounded-br-md',
        download: true    
    }
]
  
return (
    
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map((link)=> (
                <li key={link.id} className={'hidden lg:flex justify-between items-center w-40 h-14 px-4 hover:rounded-md bg-indigo-500 ml-[-100px] duration-300 hover:ml-[-10px]' + " " + link.style }>
                    <a href={link.href} className='flex justify-between
                    items-center w-full text-white'
                    download={link.download}
                    target='blank'
                    rel='noreferrer'>
                        {link.child}
                    </a>
                </li>
          
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks