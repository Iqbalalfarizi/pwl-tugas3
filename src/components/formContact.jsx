import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nama: '',
        asal: '',
        pesan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${formData.nama}\n${formData.asal}\n${formData.pesan}`);
    }
    return (
        <form onSubmit={handleSubmit} className='w-full p-10 text-center ml-20'>
            <div className='mb-8 flex flex-row'>
                <input
                    type='text'
                    placeholder='Masukkan Nama Anda'
                    id='nama'
                    name='nama'
                    value={formData.nama}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-500'
                    required
                />
            </div>
            <div className='mb-8 flex flex-row'>
                <input
                    type='text'
                    placeholder='Masukkan Asal Kota Anda'
                    id='asal'
                    name='asal'
                    value={formData.asal}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-500'
                    required
                />
            </div>
            <div className='mb-6 flex flex-row'>
                <textarea
                    id='pesan'
                    placeholder='Tuliskan Pesan Anda'
                    name='pesan'
                    value={formData.pesan}
                    onChange={handleChange}
                    className='w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500'
                    required
                />
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Submit
            </button>
        </form>
    );
}

export default ContactForm;
