import Image from "next/image";

interface CardProfileProps {
    src: string;
    nama: string;
    jabatan: string;
    pendidikan: string;
    noSk: string;
    className?: string;
}

export default function CardProfile({src, nama, jabatan, pendidikan, noSk, className}: Readonly<CardProfileProps>) {
    return (
        <div className={className}>
            <h1 className="text-2xl mb-2">{jabatan}</h1>
            <div className={`flex mx-auto items-center w-full gap-4`}>
                <img src={src} alt="Photo" width={150} height={150} className="rounded-md"/>
                <table>
                    <tbody>
                    <tr>
                        <td className="pr-6">Nama</td>
                        <td>: {nama}</td>
                    </tr>
                    <tr>
                        <td className="pr-6">Jabatan</td>
                        <td>: {jabatan}</td>
                    </tr>
                    <tr>
                        <td className="pr-6">Pendidikan</td>
                        <td>: {pendidikan}</td>
                    </tr>
                    <tr>
                        <td className="pr-6">NO SK</td>
                        <td>: {noSk}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}