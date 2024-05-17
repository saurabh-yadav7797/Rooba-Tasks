import React from 'react';
export default function DashboardStats() {
    return(
        <div className='flex flex-col '>
        <div className='flex flex-row'>
            <div className='bg-blue-500'>Dashboard</div>
            <div class="sdsc">FilterperiodS</div>

        </div>
        <div className='flex justify-items-stretch gap-4 w-full'>
            <BoxWrapper>
                <div className='h-20 w-20 flex items-center justify-center '>
            <img  className='w-auto text-2xl text-white' src='./images/p.jpg' alt=''/>
                </div>
                <div className='pl-4'> 
                    <strong className='text-xl text-gray-700 font-semibold'>75</strong>
                    
                    <div className='text-xs'>Total Campaign</div>
                    <div className='text-xs font-light'>4%(30days)</div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
            <div className='h-20 w-20 flex items-center justify-center '>
                <img  className='w-auto text-2xl text-white' src='./images/people.jpg' alt=''/>
                </div>
                <div className='pl-4'> 
                    <strong className='text-xl text-gray-700 font-semibold'>75</strong>
                    
                    <div className='text-xs'>Total Campaign</div>
                    <div className='text-xs font-light'>4%(30days)</div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
            <div className='h-20 w-20 flex items-center justify-center '>
                <img  className='w-auto text-2xl text-white' src='./images/hand.jpg' alt=''/>
                </div>
                <div className='pl-4'> 
                    <strong className='text-xl text-gray-700 font-semibold'>75</strong>
                    
                    <div className='text-xs'>Total Campaign</div>
                    <div className='text-xs font-light'>4%(30days)</div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
            <div className='h-20 w-20 flex items-center justify-center '>
                <img  className='w-auto text-2xl text-white' src='./images/doller.jpg' alt=''/>
                </div>
                <div className='pl-4'> 
                    <strong className='text-xl text-gray-700 font-semibold'>75</strong>
                    
                    <div className='text-xs'>Total Campaign</div>
                    <div className='text-xs font-light'>4%(30days)</div>
                </div>
            </BoxWrapper>


        </div>
        </div>

    )
    
}
function BoxWrapper({ children}){
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}
