"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleScroll = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <nav
            className="flex justify-between items-center py-2 px-4 md:px-12 backdrop-blur-lg w-full sticky top-0 z-40 bg-gray-100 bg-opacity-60 shadow-lg"
            aria-label="Main Navigation"
        >
            <Link href="/" className="flex items-center font-bold gap-2">
                <Image src="/LogoFix.png" alt="Logo" width={40} height={40}/>
                <h1 className="text-xl">DESA DIRGAHAYU</h1>
            </Link>

            <ul
                className={`text-center lg:backdrop-blur-none lg:bg-none lg:bg-transparent lg:flex lg:items-center lg:gap-6 lg:p-0 p-4 absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-100 bg-opacity-60 backdrop-blur-lg shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}
                role="menu"
            >
                <li role="none" className="py-2">
                    <Link
                        href="/" role="menuitem"
                        tabIndex={0}
                        className="font-medium hover:text-fg flex justify-center"
                    >
                        Beranda
                    </Link>
                </li>
                <li role="none" className="py-2">
                    <Link
                        href="/about"
                        role="menuitem"
                        tabIndex={0}
                        className="font-medium hover:text-fg flex justify-center"
                    >
                        Tentang
                    </Link>
                </li>
                <li role="none" className="py-2">
                    <Link
                        href="/pelayanan"
                        role="menuitem"
                        tabIndex={0}
                        className="font-medium hover:text-fg flex justify-center"
                    >
                        Pelayanan
                    </Link>
                </li>
                <li role="none" className="py-2">
                    <Link
                        href="/#struktur"
                        role="menuitem"
                        tabIndex={0}
                        className="font-medium hover:text-fg flex justify-center"
                    >
                        Struktur
                    </Link>
                </li>
            </ul>

            <div className="lg:hidden">
                <button
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    className="text-black"
                >
                    <Icon icon={isMenuOpen ? "mingcute:close-line" : "mingcute:menu-line"} className="text-2xl"/>
                </button>
            </div>
        </nav>
    );
}
