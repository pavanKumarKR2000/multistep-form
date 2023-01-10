import React from 'react'
import { useGlobalContext } from '../Context';

const AccountInfo = () => {

    const {
        back,
        accountNumber,
        setAccountNumber,
        ifscCode,
        setIfscCode,
        password,
        setPassword} = useGlobalContext(); 

  return (
      <div>
          <form className='flex flex-col space-y-6' onSubmit={()=>alert("form successfully submitted")}>
              <h1 className='text-xl font-bold text-center uppercase  xl:text-2xl'>User Account Information</h1>
              <input type="number" value={accountNumber} className='border border-gray-400 p-2 outline-none rounded-md  xl:text-xl' placeholder='Enter Account Number' required onChange={(e)=>setAccountNumber(e.target.value)}/>
              <input type="text" value={ifscCode} className='border border-gray-400 p-2 outline-none rounded-md  xl:text-xl' placeholder='Enter IFSC code' required onChange={(e)=>setIfscCode(e.target.value)}/>
              <input type="password" value={password} className='border border-gray-400 p-2 outline-none rounded-md  xl:text-xl' placeholder='Enter Password' required onChange={(e)=>setPassword(e.target.value)}/>
              <div className='flex items-center justify-center space-x-8'>
                  <button type="button" className='py-2 px-6 bg-blue-400 rounded-md cursor-pointer flex items-center space-x-4 hover:bg-blue-300  xl:text-lg' onClick={back}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                      </svg>
                      <span>Back</span>
                  </button>
                  <button type="submit" className='py-2 px-6 bg-green-300 rounded-md cursor-pointer flex items-center space-x-4 hover:bg-green-200  xl:text-lg'>
                      <span>Submit</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                     </svg>
                  </button>
              </div>
          </form>    
      </div>
  )
}

export default AccountInfo;