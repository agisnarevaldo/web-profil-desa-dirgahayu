import CardProfile from "@/app/components/cardProfile";

const sekdesData = [
    {
        id: 1,
        nama: "DEWI ROSMAWATI",
        jabatan: "SEKRETARIS DESA",
        pendidikan: "S1",
        noSk: "-",
        image: "/7.png"
    },
    {
        id: 2,
        nama: "INA YASNI LESTARI",
        jabatan: "KAUR UMUM",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/8.png"
    },
    {
        id: 3,
        nama: "IDA SITI SO'IDAH",
        jabatan: "KAUR PERENCANAAN",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/11.png"
    },
    {
        id: 4,
        nama: "RINI SURYANI",
        jabatan: "KAUR KEUANGAN",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/6.png"
    },
    {
        id:5,
        nama: "SANDHY BUDHY",
        jabatan: "KASI KESEJAHTERAAN",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/10.png"
    },
    {
        id: 6,
        nama: "DANY SOMANTIKA",
        jabatan: "KASI PEMERINTAHAN",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/5.png"
    },
    {
        id: 7,
        nama: "DUDUNG",
        jabatan: "KASI PELAYANAN",
        pendidikan: "SLTA",
        noSk: "-",
        image: "/1.png"
    },
    {
        id : 8,
        nama : "ANAN ROSIDIN",
        jabatan : "OPERATOR DESA",
        pendidikan : "_",
        noSk : "-",
        image : "/12.png"
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