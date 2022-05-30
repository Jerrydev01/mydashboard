import React from 'react'
import CoinDash from './CoinDash'

import Chart from './chart'




const ChartPrimary = () => {

    return (
        <div className="w-[100%] p-4 ">
            <div className=" mt-[9rem] bg-white">
                <div className="hover:shadow-md hover:rounded-[1rem]">
                    <CoinDash />
                    <Chart />
                </div>
            </div>
        </div >
    )
}

export default ChartPrimary



