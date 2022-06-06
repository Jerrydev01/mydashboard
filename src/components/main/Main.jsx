import React, { useState } from 'react'
import NavBar from './NavBar';
import ChartPrimary from './body/ChartPrimary';
import Weather from './body/Weather';
import TopNav from './TopNav';
import Project from './body/Project';
import Chart2 from './Chart2';

import DarkModeToggle from "react-dark-mode-toggle";
import useDarkTheme from "./UseDarkTheme"

const Main = () => {

    const [colorTheme, setTheme] = useDarkTheme();
    const [isDarkMode, setIsDarkMode] = useState(colorTheme === "light" ? true : false);

    const toggleMode = (checked) => {
        setTheme(colorTheme);
        setIsDarkMode(checked);
    }

    return (
        <section className={colorTheme === 'light' ? 'dark:bg-gray-900 dark:text-white' : 'bg:white'}>


            <div className="grid grid-cols-[1fr] lg:grid-cols-[20rem,1fr] w-full justify-between">
                <NavBar />
                <TopNav >
                    <DarkModeToggle
                        checked={isDarkMode}
                        onChange={toggleMode}
                        size={80}


                    />
                </TopNav>

                <div className="grid xl:grid-cols-[2fr,1fr] sm:grid-cols-[1fr,1fr] md:w-[90%] xl:gap-5 justify-between items-center m-auto my-[2rem] ">
                    <div className=" sm:col-span-2 xl:col-span-1"><ChartPrimary /></div>
                    <div className=" w-full hover:shadow-md hover:rounded-[1rem] mt-[9rem]">
                        <Chart2 />
                    </div>
                    <div className="mt-10 xl:order-2 sm:items-end">
                        <Weather />
                    </div>
                    <div className="mt-10 sm:col-span-2 xl:col-span-1 ">
                        <Project />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Main

