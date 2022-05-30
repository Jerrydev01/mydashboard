import React from 'react'


/* top NavBar section that houses the avatar, theme pallette and so on*/
const TopNav = () => {
    return (
        <div className=" flex  h-fit border items-center pl-10 pr-10 pt-7 pb-3 text-[#1C1F37] shadow-md w-full justify-between fixed top-0 z-50 bg-white">
            <h2 className="xl:ml-[20%]  lg:ml-[25%]">Dashboard</h2>
            <div className="flex items-center text-[2.5rem] gap-7 transition-all duration-600 cursor-pointer">
                <i className="fa-solid fa-magnifying-glass hover:text-[#51CBFF]"></i>
                <div className="relative">
                    <i className="fa-regular fa-bell hover:text-[#51CBFF]"></i>
                    <i className="fa-solid fa-circle text-[#f30e0e] text-xs absolute right-1 top-2"></i>
                </div>
                <div className="flex items-center gap-5 hover:text-[#51CBFF]">
                    <img className="w-20"
                        src="assets/avatar.svg" alt="avatar" />
                    <p><strong>jerrydev</strong></p>
                </div>
                <i className="fa-solid fa-palette hover:text-[#51CBFF]"></i>
            </div>
        </div>
    )
}

export default TopNav