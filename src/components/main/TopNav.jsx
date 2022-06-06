import React from 'react'


/* top NavBar section that houses the avatar, theme pallette and so on*/
const TopNav = ({ children }) => {
    return (
        <div className="flex  h-fit border items-center pl-10 pr-10 pt-7 pb-3 shadow-md w-full justify-end sm:justify-between fixed top-0 z-50 ">
            <h2 className="xl:ml-[20%]  lg:ml-[25%] hidden sm:block sm:ml-20">Dashboard</h2>
            <div className="flex items-center text-[2.5rem] gap-7 transition-all duration-600 cursor-pointer relative right-0">
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
                <div className="flex justify-center pl-[2rem]">
                    {children}
                </div>

            </div>
        </div>
    )
}

export default TopNav