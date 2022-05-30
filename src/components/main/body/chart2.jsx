import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
    { name: 'Morning', value: 300 },
    { name: 'Afternoon', value: 200 },
    { name: 'Evening', value: 400 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default class Example extends PureComponent {


    render() {
        return (
            <div className="grid p-7 place-items-center">
                <div className="flex justify-between items-center gap-4">
                    <div> <h3>Best Trade Period</h3>
                        <p><i className="text-[#FFBB28] fa-solid fa-circle"></i> <em>Evenings</em></p>
                    </div>
                    <div>
                        <button className="shadow-sm hover:shadow-md rounded-sm px-6 py-4 text-[1.4rem] hover:text-[#00C49F]">View stats</button>
                    </div>
                </div>
                <div className="ml-20">
                    <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="flex gap-6 text-center">
                    <div className="">
                        <p><i className="text-[#0088FE] fa-solid fa-circle"></i> <strong>Morning</strong></p>
                        <p>30%</p>
                    </div>
                    <div>
                        <p><i className="text-[#00C49F] fa-solid fa-circle"></i><strong> Afternoon</strong></p>
                        <p>25%</p>
                    </div>
                    <div>
                        <p><i className="text-[#FFBB28] fa-solid fa-circle"></i> <strong>Evening</strong></p>
                        <p>45%</p>
                    </div>

                </div>
            </div>
        );
    }
}
