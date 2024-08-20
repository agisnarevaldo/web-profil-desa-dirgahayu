import {HeroScrollDemo} from "@/app/components/HeroScroll";
import Link from "next/link";
import VisiMisi from "../components/visi-misi";
import Footer from "@/app/components/footer";
import Lokasi from "@/app/components/lokasi";
import FullScreenImage from "@/app/components/peta";

export default function About () {
    return (
        <main>
            <HeroScrollDemo/>

            <VisiMisi />

            <FullScreenImage src="/peta.JPG" alt="peta" className="max-w-screen-sm mx-auto" />

            <Lokasi />

            <Footer />
        </main>
    )
}