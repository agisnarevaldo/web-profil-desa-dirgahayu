"use client";
import {motion} from "framer-motion";
import React from "react";
import {ImagesSlider} from "@/app/components/ui/imagesSlider";

export function ImagesSlidertest() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const imageData = [
        {
            url: "/kntr.jpeg",
            text: "Selamat Datang Di Website Resmi Desa Dirgahayu"
        },
        {
            url: "/ptrt.jpeg",
            text: "Sawah yang luas menjadi sumber Ekonomi Desa dan Daya Tarik Ekonomi"
        },
        {
            url: "https://plus.unsplash.com/premium_photo-1661963051410-e155d32a7c38?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ",
            text: "Salah Satu Komoditas Ekonomi Desa\n" +
                "Adalah Perkebunan Jagung"
        }
    ];

    return (
        <ImagesSlider
            className="w-full"
            images={imageData.map(image => image.url)}
            texts={imageData.map(image => image.text)}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >

                {/*<button*/}
                {/*    className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">*/}
                {/*    <span>Explore ✈️</span>*/}
                {/*    <div*/}
                {/*        className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent"/>*/}
                {/*</button>*/}
            </motion.div>
        </ImagesSlider>
    );
}