import React from 'react';
import { HiCog, HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi';
export default function Header() {
    return <div className='bg-white w-313 h-14.25 top-9.75 left-154.5 flex justify-between text-end' >
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute text-end'/>
            <input type="text" placeholder='Search' className='text-sm focus:outline-none active:outline-none border border-gray-300 rounded-lg '/>
        </div>
        <div className='flex items-center gap-2 mr-2'>
            <HiOutlineBell fontSize={24} />
            <HiOutlineChatAlt fontSize={24} />
            <HiCog fontSize={24} />
        </div>
        </div>
    
}


