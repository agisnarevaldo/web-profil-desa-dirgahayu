import Image from "next/image";
import CardProfile from "@/app/components/cardProfile";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-start gap-10 pt-3 pl-10">
            <CardProfile
                src="/kades.jpeg"
                nama="ASEP BUDI WAHYUDIN"
                jabatan="Kepala Desa"
                pendidikan="SLTA"
                noSk="141.1/kep-500/dpmdpakb/2019"
            />
        </div>
    )
}