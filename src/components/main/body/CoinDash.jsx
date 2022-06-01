import React, { useEffect, useState } from 'react'

import Axios from 'axios';
import Coin from './Coin';

const CoinDash = () => {
    const [coinDash, setCoinDash] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h';

    useEffect(() => {
        Axios.get(url).then((response) => {
            setCoinDash(response.data)
            console.log(response.data)
        })
    }, []);

    return (
        <div className="flex mt-7 pl-[1rem] sm:pl-[4rem] items-center gap-7">
            {coinDash.map((coin) => {
                const { id, name, current_price, image, price_change_percentage_24h } = coin;
                return <div className="">
                    <Coin key={id} name={name}
                        price={current_price}
                        image={image}
                        percentageChange={price_change_percentage_24h} />
                </div>
            })}

        </div>
    )
}

export default CoinDash