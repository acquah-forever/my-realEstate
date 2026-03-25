import React, { useForm } from 'react'

const Form = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className='p-15'>
            <form className='p-10 bg-slate-100 max-w-7xl mx-auto'>
                <div className='flex flex-col mb-10'>
                    <h1 className='mb-7 text-center text-3xl font-semibold'>Ready to stop Searching and <br /> Start Living?</h1>
                    <p className='text-center tracking-tight'>Reach out today for a focused discussion on your real estate goals.</p>
                    <p className='text-center tracking-tight'>We are ready to make it happen.</p>
                </div>
                <label>
                    <div className='flex justify-between items-center mb-17'>
                        <h1>Name*</h1>
                        <input className='border-b outline-none' type="text" />
                        <h1>Last name*</h1>
                        <input className='border-b outline-none' type="text" />
                    </div>
                    <div className='flex justify-between items-center mb-17'>
                        <h1>Phone number*</h1>
                        <input className='outline-none' type="number" />
                        <h1>Email*</h1>
                        <input className='outline-none' type="email" />
                    </div>
                    <h1>Services*</h1>
                </label>
            </form>s
        </div>
    )
}

export default Form
