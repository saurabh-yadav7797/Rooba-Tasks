import React from 'react'

function Sidebar(){
    return(
       
        <div className='flex flex-col content-center bg-white h-full my-2'>
        <div className='h-24 w-24 top-1 left-5.75 relative'>
            <img  className='w-auto' src='./images/p.jpg' alt=''/>
            <span className=' absolute bottom-4 -right-2	'>revego</span>
        </div>
        <div className='flex items-center gap-2 content-center bg-amber-100 w-75.75 h-12.5775 top-50.0375 left--1 my-2'>
        <img className='h-5 w-5 bg-amber-100'src='./images/home.jpg'  alt=''/>
            <span className='bg-amber-100'>Dashboard</span></div>
        <div className='flex items-center gap-2 my-2'>
            <img className='h-5 w-5'src='./images/giveaway.jpg' alt=''/>
            <span className=''>Giveaway List</span>
        </div>
        <div className='flex items-center gap-2 my-2' >
        <img className='h-5 w-5'src='./images/order.jpg' alt=''/>
        <span className=''>Order Detail</span>
            </div>
        <div className='flex items-center gap-2 my-2'>
            <img className='h-5 w-5'src='./images/two.jpg' alt=''/>
            <span className=''>Participant</span>
        </div>
        <div className='flex items-center gap-2 my-2'>
        <img className='h-5 w-5'src='./images/leader.jpg' alt=''/>
            <span className=''>Leaderboard</span></div>
        <div className='flex items-center gap-2 my-2'>
        <img className='h-5 w-5'src='./images/revi.jpg' alt=''/>
            <span className=''>Reviews</span></div>
        <div className='flex items-center gap-2 my-2'> 
        <img className='h-5 w-5'src='./images/parti.jpg' alt=''/>
            <span className=''>Participant Detail</span></div>
        <div className='flex items-center gap-2 my-2'>
        <img className='h-5 w-5'src='./images/calendar.jpg' alt=''/>
            <span className=''>Calendar</span>
            </div>
        <div className='flex items-center gap-2 my-2'>
        <img className='h-5 w-5'src='./images/chat.jpg' alt=''/>
            <span className=''>Chat</span></div>
        <div className='flex items-center gap-2 my-2'>
        <img className='h-5 w-5'src='./images/wallet.jpg' alt=''/>
            <span className=''>Wallet</span></div>
        </div>
    )
}
export default Sidebar