import Link from "next/link";
import Image from "next/image";
import {ContainerScroll} from "@/app/components/ui/container-scroll-animation";

export default function Profile() {
    return (
        <div>
            <div className="lg:flex">
                <div>
                    <div className="flex justify-start items-start flex-col overflow-hidden">
                        <ContainerScroll
                            titleComponent={
                                <>
                                    <h1 className="text-xl text-gray-800 font-semibold dark:text-white">
                                    <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none">
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
                    </div>
                    {/*<Image*/}
                    {/*    src="/pp.jpeg"*/}
                    {/*    alt="Profile" width={200} height={200}/>*/}
                </div>
                <div className="flex flex-col justify-center text-justify px-8 gap-6">
                    <h1 className="text-2xl text-center">Profil Desa</h1>
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

            <div className="flex justify-between px-10">
                {/*<h1 className="text-2xl text-center">Lokasi Desa</h1>*/}
                <div>
                    <h1>Wilayah Desa Dirgahayu</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31671.54282524456!2d108.089183551174!3d-7.132607160459065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4ba23235b7f5%3A0x9056cf77fac7b277!2sDirgahayu%2C%20Kec.%20Kadipaten%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1722146780378!5m2!1sid!2sid"
                        width="600" height="450" allowFullScreen={false     } loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <h1>Lokasi Kantor Desa Dirgahayu</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.028449836248!2d108.11353040995168!3d-7.122700592851389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4b87848e718f%3A0xa3e4b24cf752b96e!2sKantor%20Desa%20Dirgahayu!5e0!3m2!1sid!2sid!4v1722147444281!5m2!1sid!2sid"
                        width="600" height="450" allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}