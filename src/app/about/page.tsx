import {HeroScrollDemo} from "@/app/components/HeroScroll";
import Link from "next/link";
import VisiMisi from "../components/visi-misi";
import Footer from "@/app/components/footer";
import Lokasi from "@/app/components/lokasi";
import FullScreenImage from "@/app/components/peta";
import InfoGeo from "@/app/components/infoGeo";

export default function About () {
    return (
        <main>
            <HeroScrollDemo/>

            <VisiMisi />

            <div>
                <h1 className="text-center font-semibold">Peta Administrasi Desa Dirgahayu</h1>
                <FullScreenImage src="/peta.JPG" alt="peta" className="max-w-screen-sm mx-auto" />
            </div>

            <Lokasi />

            <InfoGeo />

            <Footer />
        </main>
    )
}