import React, { useState } from 'react'
import { HiOutlineMenuAlt4, HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { ImStarEmpty } from "react-icons/im";
import { BiUser } from "react-icons/bi";
import Logo from '../../assets/Logo1.png'

const Index = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className='py-5 md:px-16 xl:px-36 fixed z-10 top-0 w-full bg-[rgb(18,18,20)]'>
            <div className='flex items-center justify-around md:justify-between'>
                <div className='flex items-center gap-5 md:hidden'>
                    <HiOutlineMenuAlt4
                        style={{ color: 'white', fontSize: '32px', cursor: 'pointer' }}
                        onClick={() => setIsSidebarOpen(true)}
                    />
                    <HiOutlineSearch style={{ color: "white", fontSize: "25px" }} />
                </div>
                {isSidebarOpen && (
                    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 p-4 transition-transform duration-300">
                        <div className='flex justify-between items-start'>
                            <img src={Logo} alt="" className='w-1/3'/>
                        <button
                            className="mb-4 text-white"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            X
                        </button>
                        </div>
                        <div className='space-y-2'>
                            <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Kiyimlar</button>
                            <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Oyoq kiyimlar</button>
                            <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Aksesuarlar</button>
                            <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Brendlar</button>
                            <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Xarajatlarni hisoblash</button>
                            <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Ma'lumot</button>
                        </div>
                    </div>
                )}
                <div className='flex items-center gap-10'>
                    <img src={Logo} alt="CompanyLogo" />
                    <HiOutlineMenuAlt4
                        style={{ color: 'white', fontSize: '32px', cursor: 'pointer' }}
                        className='hidden md:block xl:hidden'
                        onClick={() => setIsSidebarOpen(true)}
                    />
                </div>
                <div className='w-4/6 hidden xl:flex justify-around'>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="kiyimlar">Kiyimlar</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="oyoq kiyimlar">Oyoq kiyimlar</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="aksessuarlar">Aksessuarlar</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="brendlar">Brendlar</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="xarajatlarni hisoblash">Xarajatlarni hisoblash</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="ma'lumot">Ma'lumot</option>
                    </select>
                </div>
                <div className='flex items-center gap-5 md:gap-6'>
                    <HiOutlineSearch style={{ color: "white", fontSize: "25px" }} className='hidden md:block' />
                    <ImStarEmpty style={{ color: "white", fontSize: "25px" }} />
                    <BiUser style={{ color: "white", fontSize: "25px" }} />
                    <div className='text-white flex items-end'>
                        <HiOutlineShoppingBag style={{ color: "white", fontSize: "25px" }} />
                        <span className='text-slate-400 text-sm hidden md:block'>11 899 ₽</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
