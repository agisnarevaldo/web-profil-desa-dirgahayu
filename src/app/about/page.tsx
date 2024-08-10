import {HeroScrollDemo} from "@/app/components/HeroScroll";
import Link from "next/link";
import VisiMisi from "../components/visi-misi";
import Footer from "@/app/components/footer";

export default function About () {
    return (
        <main>
            <HeroScrollDemo/>

            <VisiMisi />

            <Footer />
        </main>
    )
}