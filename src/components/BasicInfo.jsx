import React from 'react'
import { useGlobalContext } from '../Context';

const BasicInfo = () => {

    const {
        next,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        age,
        setAge,} = useGlobalContext();  

  return (
      <div>
          <form className='flex flex-col  space-y-6' onSubmit={(e) => { e.preventDefault(); next(); }}>
              <h1 className='text-xl xl:text-2xl font-bold text-center uppercase'>User Basic Information</h1>
              <input type="text" className='border border-gray-400 p-2 outline-none rounded-md xl:text-xl' value={firstName}  placeholder='Enter First Name' required onChange={(e)=>setFirstName(e.target.value)}/>
              <input type="text" className='p-2 border border-gray-400 outline-none rounded-md xl:text-xl' value={lastName} placeholder='Enter Last Name' required onChange={(e)=>setLastName(e.target.value)}/>
              <input type="number" className='p-2 border border-gray-400 outline-none rounded-md xl:text-xl' value={age} placeholder='Enter Age' required onChange={(e)=>setAge(e.target.value)}/>
              <div className='flex items-center justify-center'>
                  <button type="submit" className='py-2 px-6 bg-blue-400 rounded-md cursor-pointer flex items-center space-x-4 hover:bg-blue-300 xl:text-lg'>
                      <span>Next</span> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                     </svg>
                  </button>
              </div>
          </form>
      </div>
  )
}

export default BasicInfo;