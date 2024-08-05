import React from 'react';

const DataDemografis = () => {
    const demographics = {
        populationJanuary2023: {
            males: 2650,
            females: 2521,
            total: 5171
        },
        birthsThisYear: {
            males: 19,
            females: 20,
            total: 39
        },
        deathsThisYear: {
            males: 8,
            females: 17,
            total: 25
        },
        movedThisYear: {
            males: 29,
            females: 28,
            total: 57
        },
        arrivalsThisYear: {
            males: 20,
            females: 20,
            total: 40
        },
        populationEndOfYear: {
            males: 2643,
            females: 2517,
            total: 5160
        }
    };

    return (
        <div className="container mx-auto mt-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Gambaran Umum Demografis</h2>
            <table className="table-auto w-full bg-white shadow-lg rounded-lg overflow-hidden text-center">
                <thead className="bg-bg text-white">
                <tr>
                    <th className="px-4 py-2">Kategori</th>
                    <th className="px-4 py-2">Laki-laki</th>
                    <th className="px-4 py-2">Perempuan</th>
                    <th className="px-2 py-2">Jumlah</th>
                </tr>
                </thead>
                <tbody className="text-gray-700">
                <tr className="border-b">
                    <td className="px-4 py-2">Jumlah Penduduk Per Januari 2023</td>
                    <td className="px-4 py-2">{demographics.populationJanuary2023.males}</td>
                    <td className="px-4 py-2">{demographics.populationJanuary2023.females}</td>
                    <td className="px-4 py-2">{demographics.populationJanuary2023.total}</td>
                </tr>
                <tr className="border-b bg-green-50">
                    <td className="px-4 py-2">Lahir Tahun Ini</td>
                    <td className="px-4 py-2">{demographics.birthsThisYear.males}</td>
                    <td className="px-4 py-2">{demographics.birthsThisYear.females}</td>
                    <td className="px-4 py-2">{demographics.birthsThisYear.total}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-2">Mati Tahun Ini</td>
                    <td className="px-4 py-2">{demographics.deathsThisYear.males}</td>
                    <td className="px-4 py-2">{demographics.deathsThisYear.females}</td>
                    <td className="px-4 py-2">{demographics.deathsThisYear.total}</td>
                </tr>
                <tr className="border-b bg-green-50">
                    <td className="px-4 py-2">Pindah Tahun Ini</td>
                    <td className="px-4 py-2">{demographics.movedThisYear.males}</td>
                    <td className="px-4 py-2">{demographics.movedThisYear.females}</td>
                    <td className="px-4 py-2">{demographics.movedThisYear.total}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-2">Datang Tahun Ini</td>
                    <td className="px-4 py-2">{demographics.arrivalsThisYear.males}</td>
                    <td className="px-4 py-2">{demographics.arrivalsThisYear.females}</td>
                    <td className="px-4 py-2">{demographics.arrivalsThisYear.total}</td>
                </tr>
                <tr className="border-b bg-green-50">
                    <td className="px-4 py-2">Jumlah Penduduk Sampai Akhir Tahun</td>
                    <td className="px-4 py-2">{demographics.populationEndOfYear.males}</td>
                    <td className="px-4 py-2">{demographics.populationEndOfYear.females}</td>
                    <td className="px-4 py-2">{demographics.populationEndOfYear.total}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DataDemografis;