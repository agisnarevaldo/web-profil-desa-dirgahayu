import Layanan from "@/app/components/layanan";
import Jadwal from "@/app/components/jadwal";

export default function ServicePage () {
    return (
        <main>
            <div className="py-8 flex flex-col gap-10 pt-20" id="layanan">
                <div className="">
                    <h1 className="text-2xl font-semibold text-center">Pelayanan Utama Kami</h1>
                    <p className="w-2/3 mx-auto text-center">
                        Desa Dirgahayu memiliki banyak fasilitas pelayanan masyarakat mulai dari pelayanan administratif
                        hingga
                        pelayanan sosial lainnya. Adapun pelayanan utama kami berfokus pada 4 point berikut ini, yaitu :
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 px-10 justify-around">
                    <Layanan/>
                    <Jadwal/>
                </div>

            </div>
        </main>
    )
}