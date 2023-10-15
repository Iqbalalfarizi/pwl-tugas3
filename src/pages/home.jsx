import React from 'react';
import profile from '../img/profile.png'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-center h-screen bg-slate-500'>
            <div className='mx-64 flex items-center justify-between p-36'>
                <img src={profile} alt='Perunggu Profile' className='mr-4 h-72 rounded-xl' />
                <div className='ml-4 '>
                    <p className='text-5xl mb-2'>Hai👋 kami <span className='text-orange-500'>Perunggu</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolore?</p>
                    <button className='bg-red-400 p-2 rounded-md mt-2' onClick={() => navigate('/about')}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Home