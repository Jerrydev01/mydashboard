import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const mainMenu = [
        {
            id: 1,
            name: 'Dashboard',
            icon: 'assets/dashicon.svg',
            link: '/'
        },
        {
            id: 2,
            name: 'Inbox',
            icon: 'assets/chaticon.svg',
            link: '/'
        }
    ];
    const mainMenu2 = [
        {
            id: 1,
            name: 'Accounts',
            icon: 'assets/Usericon.svg',
            link: '/'
        },
        {
            id: 2,
            name: 'Schedule Post',
            icon: 'assets/Calendaricon.svg',
            link: '/'
        },
        {
            id: 3,
            name: 'Communities',
            icon: 'assets/Searchicon.svg',
            link: '/'
        },
        {
            id: 4,
            name: 'Analytics',
            icon: 'assets/Charticon.svg',
            link: '/'
        },
        {
            id: 5,
            name: 'File & Folders',
            icon: 'assets/Foldericon.svg',
            link: '/'
        },
        {
            id: 6,
            name: 'Settings',
            icon: 'assets/Setting_alt_line.svg',
            link: '/'
        },

    ];

    return (
        <aside className="">
            <nav className=" lg:fixed h-full bg-[#0A194E] pr-[7rem] pt-7 pl-7 top-0 z-[100] ">
                <div className="bg-[#51CBFF] rounded-[50%] p-3 relative left-5 hidden -top-4 cursor-pointer text-[#0A194E] text-[1.8rem]">
                    <i className="fa-solid fa-bars-staggered"></i>
                </div>
                <div className="logo  flex items-center justify-between mt-5 ">
                    <div className="flex gap-2 items-center mb-7 ">
                        <img src="assets/logo.svg" alt="logo" />
                        <h3 className="text-white">Trends</h3>
                    </div>
                </div>
                <h3>Main Menu</h3>
                {mainMenu.map((menu1) => {
                    return <div key={menu1.id} className="text-[#CCD2E3] flex gap-3 items-center pt-7">
                        <img src={menu1.icon} alt="" />
                        <NavLink className="hover:text-[#51CBFF] transition-all duration-400" to={menu1.link}>{menu1.name}</NavLink>
                    </div>
                })}
                <h3 className="pt-7">Workspace</h3>
                {mainMenu2.map((menu2) => {
                    return <div key={menu2.id} className="text-[#CCD2E3] flex gap-3 items-center pt-7">
                        <img src={menu2.icon} alt="" />
                        <NavLink className="hover:text-[#51CBFF] transition-all duration-700" to={menu2.link}>{menu2.name}</NavLink>
                    </div>
                })}
            </nav>

        </aside>
    )
}

export default NavBar