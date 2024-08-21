import CardProfile from "@/app/components/cardProfile";

const sekdesData = [
    {
        id: 1,
        nama: "RINI SURYANI",
        jabatan: "SEKRETARIS DESA",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/6.png"
    },
    {
        id: 2,
        nama: "DEWI ROSMAWATI",
        jabatan: "KAUR PERENCANAAN",
        pendidikan: "S1",
        noSk: "-",
        image: "/7.png"
    },
    {
        id: 3,
        nama: "SENDHY BUDHY UTAMA",
        jabatan: "KASI KESEJAHTERAAN",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/10.png"
    },
    {
        id: 4,
        nama: "DANY SOMANTIKA",
        jabatan: "KASI KEPEMERINTAHAN",
        pendidikan: "SLTA",
        noSk: "-",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=DS"
    },
    {
        id: 5,
        nama: "IDA SITI SOIDAH",
        jabatan: "KAUR TU DAN UMUM",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/11.png"
    },
    {
        id: 6,
        nama: "DUDUNG",
        jabatan: "KASI PELAYANAN",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/1.png"
    },
]

export default function Page() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-3 pl-6 w-full">
            {sekdesData.map((data) => (
                <CardProfile key={data.id} src={data.image} nama={data.nama} jabatan={data.jabatan}
                             pendidikan={data.pendidikan} noSk={data.noSk} className="w-full"/>
            ))}
        </div>
    )
}