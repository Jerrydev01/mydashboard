import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'BEST TIME TO TRADE',
        },
    },
};

export const data = {
    labels: ['Morning', 'Afternoon', 'Evening'],
    datasets: [
        {
            label: '# of Votes',
            data: [30, 20, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.8)',


            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',


            ],
            borderWidth: 1,
        },
    ],
};


const chart2 = () => {
    return (
        <div>
            <Doughnut
                width={300}
                options={options}
                data={data} />;</div>
    )
}

export default chart2