import React from "react";
export default function DonutChart(){
    return<div className="bg-normal h-2/4 w-full">
        <div className="flex w-full float-left my-2 px-2">
            <div className='w-2/4 h-1/2 my-2 px-2'>
              <img className=''src='./images/pieChart.jpg'  alt=''/>
            </div>
            <div className='w-2/4 my-2 px-2'>
              <img className=''src='./images/card_chart_order.jpg'  alt=''/>
            </div>
        </div>
        <div  className="flex w-full h-1/5 float-left my-2 px-2">
            <div className='w-11/12 h-3/6 my-2 px-2'>
              <img className=''src='./images/card_total_revenue.jpg'  alt=''/>
            </div>
            <div className='w-2/4  h-1/5 my-2 px-2'>
              <img className=''src='./images/card_customer_map.jpg'  alt=''/>
            </div>
        </div>
        </div>
}
