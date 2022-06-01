import React from 'react'
import CoinDash from './CoinDash'

import Chart from './Chart'




const ChartPrimary = () => {

    return (
        <div className="w-[100%] ">
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



