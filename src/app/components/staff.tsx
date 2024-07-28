import Image from "next/image";

export default function Staff() {
    return (
        <div>
            <h1>STAFF DESA DIRGAHAYU</h1>
            <img className="rounded-full"  src="https://api.dicebear.com/9.x/initials/svg?seed=Rizky" alt="profil" width={200} height={200}/>
            <p>Kepala seksi kesejahteraan (Kasi Kesra) ini bertugas membantu Kepala Desa dalam melaksanakan tugas bidang pembangunan dan pemberdayaan masyarakat </p>
        </div>
    )
}