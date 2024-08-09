"use client";
import {motion} from "framer-motion";
import React from "react";
import {ImagesSlider} from "@/app/components/ui/imagesSlider";

export function ImagesSlidertest() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const imageData = [
        {
            url: "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Selamat Datang Di Website Resmi Desa Dirgahayu"
        },
        {
            url: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Sawah yang luas menjadi sumber Ekonomi Desa dan Daya Tarik Ekonomi"
        },
        {
            url: "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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