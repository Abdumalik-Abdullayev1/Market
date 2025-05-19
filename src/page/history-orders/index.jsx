import React from 'react'
import { BiUser } from "react-icons/bi";
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";
import { VscChecklist, VscLocation } from "react-icons/vsc";
import { GrMapLocation } from "react-icons/gr";
import { ImStarEmpty } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Index = () => {
    const navigate = useNavigate()
    return (
        <div className='my-24 px-5 xl:px-32'>
            <h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Profile</h1>
            <div className='grid lg:grid-cols-4 gap-5'>
                <div className='border rounded-md max-w-xs p-5 my-5 space-y-3 text-xl hidden lg:block'>
                    <button onClick={() => navigate('/profile')} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "bold" }}>
                        <BiUser />
                        <span>Profil</span>
                    </button>
                    <button onClick={() => navigate('/edit-profile')} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiUserSettingsLine />
                        <span>Profilni tahrirlash</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxHamburgerMenu />
                        <span>Tarix</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <VscLocation />
                        <span>Joylashuv</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <GrMapLocation />
                        <span>Joylashuvni tahrirlash</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxLockOpen2 />
                        <span>Parol</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiLogoutBoxRLine />
                        <span>Chiqish</span>
                    </button>
                </div>
                <div className='col-span-3 my-5'>
                    <div className='grid grid-cols-4 items-center'>
                        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: "24px" }}>Buyurtmalar</h2>
                      
                            <DropdownMenu>
                                <DropdownMenuTrigger  className='lg:hidden'>Open</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Buyurtmalar</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={()=> navigate('/profile')}>Profil</DropdownMenuItem>
                                    <DropdownMenuItem>Profilni tahrirlash</DropdownMenuItem>
                                    <DropdownMenuItem>Joylashuv</DropdownMenuItem>
                                    <DropdownMenuItem>Parol</DropdownMenuItem>
                                    <DropdownMenuItem>Chiqish</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        
                    </div>
                    <div className='grid grid-cols-1 sm500:grid-cols-2 md:grid-cols-3 p-5 gap-5'>
                        <div className='border p-3 flex justify-between'>
                            <div className=''>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between'>
                            <div className=''>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between'>
                            <div className=''>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between'>
                            <div className=''>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between'>
                            <div className=''>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between'>
                            <div className=''>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
