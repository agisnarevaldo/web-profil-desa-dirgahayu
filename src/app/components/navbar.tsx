import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
    <nav className="flex justify-between items-center py-1 px-4 md:px-12 backdrop-blur-lg w-full sticky top-0 z-40 bg-gray-100 bg-opacity-50">
            <Link href="/" className="flex items-center font-bold gap-2">
                <Image src="/LogoFix.png" alt="Logo" width={40} height={40} />
                <h1 className="text-xl      ">DESA DIRGAHAYU</h1>
            </Link>
            <ul className="flex justify-between items-center gap-6 p-4  ">
                <Link href="/" className="font-bold">Beranda</Link>
                <Link href="/about">Tentang</Link>
                <Link href="/contact">Pelayanan</Link>
                <Link href="#struktur">Struktur</Link>
            </ul>
        </nav>
    )
}