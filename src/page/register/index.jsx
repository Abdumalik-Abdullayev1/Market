import React, { useState } from 'react'
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [repeatPassword, setRepeatPassword] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='px-5 xl:px-32 my-32 flex justify-center'>
            <div className='border rounded-lg p-5 w-3/6'>
                <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: '24px' }}>Register</h2>
                <div className='grid grid-cols-1 p-5 gap-5'>
                    <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                        <h3 style={{ fontFamily: 'Oswald' }}>Elektron pochtangiz:</h3>
                        <input type="email" placeholder='Elektron pochtangizni kiriting' className='bg-transparent w-full outline-none' />
                    </div>
                    <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
                        <h3 style={{ fontFamily: 'Oswald' }}>Parol:</h3>
                        <input type={showPassword ? "text" : "password"} placeholder='Parolni kiriting' className='bg-transparent w-full outline-none' />
                        <span
                            onClick={() => setShowPassword(prev => !prev)}
                            className='absolute cursor-pointer right-2 top-6 p-3 text-2xl'
                        >
                            {showPassword ? <PiEye /> : <PiEyeClosed />}
                        </span>
                    </div>
                    <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
                        <h3 style={{ fontFamily: 'Oswald' }}>Parolni takrorlang:</h3>
                        <input type={repeatPassword ? "text" : "password"} placeholder='Parolni takrorlang' className='bg-transparent w-full outline-none' />
                        <span
                            onClick={() => setRepeatPassword(prev => !prev)}
                            className='absolute cursor-pointer right-2 top-6 p-3 text-2xl'
                        >
                            {repeatPassword ? <PiEye /> : <PiEyeClosed />}
                        </span>
                    </div>
                </div>
                <div className='px-5 flex items-end justify-between'>
                    <button className='p-3 bg-black text-white w-[40%] sm:w-[20%] rounded-lg text-center'>
                        Saqlash
                    </button>
                    <button onClick={() => navigate('/login')} className='underline hover:text-blue-500 duration-300'>LogIn</button>
                </div>
            </div>
        </div>
    )
}

export default Index
