import React from 'react'
import { FiServer } from 'react-icons/fi'
import { RiComputerLine } from 'react-icons/ri'
import { useSelector } from 'react-redux';

export default function Servers() {
    const theme = useSelector((state: any) => state.theme.theme.isDark);
    const myServer = [
      {
        icon: <FiServer />,
        title: "Dedicated Server",
        cpu : "12 Core AMD Ryzen 9 7900",
        ram : "64 GB DDR5 REG ECC",
        storage : "2 x 1 TB NVMe",
        speed : "1 Gbps",
        location : "SG",
        
      },
      {
        icon: <FiServer />,
        title: "Dedicated Server",
        cpu : "12 Core AMD Ryzen 9 7900",
        ram : "64 GB DDR5 REG ECC",
        storage : "2 x 1 TB NVMe",
        speed : "1 Gbps",
        location : "SG",
        
      },
      {
        icon: <FiServer />,
        title: "Dedicated Server",
        cpu : "12 Core AMD Ryzen 9 7900",
        ram : "64 GB DDR5 REG ECC",
        storage : "2 x 1 TB NVMe",
        speed : "1 Gbps",
        location : "SG",
        
      }
    ]

    const ServerCard = (props : any) => {
        const {icon = <FiServer />, title = "Dedicated Server", cpu = "12 Core AMD Ryzen 9 7900", ram = "64 GB DDR5 REG ECC", storage = "2 x 1 TB NVMe", speed = "1 Gbps", location = "SG"} = props

        return(
          <div className='h-full xl:w-112'>
              <div className={`transition-transform duration-500 ease-in-out rounded-md w-full h-full flex flex-col justify-center items-center p-5 gap-2 rounded hover:shadow-lg hover:scale-105  ${theme ? "bg-slate-700 text-gray-200" : "bg-white text-black"} transition-colors duration-500 ease-in-out`}>
              <div>{icon}</div>
              <div className='font-bold text-lg md:text-2xl'>
                <p>{title}</p>
              </div>
              <div className='text-sm text-center font-semibold'>
                <p>CPU : {cpu}</p>
                <p>RAM : {ram}</p>
                <p>Storage : {storage}</p>
                <p>Speed : {speed}</p>
                <p>Location : {location}</p>
              </div>
            </div>

          </div>
         
        )
    } 

  return (
    <div className=''>
    
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='md:w-43/50 xl:w-2/3 flex flex-col gap-2 mt-20'>
         <p className={`text-2xl md:text-4xl font-bold   ${theme ? "bg-gray-800 text-slate-200" : " text-black"} transition-colors duration-500 ease-in-out`}>Our Server</p>
         <div className={`border-b  ${theme ? "border-slate-300" : "border-gray-800"} transition-colors duration-500 ease-in-out w-full`}></div>

        </div>
        <div className='mt-10 flex flex-col justify-center items-center flex-wrap sm:flex-row items-center gap-5 px-15 xl:px-0 '>
          {myServer.map((item, index) => {
            return(
              <div key={index}>
                <ServerCard />
              </div>
            )
          })}
        </div>
        
      </div>

    </div>
  )
}
