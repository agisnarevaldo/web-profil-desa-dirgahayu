import {Icon} from "@iconify/react";

type LayananCardProps = {
    title: string;
    description: string;
    icon: string;
}

const LayananCard = ({title, description, icon}: LayananCardProps) => {
    return (
        <div className="flex justify-between items-center gap-4">
            <div>
                <Icon className="text-[60px] text-fg" icon={icon}/>
            </div>
            <div>
                <p className="font-semibold">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )

}

export default function Layanan() {
    return (
    <div className="lg:w-2/4 flex flex-col gap-4">
        <LayananCard title="PELAYANAN ADMINISTRATIF" description="Pendaftaran penduduk dan pencatatan sipil, Penerbitan surat-surat administratif, Pengelolaan data dan informasi desa." icon="medical-icon:i-administration"/>
        <LayananCard title="PELAYANAN SOSIAL" description="Penyediaan bantuan sosial bagi penduduk yang membutuhkan (misalnya, PKH, sembako, dll), Program bantuan bagi lanjut usia, difabel, atau kelompok rentan lainnya." icon="medical-icon:i-social-services"/>
        <LayananCard title="PELAYANAN EKONOMI" description="Pembinaan dan pengembangan usaha mikro, kecil, dan menengah di desa, Penyediaan pelatihan dan pendampingan untuk usaha produktif." icon="streamline:decent-work-and-economic-growth-solid"/>
        <LayananCard title="PELAYANAN KESEHATAN" description="Puskesmas atau posyandu untuk pelayanan kesehatan dasar, Program imunisasi dan kesehatan ibu dan anak, Pengelolaan dan distribusi obat-obatan dasar." icon="material-symbols:health-metrics"/>
    </div>
    )
}