import React, { useForm } from 'react'

const Form = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className='p-15 flex justify-center'>
            <form className='p-10 bg-slate-100'>
                <div className='flex flex-col mb-10'>
                    <h1 className='mb-7 text-center text-3xl font-semibold'>Ready to stop Searching and <br /> Start Living?</h1>
                    <p className='text-center tracking-tight'>Reach out today for a focused discussion on your real estate goals.</p>
                    <p className='text-center tracking-tight'>We are ready to make it happen.</p>
                </div>
                <label>
                    <div className='flex space-x-15 justify-between items-center mb-17'>
                        <h1>Name*</h1>
                        <input className='outline-none' type="text" />
                        <h1>Last name*</h1>
                        <input className='outline-none' type="text" />
                    </div>
                    <div className='flex space-x-15 justify-between items-center mb-17'>
                        <h1>Phone number*</h1>
                        <input className='outline-none' type="number" />
                        <h1>Email*</h1>
                        <input className='outline-none' type="email" />
                    </div>
                    <h1 className='mb-10'>Services*</h1>
                    <select className='w-full' name='service'>
                        <option value="">Select A Service</option>
                        <option value="Selling">Selling</option>
                        <option value="Buying">Buying</option>
                        <option value="Investing">Investing</option>
                        <option value="Leasing">Leasing</option>

                    </select>
                </label>
            </form>s
        </div>
    )
}

export default Form
