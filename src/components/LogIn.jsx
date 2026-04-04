import React,{useState,useContext} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../context/AuthContext'

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const{signIn} = useContext(Auth)
    const[error,setError] = useState('')
    const navigate = useNavigate()

    function onSubmit(data) {
        setError(null)
        let result;
        result = signIn (data.email, data.password)

        if(result.success){
            navigate('/')
        } else{
            setError(result.error)
        }
        
    }
    function handleClick(){
        navigate('/signUp')
    }

    return (
        <div className=' max-w-xl mx-auto p-7'>
            <div className='py-20 px-10 flex flex-col justify-center items-center w-full bg-indigo-300/50 rounded-2xl'>
                <div className='mb-10'>
                    <h1 className='text-5xl font-semibold'>Kojo Addo</h1>
                </div>
                <form className='bg-white/60 px-10 py-7 w-full border-2 rounded-xl space-y-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col space-y-2'>
                        <label className='text-xl'>Email:</label>
                        <input className='border p-2 rounded' type="email" placeholder='Enter Email' {...register('email', { required: 'Enter Email' })} />
                        {errors.email && <p className='text-red-500 text-md'>{errors.email.message}</p>}
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label className='text-xl'>Password:</label>
                        <input className='border p-2 rounded' type="password" placeholder='Enter Password' {...register('password', {
                            required: 'Enter Password',
                            minLength: {
                                value: 5,
                                message: 'Password should be at least 5 Characters'
                            },
                            maxLength: {
                                value: 128
                            }
                        })} />
                        {errors.password && <p className='text-red-500 text-md'>{errors.password.message}</p>}
                    </div>

                    <div>
                        <button className='bg-sky-500 text-white text-xl px-6 py-4 rounded cursor-pointer' type='submit'>Log In</button>
                    </div>

                    <div className='flex justify-center py-3'>
                        {error && <p className='text-red-600 text-lg'>{error}</p>}
                    </div>

                    <div className='flex justify-center'>
                        <p className='text-md sm:text-lg'>New Here? &nbsp; <span className='cursor-pointer        text-sky-600  border-b'onClick={handleClick}>Sign Up</span></p>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default LogIn
