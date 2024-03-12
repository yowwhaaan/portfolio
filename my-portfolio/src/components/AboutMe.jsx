import React from 'react'

function AboutMe() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-purple-500 via-indigo-900 to-pink-800 text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>About</p>
            </div>

            <p className='text-lg mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta reprehenderit ipsum, sapiente libero ut iste! Doloremque ipsa aspernatur cum unde consequuntur maxime nisi eaque itaque omnis quasi harum, ullam nihil pariatur debitis minus odit dolor a vero! Quisquam modi quas facilis corporis est laboriosam iure blanditiis mollitia impedit amet?
            </p>

            <br/>

            <p className='text-l'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium totam modi eos, beatae doloribus voluptatibus temporibus magnam vero porro in corporis aliquid nam assumenda animi repellat omnis ex. Ratione velit, beatae perferendis maiores corrupti sit iure eius animi, autem doloribus officia aperiam, inventore totam eum aspernatur impedit ut quae.
            </p>
        </div>
    
    </div>
  )
}

export default AboutMe