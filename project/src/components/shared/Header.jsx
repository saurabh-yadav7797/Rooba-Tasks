import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
export default function Header() {
    return <div className='bg-white w-313 h-14.25 top-9.75 left-154.5 flex justify-between items-center' >
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute flex_col2'/>
            <input type="text" placeholder='Search' className='text-sm focus:outline-none active:outline-none border border-gray-300 rounded-lg '/>
        </div>
        <div>side</div>
        </div>
    
}


