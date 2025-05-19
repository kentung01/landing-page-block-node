import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

interface ScrollToNetworkPage {
  scrollToNetworkPage: () => void;
}

export default function HeroText({scrollToNetworkPage} : ScrollToNetworkPage) {
    const theme = useSelector((state: any) => state.theme.theme.isDark);


    //animation typing
    const [text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const fullText = "5KAGE"

       const handleClickExplorer = () => {
            window.location.href = "https://ping-dashboard-custom.netlify.app"  
        }

    
  
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
        <div className='flex flex-col justify-center items-center mt-20 md:mt-100 hover:scale-103 transition-transform duration-1000 ease-in-out'>
            <div className=''>
                <h1 className={`mb-4 text-2xl md:text-6xl font-bold ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>
                    <div className='flex flex-row'>
                        <div className='pe-30 md:pe-60'>
                            Welcome to 
                        </div>
                        <div className="typing-containerrounded-lg absolute ps-35 md:ps-85 mb-10 text-md">
                            <div className="typing-wrapper">
                                <span className='text-red-800'>{text}</span>
                                <span className="cursor"></span>
                            </div>
                        </div>

                    </div>
                    
                </h1>
            </div>
        
            <h2 className={`mb-6 text-xl md:text-2xl font-semibold ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>The Silent Guardians of Digital Networks</h2>
            <p className={`max-w-2xl mb-8 text-base md:text-lg ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>
                In the ever-expanding digital landscape, where data flows incessantly and networks form the backbone of modern civilization, visibility and control are paramount.
               
            </p>

            <p className={`max-w-2xl mb-8 text-base md:text-lg animate-pulse ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>
               Yet, the greatest risks often lurk beneath the surface—silent, gradual, and unnoticed until it is too late.
            </p>
            <div className={`flex gap-4 ${theme ? "text-slate-200" : "text-gray-800"} transition-colors duration-500 ease-in-out`}>
                <button onClick={scrollToNetworkPage} className=" text-base md:text-lg rounded-md px-4 py-2 text-slate-200 bg-red-800 hover:bg-red-700">Networks</button>
                <button onClick={handleClickExplorer} className=" text-base md:text-lg rounded-md px-4 py-2 text-slate-200 bg-gray-500 hover:bg-gray-700" >Explorer</button>
            </div>

        
        </div>
        
    )


}
