import Link from "next/link";

export default function Footer () {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-primary border-t-[0.1px] border-t-slate-200 text-sm text-center pt-5 text-slate-100  w-full">
            <div className="flex justify-center items-center px-4 ">
                <div className="text-left">
                    <h1 className="font-bold text-2xl">DESA DIRGAHAYU</h1>
                    <p>Jl. Raya Desa Dirgahayu No. 1, Kec. Dirgahayu, Kab. Dirgahayu, Prov. Dirgahayu</p>
                </div>
                {/*<div className="text-right">*/}
                {/*    <h1 className="font-bold">Kontak</h1>*/}
                {/*    <p>Telepon: 081234567890</p>*/}
                {/*    <p>Email:{" "}*/}
                {/*        <a href="mailto:agisrifaldo75@gmail.com" className="text-gray-800">*/}
                {/*            Dirgahayu@mail.com*/}
                {/*        </a>*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
            <div className="flex justify-center items-center mt-4 bg-slate-100 w-full backdrop-blur-lg bg-opacity-30">
                <p>Created by <Link
                    href="https://www.instagram.com/kkn.dirgahayu2024/"
                    className="underline"
                >
                    KKN Universitas Perjuangan
                </Link> | </p>
                <p>&copy; {currentYear  } Desa Dirgahayu</p>
            </div>
        </footer>
    )
}