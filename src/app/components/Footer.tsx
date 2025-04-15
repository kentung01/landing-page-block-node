import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { IoMdPaperPlane } from 'react-icons/io'
import { PiBirdThin } from 'react-icons/pi'
import { useSelector } from 'react-redux';

export default function 
() {
  const theme = useSelector((state: any) => state.theme.theme.isDark);
  return (
    <div className={` ${theme ? "bg-slate-700 text-gray-200" : "bg-white text-black"} transition-colors duration-500 ease-in-out h-50 xl:h-30 border-black border-t-2 flex flex-col xl:flex-row justify-center items-center mt-10 xl:py-20`}>
        <div className=' text-center xl:w-7/10'>
            <p className='text-sm md:text-lg font-bold'>Copyright © 2025 your-company. All Rights Reserved.</p>
        </div>
        <div className='flex flex-row justify-center w-full gap-2 xl:w-3/10 xl:flex-row items-center xl:items-start pt-5 xl:pt-0'>
            <div className='flex flex-col xl:w-5/10 '>
                <p className={` ${theme ? "bg-slate-700 text-slate-100" : "bg-white text-black"} transition-colors duration-500 ease-in-out text-sm md:text-base xl:text-lg font-bold `}>Navigation</p>
                <p className='text-sm md:text-base xl:text-lg font-medium'>Service</p>
                <p className='text-sm md:text-base xl:text-lg font-medium'>Explorer</p>
            </div>
            <div className=' flex flex-col xl:w-5/10 justify-center xl:justify-start items-center xl:items-start'>
                <p className={` ${theme ? "bg-slate-700 text-slate-100" : "bg-white text-black"} transition-colors duration-500 ease-in-out text-sm md:text-base xl:text-lg font-bold`}>Contact Us</p>
                <p className='text-sm md:text-base xl:text-lg font-medium'>your-company@gmail.com</p>
                <p className='text-sm md:text-base xl:text-lg font-medium flex flex-row justify-center xl:justify-start'>
                <IoMdPaperPlane />
                <PiBirdThin />
                <FiGithub />
                </p>
            </div>
            </div>
       
    </div>
  )
}
