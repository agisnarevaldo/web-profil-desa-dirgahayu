"use client";

import Image from "next/image";
import Navbar from "@/app/components/navbar";
import {ImagesSliderDemo} from "@/app/components/hero";
import Profile from "@/app/components/profile";
import LayananBak from "@/app/components/layanan.bak";
import Jadwal from "@/app/components/jadwal";
import {GlareCard} from "@/app/components/ui/glare-card";
import Layanan from "@/app/components/layanan";
import Staff from "@/app/components/staff";
import StaffSlide from "@/app/components/staffSlide";
import Sorotan from "@/app/components/sorotan";
import {ImagesSlidertest} from "@/app/components/hero1";
import Footer from "@/app/components/footer";
import ButtonTop from "@/app/components/btnTop";
// import ImageSlider from "@/app/components/ui/slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <ButtonTop />
        <ImagesSlidertest />
        {/*<ImagesSliderDemo />*/}
        <Profile />

        <StaffSlide />

        <Sorotan />

        <Footer />
    </main>
  );
}