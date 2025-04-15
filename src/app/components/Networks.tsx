import Image from 'next/image'
import React from 'react'
import { FiServer } from 'react-icons/fi'
import { RiComputerLine } from 'react-icons/ri'
import { useSelector } from 'react-redux';

export default function Networks() {
    const theme = useSelector((state: any) => state.theme.theme.isDark);
    const myNetworks = [
      {
        image: "",
        title: "Dedicated Server",
        serviceLink : "",
        explorerLink : "",
        stakeLink : "",
       
        
      },
      {
        image: "",
        title: "Dedicated Server",
        serviceLink : "",
        explorerLink : "",
        stakeLink : "",
       
        
      },
      {
        image: "",
        serviceLink : "",
        explorerLink : "",
        stakeLink : "",
       
        
      }
    ]

    const ButtonNetwork = (props:any) => {
        const {name = "buton"} = props
        
        const handleClick = () => {
            alert("click")
        }
        return(
          <div onClick={handleClick}>
             <p className='text-lg border-2 cursor-pointer rounded px-2 border-black hover:bg-orange-500 hover:text-white hover:border-gray-300' >{name}</p>
          </div>
        )
    }

    const NetworkCard = (props : any) => {
        const {image = '/btc-icon.jpg', title = "BitCoin", cpu = "12 Core AMD Ryzen 9 7900", ram = "64 GB DDR5 REG ECC", storage = "2 x 1 TB NVMe", speed = "1 Gbps", location = "SG"} = props

        return(
          <div className='h-full'>
             <div className={`transition-transform duration-500 ease-in-out rounded-md w-full h-full flex flex-col justify-center items-center p-5 gap-2 rounded hover:shadow-lg hover:scale-105  ${theme ? "bg-slate-700 text-slate-200" : "bg-white text-black"} transition-colors duration-500 ease-in-out`}>
              <div className='flex gap-2 items-center w-50 xl:w-100'>
                 <Image className='rounded-full' src={image} alt="logo-network" width={20} height={20}/>
                 <p className='text-lg'>{title}</p>
              </div>
              <div className='flex gap-2 justify-start'>
                    <ButtonNetwork name="Service" />
                    <ButtonNetwork name="Explorer" />
                    <ButtonNetwork name="Stake" />
              </div>

            </div>

          </div>
         
        )
    } 

  return (
    <div className=''>
    
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='md:w-43/50 xl:w-2/3 flex flex-col gap-2 mt-20'>
         <p className={`text-4xl font-bold  ${theme ? "bg-gray-800 text-slate-200" : " text-black"} transition-colors duration-500 ease-in-out`}>Networks</p>
         <div className={`border-b  w-full  ${theme ? "bg-gray-800 text-slate-200" : " text-black"} transition-colors duration-500 ease-in-out`}></div>
          <p className={`text-lg  ${theme ? "bg-gray-800 text-slate-200" : " text-black"} transition-colors duration-500 ease-in-out`}>Total staked assets: {`<`} $75.000 </p>

        </div>
        <div className='mt-10 flex flex-col md:flex-row justify-center items-center flex-wrap items-center gap-5 px-15 xl:px-0 '>
          {myNetworks.map((item, index) => {
            return(
              <div key={index}>
                <NetworkCard theme={theme} />
              </div>
            )
          })}
        </div>
        
      </div>

    </div>
  )
}
