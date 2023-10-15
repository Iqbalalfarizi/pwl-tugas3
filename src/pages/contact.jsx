import React from 'react';
import ContactForm from '../components/formContact';
import logo from '../img/logo.png'

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-slate-500'>
            <div className='bg-slate-200 w-4/5'>
                <h1 className='text-4xl p-8 text-center'>Kirimkan Pesan Anda!</h1>
                <div className='w-4/5 flex mx-auto items-center'>
                    <img src={logo} alt='Logo Perunggu' className='h-full w-64 mb-20 ml-10 ' />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;