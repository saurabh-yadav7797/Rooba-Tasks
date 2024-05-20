import React from 'react';
import { HiCog, HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi';
export default function Header() {
    return <div className='bg-white w-313 h-14.25 top-9.75 left-154.5 flex justify-between text-end my-3 px-4' >
        <div className='my-3 px-4'></div>
        <div className='flex justify-between relative my-2 px-2'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 text-end'/>
            <input 
                type="text" 
                placeholder='Search' 
                className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4 '/>
        </div>
        <div className='flex items-center gap-2 mr-2 my-2 px-4'>
            <HiOutlineBell fontSize={24} />
            <HiOutlineChatAlt fontSize={24} />
            <HiCog fontSize={24} />
        </div>
        </div>
    
}


