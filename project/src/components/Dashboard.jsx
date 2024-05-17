import React from 'react'
import DashboardStats from './DashboardStats'
import DonutChart from './DonutChart'

export default function Dashboard(){
    return(
        <div className='flex flex-col gap-4'>
            <DashboardStats />
            <DonutChart />
        </div>
    )
}
 