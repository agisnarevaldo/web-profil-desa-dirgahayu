"use client";

import Profile from "@/app/components/profile";
import StaffSlide from "@/app/components/staffSlide";
import Sorotan from "@/app/components/sorotan";
import {ImagesSlidertest} from "@/app/components/hero1";
import Footer from "@/app/components/footer";
import ButtonTop from "@/app/components/btnTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <ButtonTop />
        
        <ImagesSlidertest />

        <div className="mt-10"/>
        <Profile />

        <StaffSlide />

        <Sorotan />

        <Footer />
    </main>
  );
}