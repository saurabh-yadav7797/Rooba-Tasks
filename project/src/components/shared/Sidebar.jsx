import React from 'react'

function Sidebar(){
    return(
       
        <div className='flex flex-col content-center bg-white h-full px-4 my-3'>
        <div className='h-24 w-24 top-1 left-5.75 relative'>
            <img  className='w-auto' src='./images/p.jpg' alt=''/>
            <span className=' absolute bottom-4 -right-2	'>revego</span>
        </div>
        <div className='flex items-center gap-2 px-4 my-4 bg-amber-100'>
        <img className='h-5 w-5 bg-amber-100'src='./images/home.jpg'  alt=''/>
            <span className='bg-amber-100'>Dashboard</span></div>
        <div className='flex items-center gap-2 px-4 my-4'>
            <img className='h-5 w-5'src='./images/giveaway.jpg' alt=''/>
            <span className=''>Giveaway List</span>
        </div>
        <div className='flex items-center gap-2 px-4 my-4' >
        <img className='h-5 w-5'src='./images/order.jpg' alt=''/>
        <span className=''>Order Detail</span>
            </div>
        <div className='flex items-center gap-2 px-4 my-4'>
            <img className='h-5 w-5'src='./images/two.jpg' alt=''/>
            <span className=''>Participant</span>
        </div>
        <div className='flex items-center gap-2 px-4 my-4'>
        <img className='h-5 w-5'src='./images/leader.jpg' alt=''/>
            <span className=''>Leaderboard</span></div>
        <div className='flex items-center gap-2 px-4 my-4'>
        <img className='h-5 w-5'src='./images/revi.jpg' alt=''/>
            <span className=''>Reviews</span></div>
        <div className='flex items-center gap-2 px-4  my-4'> 
        <img className='h-5 w-5'src='./images/parti.jpg' alt=''/>
            <span className=''>Participant Detail</span></div>
        <div className='flex items-center gap-2 px-4 my-4'>
        <img className='h-5 w-5'src='./images/calendar.jpg' alt=''/>
            <span className=''>Calendar</span>
            </div>
        <div className='flex items-center gap-2 px-4 my-4'>
        <img className='h-5 w-5'src='./images/chat.jpg' alt=''/>
            <span className=''>Chat</span></div>
        <div className='flex items-center gap-2 px-4 my-4'>
        <img className='h-5 w-5'src='./images/wallet.jpg' alt=''/>
            <span className=''>Wallet</span></div>
        <div className='flex items-center gap-2 px-4 my-4 pt-36'></div>

        <div className='flex items-center gap-2 px-4 my-4  bg-yellow-600'>
            <div className='bg-yellow-500'>Create Giveaway</div>
            <div className='h-24 w-24 top-1 left-10.75 relative bg-yellow-600'>
            <img  className='w-auto bg-yellow-600' src='./images/p.jpg' alt=''/>
            </div>
        </div>
        </div>
    )
}
export default Sidebar