import React, { useState, useEffect } from 'react'

import Axios from 'axios'

const Weather = () => {
    const [weather, setWeather] = useState({});
    const [cloud, setCloud] = useState({});
    const [wind, setWind] = useState({});

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=10&lon=8&appid=58ed7dc32c7a388b70b7c4940d9eaba1&units=metric'


    useEffect(() => {
        Axios.get(url).then((response) => {
            setCloud(response.data.weather[0]);
            setWeather(response.data.main);
            setWind(response.data.wind);
            console.log(response.data.weather)
        })
    }, [])

    const { temp, humidity, temp_max } = weather;
    return (

        <div className=' grid place-items-center text-center hover:shadow-md hover:rounded-[1rem] p-8 w-full'>
            <div className="">
                <img src="assets/sunny.svg" alt="" />
                <p>{cloud.description}</p>
                <h2 className="text-[#0A194E]">{temp} &#186;C</h2>
            </div>
            <div className="flex weather gap-5">
                <div>
                    <h3>Humidity</h3>
                    <p>{humidity}%</p>
                </div>
                <div>
                    <h3>Max.Temp</h3>
                    <p>{temp_max}&#186;C</p>
                </div>
                <div>
                    <h3>Wind</h3>
                    <p>{wind.speed}miles/hr</p>
                </div>
                <div></div>
            </div>
        </div>

    )
}

export default Weather

