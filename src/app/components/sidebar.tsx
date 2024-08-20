"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="px-4 flex lg:w-1/4 border border-r-slate-400 h-full lg:sticky top-16 left-0 overflow-y-hidden">
            <div className="flex flex-col lg:pl-10 py-2 text-center w-full md:text-left">
                <Link href="/struktur"
                      className={
                            clsx(
                                "hover:text-fg py-3",
                                {
                                    "text-fg": pathname === "/struktur",
                                }
                            )
                      }>
                    Struktur
                </Link>
                <Link href="/struktur/kepala-desa"
                      className={
                            clsx(
                                "hover:text-fg py-3",
                                {
                                    "text-fg": pathname === "/struktur/kepala-desa",
                                }
                            )
                      }>
                    Kepala Desa
                </Link>
                <Link href="/struktur/sekdes"
                      className={
                            clsx(
                                "hover:text-fg py-3",
                                {
                                    "text-fg": pathname === "/struktur/sekdes",
                                }
                            )
                      }>
                    Sekretaris Desa
                </Link>
                <Link href="/struktur/perangkat-desa"
                      className={
                            clsx(
                                "hover:text-fg py-3",
                                {
                                    "text-fg": pathname === "/struktur/perangkat-desa",
                                }
                            )
                      }>
                    Perangkat Desa
                </Link>
            </div>
        </div>
    )
}