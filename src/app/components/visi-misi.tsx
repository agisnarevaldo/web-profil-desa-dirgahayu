
export default function VisiMisi() {
    return (
        <div className="lg:flex flex-col gap-10 px-20 my-8">
            <div className="border border-primary py-4 px-8 h-max rounded-lg">
                <h2 className="text-2xl font-bold mb-4">VISI</h2>
                <p className="font-semibold">
                    DESA DIRGAHAYU SEBAGAI LELMBAGA PELAYANAN MASYARAKAT YANG PROFESIONAL MENUJU KESEJAHTERAAN
                    MASYARAKAT YANG BERAKHLAKUL KARIMAH YANG DILANDASI IMAN DAN TAQWA

                </p>
            </div>
            <div className="border border-primary py-4 px-8 h-max rounded-lg">
                <h2 className="text-2xl font-bold mb-4">MISI</h2>
                <ol className="list-decimal">
                    <li>Meningkatkan Kesejahteraan Manusia (SDM).</li>
                    <li>Mewujudkan Peningkatan Pemberdayaan Masyarakat Menggali Sumber Daya Alam (SDA)</li>
                    <li>Terwujudnya insfrastruktur pembangunan pedesaan guna mendukung potensi Sumber Daya Alam (SDA) serta Sumber Daya Manusia (SDA).</li>
                    <li>Peningkatan pelayanan masyarakat yang maksimal.</li>
                    <li>Terciptanya suasana ketertiban dan keamanan.</li>
                    <li>Terciptanya suasana ketertiban dan keamanan.</li>
                    <li>Menyelenggarakan kegiatan tertib administrasi Pemerintah Desa.</li>
                    <li>Membangun da n mendorong majunya bidang pembangunan fisik material serta mental spiritual dengan membuka akses terhadap inpestor baik dari dalam maupun luar</li>
                    <li>Membangun dan mendorong terciptanya pendidikan yang menghasilkan insan intelektual serta mampu menciptakan lapangan pekerjaan.</li>
                    <li>Membangun kemandirian dalam usaha serta pemanfaatan sumber daya alam yang ada dan tidak ketergantungan kepada pencarian lapangan kerja.</li>
                    <li>Membangun dan mendorong terciptanya sarana pendidikan umum dan agama sehingga menghasilkan generasi penerus yang siap pakai.</li>
                    <li>Membangun dan mendorong majunya bidang pendidikan baik formal maupun non formal serta pendidikan agama yang mudah dan murah.</li>
                </ol>
            </div>
        </div>
    )
}

export const items = [
    {
        title: "Visi",
        description: "Mewujudkan Desa Dirgahayu yang mandiri, religius, dan sejahtera.",
    },
    {
        title: "Misi",
        description: "1. Meningkatkan kesejahteraan masyarakat.\n2. Meningkatkan kualitas sumber daya manusia.\n3. Meningkatkan pelayanan publik.\n4. Meningkatkan kualitas lingkungan hidup."
    }
]