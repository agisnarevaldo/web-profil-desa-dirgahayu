import React, { useState, useEffect } from 'react';
import {Icon} from "@iconify/react";

interface Staff {
    name: string;
    position: string;
    description: string;
    image: string;
}

const staffData: Staff[] = [
    {
        name: 'ASEP BUDI WAHYUDIN',
        position: 'KEPALA DESA DIRGAHAYU',
        description: 'Kepala Dusun memiliki fungsi: Pembinaan ketenteraman dan ketertiban, pelaksanaan upaya perlindungan masyarakat, mobilitas kependudukan, dan penataan dan pengelolaan wilayah. Mengawasi pelaksanaan pembangunan di wilayahnya.',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Asep'
    },
{
        name: 'RINI SURYANI',
        position: 'SEKRETARIS DESA',
        description: 'kajdlajjkfj lkjdfs lskdfj ',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Rini'
    },
    {
        name: 'DEWI ROSMAWATI',
        position: 'KAUR PERENCANAAN',
        description: 'ksjd aksjd asd',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Dewi'
    },
    {
        name: 'SENDHY BUDHY UTAMA',
        position: 'KASI KESEJAHTERAAN',
        description: 'kjalkdjf lkjkl;ak lkajdf adf',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Sendhy'
    },
    {
        name: 'DANY SOMANTIKA',
        position: 'Kepala Dusun 5',
        description: 'jflkajdf lakjflkalkj lakdjf',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Susi'
    },
    {
        name: 'IDA SITI SOIDAH',
        position: 'KAUR TU DAN UMUM',
        description: 'KJSAFDKASJF',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Ida'
    },
    {
        name: 'DUDUNG',
        position: 'KASI PELAYANAN',
        description: 'kajdlajjkfj lkjdfs lskdfj ',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Dudung'
    },
    {
        name: 'HENDI',
        position: 'KEPWIL PALUMBUNGAN',
        description: 'ksjd aksjd asd',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Hendi'
    },
    {
        name: 'DENI',
        position: 'KEPWIL TROWEK',
        description: 'kjalkdjf lkjkl;ak lkajdf adf',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Deni'
    },
    {
        name: 'AI NINING',
        position: 'KEPWIL GEKBRONG',
        description: 'jflkajdf lakjflkalkj lakdjf',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=AI'
    },
    {
        name: 'ANNISA RAHAYU',
        position: 'KEPWIL CIJOTANG',
        description: 'KJSAFDKASJF',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Ida'
    },
    // Tambahkan staff lain di sini
    {
        name: 'RISMA',
        position: 'KEPWIL CIPEUSING',
        description: 'ksjd aksjd asd',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Risma'
    },
    {
        name: 'YAYA ROHANA',
        position: 'KEPWIL CILENGKONG',
        description: 'kjalkdjf lkjkl;ak lkajdf adf',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Yaya'
    },
    {
        name: 'ANAN ROSIDIN',
        position: 'KEPWIL DESA',
        description: 'jflkajdf lakjflkalkj lakdjf',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Anan'
    },
    {
        name: 'ALI NURDIN',
        position: '-',
        description: 'KJSAFDKASJF',
        image: 'https://api.dicebear.com/9.x/initials/svg?seed=Ali'
    },
];

const StaffSlide: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % staffData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + staffData.length) % staffData.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Slide otomatis setiap 5 detik
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="struktur" className="mt-5 text-center py-10 flex flex-col border-t-2 border-bg">
            <h2 className="text-2xl font-bold mb-4">STAFF DESA DIRGAHAYU</h2>
            <p className="text-lg mb-8 w-2/3 mx-auto">
                Berikut adalah profil staff desa mulai dari kepala desa, sekretaris desa dan jajarannya, serta deskripsi singkat terkait posisi pekerjaan yang di pegang.
            </p>
            <div className="relative flex items-center justify-center h-[400px]">
                <button
                    className="absolute top-1/2 left-0 bg-gray-200 p-2 rounded-full focus:outline-none"
                    onClick={prevSlide}
                >
                    <Icon icon="ep:arrow-left-bold" />
                </button>
                <div className="transition-transform duration-1000 ease-in-out transform">
                    <div className="flex flex-col items-center gap-4">
                        <img
                            src={staffData[currentIndex].image}
                            alt={staffData[currentIndex].name}
                            className="rounded-full w-40 h-40 object-cover mb-4"
                        />
                        <blockquote className="text-xl font-semibold">
                            {staffData[currentIndex].name}
                            <span className="block text-lg font-normal">{staffData[currentIndex].position}</span>
                        </blockquote>
                        <p className="text-lg mb-4">{staffData[currentIndex].description}</p>
                    </div>
                </div>
                <button
                    className="absolute top-1/2 right-0 bg-gray-200 p-2 rounded-full focus:outline-none"
                    onClick={nextSlide}
                >
                    <Icon icon="ep:arrow-right-bold" />
                </button>
            </div>
        </div>
    );
};

export default StaffSlide;
