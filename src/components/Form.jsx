import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data) {
        alert(`Credentials:${data.firstname},${data.lastname},${data.phone},${data.email}${data.services}...submitted`)
    }

    return (
        <div className='flex justify-center'>
            <form className='p-5 bg-slate-100 max-w-3xl' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col mb-10'>
                    <h1 className='mb-7 text-center text-3xl font-semibold'>Ready to Stop Searching and <br /> Start Living?</h1>
                    <p className='text-center tracking-tight'>Reach out today for a focused discussion on your real estate goals.</p>
                    <p className='text-center tracking-tight'>We are ready to make it happen.</p>
                </div>
                <label className='p-3'>

                    <div className='flex space-x-15 justify-between items-center mb-17'>
                        <div className='flex flex-col space-y-3'>
                            <div className='flex items-center space-x-3'>
                                <h1>First name*</h1>
                                <input className='outline-none p-2 bg-sky-200' type="text"{...register('firstname', { required: 'Enter your firstname' })} />
                            </div>
                            <div>
                                {errors.firstname && <p className='text-red-500'>{errors.firstname.message}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col space-y-3'>
                            <div className='flex items-center space-x-3'>
                                <h1>Last name*</h1>
                                <input className='outline-none p-2 bg-sky-200' type="text"{...register('lastname', { required: 'Enter your lastname' })} />
                            </div>
                            <div>
                                {errors.lastname && <p className='text-red-500'>{errors.lastname.message}</p>}
                            </div>
                        </div>
                    </div>


                    <div className='flex space-x-15 justify-between items-center mb-17'>
                        <div className='flex flex-col space-y-3'>
                            <div className='flex items-center space-x-3'>
                                <h1>Phone number*</h1>
                                <input className='outline-none p-2 bg-sky-200' type="number"{...register('phone', { required: 'Enter phone number' })} />
                            </div>
                            <div>
                                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col space-y-3'>
                            <div className='flex items-center space-x-3'>
                                <h1>Email*</h1>
                                <input className='outline-none p-2 bg-sky-200' type="email" {...register('email', { required: 'Enter email address' })} />
                            </div>
                            <div>
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>

                        </div>
                    </div>

                    <h1>Select a Service</h1>
                    <select className='w-full bg-sky-300 p-2 mb-20' name='service'{...register('service', { required: 'Select service' })}>
                        <option value=""></option>
                        <option value="Selling">Selling</option>
                        <option value="Buying">Buying</option>
                        <option value="Investing">Investing</option>
                        <option value="Leasing">Leasing</option>
                    </select>
                    {errors.service && <p className='text-red-500'>{errors.service.message}</p>}

                    <div className='mb-15'>
                        <h1 className='mb-12'>Message</h1>
                        <input className='border-b outline-none w-full' type="text"{...register('message', { required: 'Enter message' })} />
                        {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-pink-400 text-xl px-20 py-4 rounded-lg cursor-pointer' type='submit'>Schedule a Call</button>
                    </div>

                </label>
            </form>s
        </div>
    )
}

export default Form
