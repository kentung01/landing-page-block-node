import Image from 'next/image'
import React, { useState } from 'react'
import { CiDark, CiMenuKebab } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../redux/slice/themeSlice';
import { IoSunnyOutline } from 'react-icons/io5';

export default function Navbar({serviceClick}: any) {
    const theme = useSelector((state: any) => state.theme.theme.isDark);
    const dispatch = useDispatch();

    const [isSmallMenu, setIsSmallMenu] = useState(false)

    const handleSmallMenu = () => {
        setIsSmallMenu(!isSmallMenu)
    }
    const handleClickNavbarButton = (item: any) => {
        if(item == "Explorer"){
            window.location.href = "https://ping-dashboard-custom.netlify.app"
        }

        if(item == "Service"){
            serviceClick()
        }
       
    }

    const handleChangeTheme = () => {
        dispatch(setDarkMode(!theme))
        // alert(theme)
     
    }

    const ToggleTheme = () => {
        return (
            <div className='rounded-full w-10 h-10 items-center justify-center' onClick={handleChangeTheme} >
                {theme ?
                    <IoSunnyOutline size={30} />
                    :
                    <CiDark size={30} />
                }
            </div>
        )
    }
    const menu = [
        "Service",
        "Explorer",
        "Contacts",
        ToggleTheme()

    ]

    return (
        <div className='w-screen flex justify-center '>
            
            <div className={` container w-full h-15 md:h-27 border-b border-black flex justify-between items-center shadow-lg fixed z-50 ${theme ? "bg-red-900 text-white" : "bg-white text-black"} transition-colors duration-500 ease-in-out rounded-b-xl`}>
                <div className=' items-center text-center ps-10 flex flex-row'>
                    <Image className={` lg:w-[100px] w-[50px] rounded-full`} src="/5kage.png" alt="logo" width={200} height={500} />
                    <p className='grenze-gotisch-title'>5 KAGE LABS</p>
                </div>
            
                <div className='gap-10 me-20 hidden md:flex'>
                    {menu.map((item, index) => {
                        return (
                            <div onClick={() => handleClickNavbarButton(item)} key={index} className={` ${index == menu.length - 1 ? "rounded-full ps-2" : "rounded-md px-2"} pt-2 text-lg hover:text-white hover:bg-red-800 text-center items-center cursor-pointer ${theme ? "bg-red-900 text-white" : "bg-white text-black"} transition-colors duration-500 ease-in-out`}>
                                {item}
                            </div>
                        )
                    })}
                </div>

                

                <div className=' me-10 md:hidden flex gap-2' >
                    <div onClick={handleChangeTheme}>
                        {theme ?
                            <IoSunnyOutline size={30} />
                            :
                            <CiDark size={30} />
                        }
                    </div>
                    <div className='cursor-pointer' onClick={handleSmallMenu}>
                        <CiMenuKebab />

                    </div>
                </div>
                {isSmallMenu &&

                    <div className={`absolute right-0 top-15 w-50 p-5 ${theme ? "bg-gray-800 text-slate-200" : "bg-white  text-black"} transition-colors duration-500 ease-in-out`}>
                        {menu.map((item, index) => {
                            return (
                                <div onClick={() => handleClickNavbarButton(item)} key={index} className={` ${index == menu.length - 1 ? "rounded-full ps-2" : "rounded-md px-2"} pt-2 text-lg hover:text-white hover:bg-red-800 text-center items-center cursor-pointer transition duration-500 ease-in-out`}>
                                    {index == menu.length - 1 ? "" : item}
                                </div>
                            )
                        })}
                    </div>

                }

            </div>
        </div>

    )
}
