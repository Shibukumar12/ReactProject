import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { login as storeLogin } from './store/featureSlicing'
import { authservice } from './appwrite/Auth'
import { useNavigate, Link } from 'react-dom'
import { useForm } from 'react-hook-form'
import { Button, Input } from './components/index'

function LoginPage() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const { register, handleSubmit } = useForm()

  const login = async (data) => {
    setError('')

    try {
      const session = await authservice.Login(data)
      if (session) {
        const userData = await authservice.Getcurrentuser()

        if (userData) {
          dispatch(storeLogin(userData))
          navigate('/')
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div
      className='flex items-center justify-center w-full'
    >
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>

        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
            <Input
              label='Email'
              placeholder='Enter The Email'
              type='email'
              {...register("email", { required: true })}
            />

            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            <Button
              type="submit"
              className="w-full"
            >Sign in</Button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default LoginPage