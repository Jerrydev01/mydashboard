import React, { useState } from 'react';
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
    // useSDtate for navbar
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const hide = () => setOpen(false);
    const show = () => setOpen(true);


    return (
        <aside onclick={toggle} onBlur={hide} onFocus={show} className="fixed lg:relative z-[1000]">
            <div onClick={toggle} className="bg-[#51CBFF] rounded-[50%] p-3 left-5  top-[2.5rem] cursor-pointer text-[#0A194E] text-[1.8rem] lg:hidden z-[1000] relative w-[4rem]">
                <i className={`ml-2 rotate-180 z-[1000] ${open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered '}`}></i>
            </div>
            <nav onclick={toggle} onBlur={hide} onFocus={show} className={`  lg:fixed absolute transition-all lg:transition-none duration-500 h-screen bg-[#0A194E] pr-[7rem] mt-[6rem] lg:mt-0 pt-7 pl-7 top-0 z-[100] lg:z-[1000] ${open ? 'top-[1.7rem] lg:top-0' : 'left-[-1000rem] lg:left-0'}`}>

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
