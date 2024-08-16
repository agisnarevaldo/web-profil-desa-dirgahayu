import {HeroScrollDemo} from "@/app/components/HeroScroll";
import Link from "next/link";
import VisiMisi from "../components/visi-misi";
import Footer from "@/app/components/footer";
import Lokasi from "@/app/components/lokasi";

export default function About () {
    return (
        <main>
            <HeroScrollDemo/>

            <VisiMisi />

            <Lokasi />

            <Footer />
        </main>
    )
}