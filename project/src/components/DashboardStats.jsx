import React from 'react';
export default function DashboardStats() {
    return(
        <div className=' '>
        <div className='flex w-full float-left my-2 px-4 justify-between'>
            <div>
            <div className='w-2/4 my-2 px-2'>Dashboard</div>
            <div className='w-full my-2 px-2 text-xs font-light'>Hi, Emirhan.Welcome back to Prevego Admin!</div>
            </div>
            <div className="flex items-center gap-2 my-2 px-4 float-right text-right bg-white">
                <img className='h-5 w-5'src='./images/vector.jpg' alt=''/>
                <div className='my-2 px-4'>
                <div className='text-left '>Filter Periode</div>
                <div className='text-xs font-light'>17 April 2020-21 May 2020</div>
                </div>
            </div>

        </div>
        <div className='flex justify-items-stretch gap-4 w-full my-2 px-4'>
            <BoxWrapper>
                <div className='h-20 w-20 flex items-center justify-center my-2 px-4'>
                 <img  className='.object-fill h-90 w-100 text-2xl text-white' src='./images/p.jpg' alt=''/>
                </div>
                <div className='pl-4 my-2 px-4'> 
                    <strong className='text-xl text-gray-700 font-semibold'>75</strong>
                    
                    <div className='text-xs'>Total Campaign</div>
                    <div className='text-xs font-light'>4%(30days)</div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
            <div className='h-20 w-20 flex items-center justify-center my-2 px-4'>
                <img  className='w-auto text-2xl text-white' src='./images/people.jpg' alt=''/>
                </div>
                <div className='pl-4 my-2 px-4'> 
                    <strong className='text-xl text-gray-700 font-semibold'>357</strong>
                    
                    <div className='text-xs'>Total Participant </div>
                    <div className='text-xs font-light'>4%(30days)</div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
            <div className='h-20 w-20 flex items-center justify-center my-2 px-4'>
                <img  className='w-auto text-2xl text-white' src='./images/hand.jpg' alt=''/>
                </div>
                <div className='pl-4 my-2 px-4'> 
                    <strong className='text-xl text-gray-700 font-semibold'>20</strong>
                    
                    <div className='text-xs'>Total Partners</div>
                    <div className='text-xs font-light'>25%(30days)</div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
            <div className='h-20 w-20 flex items-center justify-center my-2 px-4'>
                <img  className='w-auto text-2xl text-white' src='./images/doller.jpg' alt=''/>
                </div>
                <div className='pl-4 my-2 px-4'> 
                    <strong className='text-xl text-gray-700 font-semibold'>$128</strong>
                    
                    <div className='text-xs'>Total Revenue</div>
                    <div className='text-xs font-light'>12%(30days)</div>
                </div>
            </BoxWrapper>


        </div>
        </div>

    )
    
}
function BoxWrapper({ children}){
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}
