import React from 'react'
import logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <nav className='bg-gray-800 p-4 border-slate-900	'>
            <div div className='container ml-10 flex justify-between items-center' >
                <img src={logo} alt='' className='h-20 w-20 border-slate-200	' />
                <ul className='flex space-x-14'>
                    <li className='text-white text-2xl cursor-pointer hover:text-yellow-400' onClick={() => navigate('/')}>Home</li>
                    <li className='text-white text-2xl cursor-pointer hover:text-yellow-400' onClick={() => navigate('/about')}>About</li>
                    <li className='text-white text-2xl cursor-pointer hover:text-yellow-400' onClick={() => navigate('/contact')}>Contact</li>
                </ul>
            </div>
        </nav >
    )
}
export default Header