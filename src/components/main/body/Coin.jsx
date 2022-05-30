import React from 'react'

const Coin = ({ image, name, price, percentageChange }) => {
    return (
        <div className="flex gap-6">
            <img className="w-28 object-contain" src={image} alt="" />
            <div>
                <p className="text-[#A9ABB0]">{name}</p>
                <h4 className="text-[#0A194E]">{price}</h4>

                {percentageChange < 0 ? (
                    <h5 className="text-red-500 price-change fa-solid fa-caret-down">{percentageChange.toFixed(2)} %</h5>
                ) : (
                    <h5 className="text-green-500 price-change fa-solid fa-caret-down">{percentageChange.toFixed(2)} %</h5>
                )
                }
            </div>
        </div>
    )
}

export default Coin