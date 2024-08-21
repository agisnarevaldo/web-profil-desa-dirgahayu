"use client";
import React from "react";
import Image from "next/image";
import {ContainerScroll} from "@/app/components/ui/container-scroll-animation";
import Link from "next/link";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Selayang Pandang<br/>
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                DESA DIRGAHAYU
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={`/pp.jpeg`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
            <div className="flex flex-col justify-center text-justify px-4 md:px-12 py-2 gap-6">
                <h1 className="text-2xl text-center font-semibold">Profil Desa</h1>
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
                <Link href="#home">Kembali ↩</Link>
            </div>
        </div>
    );
}
