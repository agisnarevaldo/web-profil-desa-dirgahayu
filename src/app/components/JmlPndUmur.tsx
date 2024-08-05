import React from 'react';

const DataPendudukUmur = () => {
    const ageGroups = [
        { age: '0-4', males: 238, females: 219, total: 457 },
        { age: '05-12', males: 366, females: 325, total: 691 },
        { age: '13-15', males: 164, females: 158, total: 322 },
        { age: '16-19', males: 188, females: 174, total: 362 },
        { age: '20-24', males: 281, females: 233, total: 514 },
        { age: '25-29', males: 251, females: 231, total: 482 },
        { age: '30-34', males: 197, females: 182, total: 379 },
        { age: '35-39', males: 171, females: 166, total: 337 },
        { age: '40-44', males: 151, females: 136, total: 287 },
        { age: '45-49', males: 148, females: 167, total: 315 },
        { age: '50-54', males: 145, females: 147, total: 292 },
        { age: '55-59', males: 113, females: 125, total: 238 },
        { age: '60-64', males: 85, females: 63, total: 148 },
        { age: '65-69', males: 57, females: 55, total: 112 },
        { age: '70-74', males: 38, females: 66, total: 104 },
        { age: '>75', males: 50, females: 70, total: 120 }
    ];

    const totals = { males: 2643, females: 2517, total: 5160 };

    return (
        <div className="container mx-auto mt-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Jumlah Penduduk Berdasarkan Kelompok Umur</h2>
            <div className="overflow-hidden rounded-lg shadow-lg">
                <table className="min-w-full bg-white text-center">
                    <thead className="bg-bg text-white">
                    <tr>
                        <th className="px-4 py-2">No</th>
                        <th className="px-4 py-2">Kelompok Umur</th>
                        <th className="px-4 py-2">Laki-laki</th>
                        <th className="px-4 py-2">Perempuan</th>
                        <th className="px-4 py-2">Jumlah</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-700">
                    {ageGroups.map((group, index) => (
                        <tr key={index} className={`${index % 2 ? 'bg-gray-100' : 'bg-white'}`}>
                            <td className="px-4 py-2 text-center">{index + 1}</td>
                            <td className="px-4 py-2">{group.age}</td>
                            <td className="px-4 py-2">{group.males}</td>
                            <td className="px-4 py-2">{group.females}</td>
                            <td className="px-4 py-2">{group.total}</td>
                        </tr>
                    ))}
                    <tr className="bg-gray-200 font-bold">
                        <td className="px-4 py-2 text-center" colSpan={2}>Jumlah</td>
                        <td className="px-4 py-2">{totals.males}</td>
                        <td className="px-4 py-2">{totals.females}</td>
                        <td className="px-4 py-2">{totals.total}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataPendudukUmur;