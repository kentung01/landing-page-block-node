import React, { ReactElement } from 'react'
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { PiBridgeLight } from 'react-icons/pi';
import { RiComputerLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

export default function Advantages(props : any) {
    const theme = useSelector((state: any) => state.theme.theme.isDark);
    const { 
        companyName = "Your Company Advantage",
        companyDescription = "Kyronode is dedicated to safeguarding decentralized ecosystems as a leading PoS validator. With our high-performance infrastructure, we provide maximum security, reliability, and efficiency, ensuring that your assets are protected and blockchain networks remain resilient. Our focus on innovation and scalability drives the long-term success and growth of the blockchain we support."

     } = props;

     const items : {icon : ReactElement; title: string; description: string}[] = [
         {icon : <RiComputerLine />, title : "Expertise in Blockchain Security", description : "With years of experience, we have earned the trust of major blockchain projects, providing them with consistent and secure validation services. Our expertise ensures that your assets are protected in a highly efficient and transparent manner."},
         {icon : <IoShieldCheckmarkOutline />, title : "Continuous Monitoring and Optimization", description : "We monitor our validator nodes 24/7, guaranteeing continuous performance with high uptime. Our proactive system ensures that our validator node is always running at peak efficiency, helping you maximize rewards."},
         {icon : <PiBridgeLight />, title : "Resilient Infrastructure, Maximum Protection", description : "Our worldwide server network ensures top-level security and reliability, keeping your funds safe and well-protected."},
     ]
  return (
    <div className='flex flex-col justify-center items-center'>

    
        <div className={`mx-4 md:mx-15 xl:mx-15 p-8 md:p-10 rounded-md ${theme ? "bg-slate-700 text-slate-200" : "bg-white"} transition-colors duration-500 ease-in-out lg:w-4/5 xl:w-2/3`}>
            <h1 className="mb-4 text-2xl md:text-4xl font-bold">{companyName}</h1>
            <p className='mt-2 text-base md:text-lg'>{companyDescription}</p>
            <div className='w-full mx-2 flex flex-col lg:flex-row wrap gap-5 justify-center items-top mt-10 text-center 3xl:justify-between 3xl:gap-0'>

            {items.map((item, index) => {
                return(
                    <div key={index}>
                        <div className='w-full lg:w-11/12 xl:w-49/50 2xl:w-80 3xl:80 p-2 md:p-10 gap-2 flex flex-col justify-center h-full items-center rounded-xl border-black border-2 '>
                            <h2 className="mb-4 text-3xl md:text-5xl font-bold">{item.icon}</h2>
                            <h2 className='text-lg md:text-xl font-bold'>{item.title}</h2>
                            <p className='mt-2 text-base md:text-lg'>{item.description}</p>
                        </div>
                    
                    </div>
                )
            })}

            </div>
        
            
            

        </div>
    </div>
  )
}
