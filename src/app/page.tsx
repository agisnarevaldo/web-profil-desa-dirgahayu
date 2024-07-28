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
// import ImageSlider from "@/app/components/ui/slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <ImagesSliderDemo />
        <Profile />
        <div className="py-8 flex flex-col gap-6">
            <div className="">
                <h1 className="text-2xl font-semibold text-center">Pelayanan Utama Kami</h1>
                <p className="w-2/3 mx-auto text-center">
                    Desa Dirgahayu memiliki banyak fasilitas pelayanan masyarakat mulai dari pelayanan administratif
                    hingga
                    pelayanan sosial lainnya. Adapun pelayanan utama kami berfokus pada 4 point berikut ini, yaitu :
                </p>
            </div>
            <div className="flex gap-20 px-4">
                <Layanan/>
                <Jadwal/>
            </div>

        </div>
        <StaffSlide />

        <Sorotan />

        {/*<ImageSlider />*/}
    </main>
  );
}