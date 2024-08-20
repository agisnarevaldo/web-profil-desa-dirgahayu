import {GlareCard} from "@/app/components/ui/glare-card";
import {Icon} from "@iconify/react";

export default function LayananBak() {
    return (
        <div className="py-8 flex flex-col gap-6">
            <div className="text-center px-4 md:w-2/3 mx-auto">
                <h1 className="text-xl font-semibold">PELAYANAN UTAMA KAMI</h1>
                <p>Desa Dirgahayu memiliki banyak fasilitas pelayanan masyarakat mulai dari pelayanan administratif
                    hingga pelayanan sosial lainnya. Adapun pelayanan utama kami berfokus pada 4 point berikut ini,
                    yaitu :</p>
            </div>
            {/*<div className="grid grid-cols-1 md:grid-cols-4 gap-6">*/}
            {/*</div>*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <LayananCard title="Administrasi" description="Pelayanan administrasi desa yang meliputi surat-surat
                kependudukan, surat keterangan, dan lainnya" icon="medical-icon:i-administration"/>
                <LayananCard title="Pendidikan" description="Pelayanan pendidikan yang meliputi sekolah, kursus, dan
                lainnya" icon="/icons/pendidikan.svg"/>
                <LayananCard title="Kesehatan" description="Pelayanan kesehatan yang meliputi puskesmas, klinik, dan
                lainnya" icon="/icons/kesehatan.svg"/>
                <LayananCard title="Sosial" description="Pelayanan sosial yang meliputi bantuan sosial, bantuan
                keuangan, dan lainnya" icon="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "/>
            </div>
        </div>
    )
}

const glareCard = () => {
    return (
        <div>
            <GlareCard className="flex flex-col items-center justify-center">
                <svg
                    width="66"
                    height="65"
                    viewBox="0 0 66 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 text-white"
                >
                    <path
                        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                        stroke="currentColor"
                        strokeWidth="15"
                        strokeMiterlimit="3.86874"
                        strokeLinecap="round"
                    />
                </svg>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </GlareCard>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <p className="font-bold text-white text-lg">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t
                </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </GlareCard>
        </div>
    )
}
const LayananCard = ({title, description, icon}: { title: string, description: string, icon: string }) => {
    return (
        <GlareCard className="flex flex-col items-center gap-4 p-4 bg-blue-300">
            <Icon className="text-4xl" icon={icon} />
            <h1 className="text-lg font-semibold">{title}</h1>
            <p>{description}</p>
        </GlareCard>
    )
}