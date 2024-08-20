import Image from "next/image";
import Jobdesk from "@/app/components/jobdesk";

export default function Page() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Image src="/STRUKTUR_ORGANISASI.jpg" alt="Kepala Desa" width={760} height={760}
                   className="mx-auto mt-4"
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 py-3 px-3">
                <Jobdesk
                    title="SEKRETARIS DESA"
                    desc="Bertugas membantu Kepala Desa dalam bidang pemerintahan"
                    func="Melaksanakan urusan ketatausahaan Melaksanakan urusan umum Melaksanakan urusan keuangan Melaksanakan urusan perencanaan"
                />
                <Jobdesk
                    title="KAUR UMUM/TU"
                    desc="Bertugas membantu Sekretaris Desa dalam urusan pelayanan administrasi pendukung pelaksanaan tugas-tugas pemerintahan"
                    func="Melaksanakan urusan ketatausahaan seperti tata naskah, tata arsip, dan tata surat\n Melaksanakan urusan umum Melaksanakan urusan keuangan Melaksanakan urusan perencanaan"
                />
                <Jobdesk
                    title="KAUR KEUANGAN"
                    desc="Bertugas membantu Sekretaris Desa dalam bidang keuangan"
                    func="Melaksanakan urusan ketatausahaan Melaksanakan urusan umum\Melaksanakan urusan keuangan Melaksanakan urusan perencanaan"
                />
                <Jobdesk
                    title="KAUR PERENCANAAN"
                    desc="Bertuagas membantu Sekretaris Desa dalam urusan pelayanan administrasi pendukung pelaksanaan tugas-tugas pemerintahan"
                    func="Mengoordinasikan urusan perencanaan Menyusun rencana angaran pendapatan pendapatan dan belanja desa Menginventarir data-data dalam rangka pembangunan Melalkukan monitoring dan evaluasi program serta penyusunan laporan"
                />
                <Jobdesk
                    title="KASI PEMERINTAHAN"
                    desc="Bertugas membantu Kepala Desa sebagai pelaksana tugas operasional"
                    func="Melaksanakan manajemen tata praja Pemerintahan, menyusun rancangan regulasi desa,\pembinaan masalah pertahanan, pembinaan ketentraman dan ketertiban, pelaksanaan upaya perlindungan masyarakat, kependudukan, penataan, dan pengelolaan wilayah, serta pendataan dan pengelolaan prpofil Desa"
                />
                <Jobdesk
                    title="KASI KESRA"
                    desc="Bertugas membantu Kepala Desa sebagai pelaksana tugas operasional"
                    func="Melaksanakan pembangungan sarana prasarana perdesaan, pembangunan bidang pendidikan, kesehatan, dan tugas sosialisasi serta motivasi masyarakat di bidang budaya, ekonomi, politik, lingkungan hidup, pemberdayaan keluarga, pemuda, olahraga, dan karang taruna"
                />
                <Jobdesk
                    title="KASI PELAYANAN"
                    desc="Bertugas membantu Kepala Desa sebagai pelaksana tugas operasional"
                    func="Melaksanakan penyuluhan dan motivasi terhadap pelaksanaan hak dan kewajiban masyarakat, meningkatkan upaya partisipasi masyarakat, pelestarian nilai sosial budaya masyarakat, keagamaan, dan ketenagakerja"
                />
                <Jobdesk
                    title="KEPALA DUSUN/KAWIL"
                    desc="Bertugas membantu Kepala Desa dalam pelaksanaan tugasnya di wilayahnya"
                    func="Pembinaan ketentraman dan ketertiban, pelaksanaan upaya perlindungan masyarakat, mobilitas kependudukan, dan penataan dan pengelolaan wilayah. b) Mengawasi pelaksanaan pembangunan di wilayahnya. c) Melaksanakan pembinaan kemasyarakatan dalam meningkatkan kemampuan dan kesadaran masyarakat dalam menjaga lingkunganya. d) Melakukan upaya-upaya pemberdayaan masyarakat dalam menunjang kelancaran penyelenggaraan pemerintahan dan pembangunan    "
                />
            </div>
        </div>
    )
}