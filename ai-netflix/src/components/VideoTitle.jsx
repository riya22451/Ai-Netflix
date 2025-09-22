import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%]  px-6 md:px-36 absolute text-white bg-gradient-to-r from-black'>
       <h1 className='font-bold  text-xl md:text-4xl'>{title}</h1>
       <p className='hidden md:inline-block py-6 text-lg w-1/4' >{overview}</p>
       <div >
       <button className='bg-white/75 cursor-pointer text-black mt-2 md:mt-0 py-1 px-6 md:py-4  md:px-8 text-lg mx-2 border border-gray-50 rounded-lg hover:bg-white/25'>Play</button>
       <button className='hidden md:inline-block bg-gray-500/50 text-black p-4 px-8 text-lg mx-2 border border-gray-50 rounded-lg'>More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle