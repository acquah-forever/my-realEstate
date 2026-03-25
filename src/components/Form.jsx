import React, { useForm } from 'react'

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div>
            <form>
                <h1>Ready to stop Searching and star Living?</h1>
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
                </label>
            </form>s
        </div>
    )
}

export default Form
