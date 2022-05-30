import React from 'react'

const Project = () => {
    const lists = [
        {
            id: 1,
            Activity: 'Call john',
            description: 'Sriram Sarvade',
            position: 'CEO',
            btn: 'completed',

        },
        {
            id: 2,
            Activity: 'Meeting',
            description: 'Sriram Sarvade',
            position: 'Coach',
            btn: 'ongoing'
        },
        {
            id: 3,
            Activity: 'Zoom Call',
            description: 'Sriram Sarvade',
            position: 'Therapist',
            btn: 'completed'
        },
        {
            id: 4,
            Activity: 'Appointment',
            description: 'Sriram Sarvade',
            position: 'Doctor',
            btn: 'ongoing'
        },
        {
            id: 5,
            Activity: 'Meet Jane',
            description: 'Sriram Sarvade',
            position: 'Manager',
            btn: 'ongoing'
        },
        {
            id: 6,
            Activity: 'Meet Jane',
            description: 'Sriram Sarvade',
            position: 'Manager',
            btn: 'ongoing'
        },
        {
            id: 7,
            Activity: 'Meet Jane',
            description: 'Sriram Sarvade',
            position: 'Manager',
            btn: 'ongoing'
        },
        {
            id: 8,
            Activity: 'Meet Jane',
            description: 'Sriram Sarvade',
            position: 'Manager',
            btn: 'ongoing'
        },
    ]
    return (
        <div className=" h-[30rem] pt-4 pl-5 hover:shadow-md overflow-y-scroll">
            <div className="flex justify-between my-5">
                <div>
                    <h3>project</h3>
                    <p className="text-[#BABEC6]">Overall projects</p>
                </div>
                <div className="flex justify-between items-center mr-7">
                    <form action="">
                        <input className="border-2 p-4 shadow-sm rounded-[2rem] mr-5 outline-none text-[1.4rem]" type="text" placeholder="search" id="search" />
                    </form>
                    <label htmlFor="search"><p><i className="fa-solid fa-filter text-[#0088FE]"></i></p></label>

                </div>
            </div>

            {lists.map((list) => {
                const { Activity, description, position, btn } = list;
                return <div key={list.id} className="grid-project items-center pr-10 text-[#333232]">
                    <p><strong>{Activity}</strong></p>
                    <p>{description}</p>
                    <p>{position}</p>
                    <button
                        className="border-[#0A194E] border-2 w-[50%] p-3 mt-2 rounded-xl hover:bg-[#0088FE] hover:text-white transition-all duration-500">{btn}</button>
                    <div><p><i className="text-[red] fa-solid fa-trash-can"></i></p></div>
                </div>
            })}
        </div>
    )
}

export default Project