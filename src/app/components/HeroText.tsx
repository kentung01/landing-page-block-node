import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function HeroText() {
    const theme = useSelector((state: any) => state.theme.theme.isDark);


    //animation typing
    const [text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const fullText = "Company"
  
    useEffect(() => {
      let index = 0
      let direction = 1 // 1 for typing, -1 for erasing
  
      const timer = setInterval(() => {
        if (direction === 1) {
          // Typing forward
          if (index < fullText.length) {
            setText(fullText.substring(0, index + 1))
            index++
          } else {
            // Change direction to erasing
            direction = -1
            // Small pause at the end of typing
            setTimeout(() => {}, 1000)
          }
        } else {
          // Erasing backward
          if (index > 0) {
            index--
            setText(fullText.substring(0, index))
          } else {
            // Change direction to typing
            direction = 1
            // Small pause before starting to type again
            setTimeout(() => {}, 2000)
          }
        }
  
        setIsTyping(direction === 1)
      }, 600)
  
      return () => clearInterval(timer)
    }, [])


    return (
        <div className='flex flex-col justify-center items-center mt-50 md:mt-100'>
            <div className=''>
                <h1 className={`mb-4 text-2xl md:text-6xl font-bold ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>
                    <div className='flex flex-row'>
                        <div className='pe-30 md:pe-60'>
                            Welcome to 
                        </div>
                        <div className="typing-containerrounded-lg absolute ps-35 md:ps-85 mb-10 text-md">
                            <div className="typing-wrapper">
                                <span>{text}</span>
                                <span className="cursor"></span>
                            </div>
                        </div>

                    </div>
                    
                </h1>
            </div>
        
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
