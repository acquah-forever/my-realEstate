import React, { useForm } from 'react'

const Form = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className='p-15'>
            <form className='p-10 bg-amber-200 max-w-7xl mx-auto'>
                <h1>Ready to stop Searching and Start Living?</h1>
                <p>Reach out today for a focused discussion on your real estate goals.</p>
                <p>We are ready to make it happen.</p>
                <label>
                    <h1>Name*</h1>
                    <input type="text" />
                    <h1>Last name*</h1>
                    <input type="text" />
                    <h1>Phone number*</h1>
                    <input type="number" />
                    <h1>Email*</h1>
                    <input type="email" />
                    <h1>Services*</h1>
                </label>
            </form>s
        </div>
    )
}

export default Form
