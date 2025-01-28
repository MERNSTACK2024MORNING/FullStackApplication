import React from 'react'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
const LoginPage = () => {
      return (
            <div className='fixed inset-0 flex items-center justify-center bg-gray-900'>
                  <div className="w-full max-w-md px-4">
                        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                              <div className="flex justify-center mb-6">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
                                          <div className="absolute inset-0 bg-primary-600 rounded-full ">
                                                <img
                                                      className='relative w-full h-full rounded-full border-4 border-white  object-cover shadow-lg transform hover:scale-105 transition-transform duration-200'
                                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsXKejKrG37OxP48wE5KSh0YLuP7Zn8BKwA&s"
                                                      alt=""
                                                />
                                          </div>
                                    </div>
                              </div>
                              <h2 className='mb-6 text-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-900'>Sign in to your account</h2>
                              <form className='spce-y-4'>
                                    <div className="relative">
                                          <div className="absolute inset-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <EnvelopeIcon className='h-5 w-5 text-gray-500' />
                                          </div>
                                          <input
                                                className='form-input border gray-200 outline-indigo-600 p-2 rounded-lg pl-10 w-full'
                                                name='email'
                                                id='email'
                                                autoComplete='email'
                                                required
                                                placeholder='ridwaan@ridwaan.com'
                                                type="email" />
                                    </div>
                  
                                    <div className="relative">
                                          <div className="absolute inset-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <LockClosedIcon className='h-5 w-5 text-gray-500' />
                                          </div>
                                          <input
                                                className='form-input pl-10 w-full border p-2 mb-4 mt-4 rounded-lg outline-indigo-600'
                                                name='password'
                                                id='password'
                                                autoComplete='password'
                                                required
                                                placeholder='****************'
                                                type="password" />
                                    </div>
                                    <div className="">
                                          <button className='w-full bg-blue-600 p-2 rounded-lg text-2xl text-white font-bold tracking-wider mt-2'>Sign in</button>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      )
}

export default LoginPage