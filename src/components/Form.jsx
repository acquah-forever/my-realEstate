import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data) {
        alert(`Credentials:${data.firstname},${data.lastname},${data.phone},${data.email}${data.services}...submitted`)
    }

    return (
        <div className='flex justify-center px-4'>
            <form className='p-5 bg-slate-100 max-w-3xl w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col mb-10'>
                    <h1 className='mb-7 text-center text-2xl md:text-3xl font-semibold'>Ready to Stop Searching and <br /> Start Living?</h1>
                    <p className='text-center tracking-tight text-sm md:text-base'>Reach out today for a focused discussion on your real estate goals.</p>
                    <p className='text-center tracking-tight text-sm md:text-base'>We are ready to make it happen.</p>
                </div>
                <label className='p-3'>

                    <div className='flex flex-col md:flex-row md:space-x-4 justify-between items-center mb-8 md:mb-17'>
                        <div className='flex flex-col space-y-3 w-full md:w-auto mb-4 md:mb-0'>
                            <div className='flex flex-col md:flex-row md:items-center md:space-x-3'>
                                <h1 className='text-sm md:text-base'>First name*</h1>
                                <input className='outline-none p-2 bg-sky-200 w-full md:w-auto' type="text"{...register('firstname', { required: 'Enter your firstname' })} />
                            </div>
                            <div>
                                {errors.firstname && <p className='text-red-500 text-sm'>{errors.firstname.message}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col space-y-3 w-full md:w-auto'>
                            <div className='flex flex-col md:flex-row md:items-center md:space-x-3'>
                                <h1 className='text-sm md:text-base'>Last name*</h1>
                                <input className='outline-none p-2 bg-sky-200 w-full md:w-auto' type="text"{...register('lastname', { required: 'Enter your lastname' })} />
                            </div>
                            <div>
                                {errors.lastname && <p className='text-red-500 text-sm'>{errors.lastname.message}</p>}
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col md:flex-row md:space-x-4 justify-between items-center mb-8 md:mb-17'>
                        <div className='flex flex-col space-y-3 w-full md:w-auto mb-4 md:mb-0'>
                            <div className='flex flex-col md:flex-row md:items-center md:space-x-3'>
                                <h1 className='text-sm md:text-base'>Phone number*</h1>
                                <input className='outline-none p-2 bg-sky-200 w-full md:w-auto' type="number"{...register('phone', { required: 'Enter phone number' })} />
                            </div>
                            <div>
                                {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col space-y-3 w-full md:w-auto'>
                            <div className='flex flex-col md:flex-row md:items-center md:space-x-3'>
                                <h1 className='text-sm md:text-base'>Email*</h1>
                                <input className='outline-none p-2 bg-sky-200 w-full md:w-auto' type="email" {...register('email', { required: 'Enter email address' })} />
                            </div>
                            <div>
                                {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                            </div>

                        </div>
                    </div>

                    <h1 className='text-sm md:text-base mb-4'>Select a Service</h1>
                    <select className='w-full bg-sky-300 p-2 mb-10 md:mb-20' name='service'{...register('service', { required: 'Select service' })}>
                        <option value=""></option>
                        <option value="Selling">Selling</option>
                        <option value="Buying">Buying</option>
                        <option value="Investing">Leasing</option>
                        <option value="Leasing">Investing</option>
                    </select>
                    {errors.service && <p className='text-red-500 text-sm'>{errors.service.message}</p>}

                    <div className='mb-8 md:mb-15'>
                        <h1 className='mb-6 md:mb-12 text-sm md:text-base'>Message</h1>
                        <input className='border-b outline-none w-full' type="text"{...register('message', { required: 'Enter message' })} />
                        {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-pink-400 text-lg md:text-xl px-8 md:px-20 py-3 md:py-4 rounded-lg cursor-pointer w-full md:w-auto' type='submit'>Schedule Meeting</button>
                    </div>

                </label>
            </form>
        </div>
    )
}

export default Form
