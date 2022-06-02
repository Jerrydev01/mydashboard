import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'COIN TRADE',
        },
    },
};


const BarChart = () => {
    return (
        <div>
            <Bar
                options={options}
                datasetIdKey='id'
                data={{
                    labels: ['Feb', 'Mar', 'Apr', 'Jun', 'Aug', 'Sep', 'Nov', 'Dec'],
                    datasets:
                        [{
                            label: 'Amount($) of trades',
                            data: [1000, 590, 300, 500, 200, 400, 700, 500, 70],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.8)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.4)',
                                'rgba(15, 102, 255, 0.6)',
                                'rgba(125, 14, 25, 0.6)',
                                'rgba(23, 12, 255, 0.6)',
                                'rgba(255, 159, 64, 0.7)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]

                }}


            />
        </div>
    )
}

export default BarChart