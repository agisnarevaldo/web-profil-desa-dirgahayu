    export default function InfoGeo() {
        const data = {
            ketinggian: '634 M DPL',
            suhuRataRata: '22°C',
            batasWilayah: {
                utara: 'Desa Kadipaten',
                selatan: 'Desa Pasirhuni & Desa Citamba',
                barat: 'Desa Cibahayu & Desa Mekarsari',
                timur: 'Desa Kadipaten'
            },
            jarak: {
                keIbukotaNegara: '500 Km',
                keIbukotaProvinsi: '76,7 K  m',
                keIbukotaKabupaten: '32 Km',
                keIbuKotaKecamatan: '3 Km',
                kePasarTerdekat: '7 Km'
            }
        }
        return (
            <div className="container mx-auto mt-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Letak Geografis</h2>
                <table className="min-w-full table-auto rounded-lg">
                    <tbody className="text-gray-700">
                    <tr className="bg-gray-100 border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Ketinggian dari permukaan laut</td>
                        <td className="px-4 py-2">{data.ketinggian}</td>
                    </tr>
                    <tr className="border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Suhu Udara rata-rata</td>
                        <td className="px-4 py-2">{data.suhuRataRata}</td>
                    </tr>
                    <tr className="bg-gray-100 border-t border-b border-gray-200">
                        <th colSpan={2} className="px-6 py-4 text-center font-bold">Batas Wilayah</th>
                    </tr>
                    <tr className="border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Sebelah Utara</td>
                        <td className="px-4 py-2">{data.batasWilayah.utara}</td>
                    </tr>
                    <tr className="bg-gray-100 border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Sebelah Selatan</td>
                        <td className="px-4 py-2">{data.batasWilayah.selatan}</td>
                    </tr>
                    <tr className="border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Sebelah Timur</td>
                        <td className="px-4 py-2">{data.batasWilayah.timur}</td>
                    </tr>
                    <tr className="bg-gray-100 border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Sebelah Barat</td>
                        <td className="px-4 py-2">{data.batasWilayah.barat}</td>
                    </tr>
                    <tr className="border-t border-b border-gray-200">
                        <th colSpan={2} className="px-6 py-2 text-center font-bold">Jarak</th>
                    </tr>
                    <tr className="bg-gray-100 border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Jarak ke Ibukota Negara</td>
                        <td className="px-4 py-2">{data.jarak.keIbukotaNegara}</td>
                    </tr>
                    <tr className="border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Jarak ke Ibukota Provinsi</td>
                        <td className="px-4 py-2">{data.jarak.keIbukotaProvinsi}</td>
                    </tr>
                    <tr className="bg-gray-100 border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Jarak ke Ibukota Kabupaten</td>
                        <td className="px-4 py-2">{data.jarak.keIbukotaKabupaten}</td>
                    </tr>
                    <tr className="border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Jarak ke Ibukota Kecamatan</td>
                        <td className="px-4 py-2">{data.jarak.keIbuKotaKecamatan}</td>
                    </tr>
                    <tr className="bg-gray-100 border-t border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">Jarak ke Pasar Terdekat</td>
                        <td className="px-4 py-2">{data.jarak.kePasarTerdekat}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }