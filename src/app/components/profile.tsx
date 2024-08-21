import Link from "next/link";
import Image from "next/image";
import {ContainerScroll} from "@/app/components/ui/container-scroll-animation";
import VisiMisi from "@/app/components/visi-misi";
import InfoGeo from "@/app/components/infoGeo";
import DataDemografis from "@/app/components/Demografis";
import DataPendudukUmur from "@/app/components/JmlPndUmur";

export default function Profile() {
    return (
        <div id="about">
            <div className="">

                <div className="flex flex-col justify-center text-justify px-4 md:px-12 py-2 gap-6">
                    <h1 className="text-2xl text-center">Profil Desa</h1>
                    <p>
                        Dirgahayu adalah desa di kecamatan Kadipaten, Tasikmalaya, Jawa Barat, Indonesia. Dilalui oleh
                        kereta api jalur selatan dari Bandung tujuan Jogjakarta, Malang, Surabaya Gubeng dengan nama
                        stasiun
                        yang sama dengan nama desa yaitu statsiun Dirgahayu. Mata pencaharian masyarakat disini lebih
                        dari
                        80% adalah bertani dan sebagian besar menjadi buruh tani. Setelah kepemimpinan kepala desa yang
                        baru
                        Asep Budi Wahyudin, akses jalan menuju desa ini sudah menggunakan jalan beton sepanjang hampir 3
                        km.
                        Juga sekitar 150 rumah yang tidak layak huni sekarang sudah di rehabilitasi oleh pemerintah
                        dengan
                        perjuangan dari kepada desa Asep Budi Wahyudin.
                    </p>
                    <p className="flex font-semibold text-justify">
                        Dirgahayu
                        .
                        Kadipaten
                        .
                        Kabupaten
                        .
                        Tasikmalaya
                    </p>
                    {/*<Link href="#home">Kembali ↩</Link>*/}
                </div>
            </div>

            {/*<VisiMisi />*/}

            {/*<InfoGeo />*/}

            <DataDemografis />

            {/*<DataPendudukUmur />*/}

        </div>
    )
}