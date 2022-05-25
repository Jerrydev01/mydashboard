import React from 'react'
import NavBar from './NavBar'



const Main = () => {


    return (
        <main className="grid-dash">
            <NavBar />
            <div className=" flex justify-between h-fit border items-center px-10 pt-7 pb-3 text-[#1C1F37] shadow-md w-full">
                <h2>Dashboard</h2>
                <div className="flex items-center text-[2.5rem] gap-7 transition-all duration-600 cursor-pointer">
                    <i className="fa-solid fa-magnifying-glass hover:text-[#51CBFF]"></i>
                    <i className="fa-regular fa-bell hover:text-[#51CBFF]"></i>
                    <div className="flex items-center gap-5 hover:text-[#51CBFF]">
                        <img className="w-20"
                            src="assets/avatar.svg" alt="avatar" />
                        <p><strong>jerrydev</strong></p>
                    </div>
                    <i class="fa-solid fa-palette hover:text-[#51CBFF]"></i>
                </div>
            </div>
        </main>
    )
}

export default Main

