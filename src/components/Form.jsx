import React, { useForm } from 'react'

const Form = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data){
        alert(`Credentials:${data.firstname},${data.lastname},${data.phone},${data.email}${data.services}...submitted`)
    }

    return (
        <div className='p-15 flex justify-center'>
            <form className='p-10 bg-slate-100'onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col mb-10'>
                    <h1 className='mb-7 text-center text-3xl font-semibold'>Ready to stop Searching and <br /> Start Living?</h1>
                    <p className='text-center tracking-tight'>Reach out today for a focused discussion on your real estate goals.</p>
                    <p className='text-center tracking-tight'>We are ready to make it happen.</p>
                </div>
                <label className='p-3'>
                    <div className='flex space-x-15 justify-between items-center mb-17'>
                        <h1>First name*</h1>
                        <input className='outline-none' type="text"{...register(firstname,{required:'enter your firstname'})} />
                        {errors.firstname && <p>{errors.firstname.message}</p>}
                        <h1>Last name*</h1>
                        <input className='outline-none' type="text"{...register('lastname',{required:'enter your lastname'})} />
                        {errors.lastname && <p>{errors.lastname.message}</p>}
                    </div>
                    <div className='flex space-x-15 justify-between items-center mb-17'>
                        <h1>Phone number*</h1>
                        <input className='outline-none' type="number"{...register('phone',{required:'enter valid phone number'})} />
                        {errors.phone && <p>{errors.phone.message}</p>}
                        <h1>Email*</h1>
                        <input className='outline-none' type="email" {...register('email',{required:'enter valid email address'})}/>
                        {errors.email && <p>{errors.email.message}</p>}
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
                        <input className='border-b outline-none w-full' type="text"{...register('message',{required:'enter message'})} />
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-pink-400 px-20 py-4 rounded-lg cursor-pointer'type='submit'>Schedule a Call</button>
                    </div>
                </label>
            </form>s
        </div>
    )
}

export default Form
