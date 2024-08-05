import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className="flex justify-between items-center py-2 px-4 md:px-12 backdrop-blur-lg w-full sticky top-0 z-40 bg-gray-100 bg-opacity-60 shadow-lg"
            aria-label="Main Navigation"
        >
            <Link href="/" className="flex items-center font-bold gap-2">
                <Image src="/LogoFix.png" alt="Logo" width={40} height={40} />
                <h1 className="text-xl">DESA DIRGAHAYU</h1>
            </Link>
            <div className="lg:hidden">
                <button
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    className="text-black"
                >
                    <Icon icon={isMenuOpen ? "mingcute:close-line" : "mingcute:menu-line"} className="text-2xl" />
                </button>
            </div>

            <ul
                className={`flex-col lg:flex-row gap-6 p-4 lg:p-0 lg:items-center lg:flex ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
                role="menu"
            >
                <li role="none">
                    <Link href="/" role="menuitem" tabIndex={0} className="font-bold">Beranda</Link>
                </li>
                <li role="none">
                    <Link href="/#about" role="menuitem" tabIndex={0}>Tentang</Link>
                </li>
                <li role="none">
                    <Link href="/#layanan" role="menuitem" tabIndex={0}>Pelayanan</Link>
                </li>
                <li role="none">
                    <Link href="/#struktur" role="menuitem" tabIndex={0}>Struktur</Link>
                </li>
            </ul>
        </nav>
    );
}