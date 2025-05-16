import React from 'react'
import { BiUser } from "react-icons/bi";
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";
import { VscChecklist, VscLocation } from "react-icons/vsc";
import { GrMapLocation } from "react-icons/gr";
import { ImStarEmpty } from "react-icons/im";


const Index = () => {
    return (
        <div className='my-24 px-32'>
            <h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Profile</h1>
            <div className='grid grid-cols-4 gap-5'>
                <div className='border rounded-md max-w-xs p-5 my-5 space-y-5 text-xl'>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full' style={{ fontFamily: "OswaldLight", font: "bold" }}>
                        <BiUser />
                        <span>My Profile</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiUserSettingsLine />
                        <span>Profile Settings</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxHamburgerMenu />
                        <span>History</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <VscChecklist />
                        <span>History delivery</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <VscLocation />
                        <span>Location</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <GrMapLocation />
                        <span>Location settings</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxLockOpen2 />
                        <span>Password</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiLogoutBoxRLine />
                        <span>Log out</span>
                    </button>
                </div>
                <div className='col-span-3 my-5'>
                    <h2 style={{ fontFamily: 'Oswald' }}>Salom, Mehmon!</h2>
                    <div className='grid grid-cols-3 text-center p-5 gap-5'>
                        <div className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><BiUser /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Mening profilim</p>
                        </div>
                        <div className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><VscChecklist /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Buyurtmalar</p>
                        </div>
                        <div className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><VscLocation /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Bizning manzil</p>
                        </div>
                        <div className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><RiUserSettingsLine /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Profilni tahrirlash</p>
                        </div>
                        <div className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><ImStarEmpty /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Tanlangan mahsulotlar</p>
                        </div>
                        <div className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><RiLogoutBoxRLine /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Chiqish</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
