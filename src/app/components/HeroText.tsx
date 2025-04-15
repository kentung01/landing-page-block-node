import React from 'react'
import { useSelector } from 'react-redux';

export default function HeroText() {
    const theme = useSelector((state: any) => state.theme.theme.isDark);
    return (
        <div className='flex flex-col justify-center items-center mt-50 md:mt-100'>
            <h1 className={`mb-4 text-2xl md:text-6xl font-bold ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>
                Welcome to <span className="text-orange-600">Your Company</span>
            </h1>
        
            <h2 className={`mb-6 text-xl md:text-2xl font-semibold ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>Securing the Future of Decentralized Networks</h2>
            <p className={`max-w-2xl mb-8 text-base md:text-lg ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>
                Delegate your assets securely and embrace transformative interchain solutions for growth
            </p>
            <div className={`flex gap-4 ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>
                <button className=" text-base md:text-lg rounded-md px-4 py-2 text-slate-200 bg-orange-600 hover:bg-orange-700">Networks</button>
                <button className=" text-base md:text-lg rounded-md px-4 py-2 text-slate-200 bg-gray-500 hover:bg-gray-700" >Explorer</button>
            </div>
        
        </div>
    )
}
