import React, { useForm } from 'react'

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className='p-15 flex justify-center'>
            <form className='p-10 bg-slate-100'>
                <div className='flex flex-col mb-10'>
                    <h1 className='mb-7 text-center text-3xl font-semibold'>Ready to stop Searching and <br /> Start Living?</h1>
                    <p className='text-center tracking-tight'>Reach out today for a focused discussion on your real estate goals.</p>
                    <p className='text-center tracking-tight'>We are ready to make it happen.</p>
                </div>
                <label className='p-3'>
                    <div className='flex space-x-15 justify-between items-center mb-17'>
                        <h1>Firstname*</h1>
                        <input className='outline-none' type="text" />
                        <h1>Last name*</h1>
                        <input className='outline-none' type="text"{...register('firstname')} />
                    </div>
                    <div className='flex space-x-15 justify-between items-center mb-17'>
                        <h1>Phone number*</h1>
                        <input className='outline-none' type="number" />
                        <h1>Email*</h1>
                        <input className='outline-none' type="email" />
                    </div>
                    <h1 className='mb-7'>Services*</h1>
                    <select className='w-full mb-20' name='service'>
                        <option value="">Select A Service</option>
                        <option value="Selling">Selling</option>
                        <option value="Buying">Buying</option>
                        <option value="Investing">Investing</option>
                        <option value="Leasing">Leasing</option>
                    </select>
                    <div className='mb-15'>
                        <h1 className='mb-12'>Message</h1>
                        <input className='border-b outline-none w-full' type="text" />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-pink-400 px-20 py-4 rounded-lg cursor-pointer'>Schedule a Call</button>
                    </div>
                </label>
            </form>s
        </div>
    )
}

export default Form
