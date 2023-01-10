import React from 'react'
import { useGlobalContext } from '../Context';

const AddressInfo = () => {

    const {
        next,
        back,
        state,
        setState,
        city,
        setCity,
        street,
        setStreet} = useGlobalContext();   

  return (
      <div>
          <form className='flex flex-col space-y-6' onSubmit={(e) => { e.preventDefault(); next(); }}>
             <h1 className='text-xl font-bold text-center uppercase xl:text-2xl'>User Address Information</h1>
              <input type="text" value={state} className='p-2 border border-gray-400 outline-none rounded-md xl:text-xl' placeholder='Enter State' required onChange={(e)=>setState(e.target.value)}/>
              <input type="text" value={city}  className='p-2 border border-gray-400 outline-none rounded-md xl:text-xl' placeholder='Enter City' required onChange={(e)=>setCity(e.target.value)}/>
              <input type="text" value={street} className='p-2 border border-gray-400 outline-none rounded-md xl:text-xl' placeholder='Enter Street' required onChange={(e)=>setStreet(e.target.value)}/>
            <div className='flex items-center justify-center space-x-8'>
              <button className='py-2 px-6 bg-blue-400 rounded-md cursor-pointer flex items-center space-x-4 hover:bg-blue-300 xl:text-lg' type="button" value="Back" onClick={back}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                      </svg>
                      <span>Back</span>
              </button>
                  <button className='py-2 px-6 bg-blue-400 rounded-md cursor-pointer flex items-center space-x-4 hover:bg-blue-300 xl:text-xl' type="submit">
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

export default AddressInfo;