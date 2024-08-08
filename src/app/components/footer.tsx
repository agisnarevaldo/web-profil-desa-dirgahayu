import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer
            className="bg-secondary border-t-[0.1px] border-t-slate-200 text-sm text-center pt-5 text-slate-100  w-full">
            <div className="text-left pl-12">
                <h1 className="font-bold text-2xl">DESA DIRGAHAYU</h1>
                <p>Jalan Paratag No. 01 Dirgahayu - Kadipaten -Tasikmalaya (46157)</p>
            </div>
            <div
                className="flex justify-center items-center mt-4 py-2 bg-slate-100 w-full backdrop-blur-lg bg-opacity-30">
                <p>Created by <Link
                    href="https://www.instagram.com/kkn.dirgahayu2024/"
                    className="underline"
                >
                    KKN UNPER
                </Link> | </p>
                <p>&copy; {currentYear} Desa Dirgahayu</p>
            </div>
        </footer>
    )
}