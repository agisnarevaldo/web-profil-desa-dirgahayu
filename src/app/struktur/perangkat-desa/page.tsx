import CardProfile from "@/app/components/cardProfile";

const perangkatDesaData          = [
    {
        id: 1,
        nama: "HENDI",
        jabatan: "KEPWIL PALUMBUNGAN",
        pendidikan: "S1",
        noSk: "800/141.3/04/KEP-DES/2019",
        image: "/14.png"
    },
    {
    id: 2,
        nama: "DENI",
        jabatan: "KEPWIL TROWEK",
        pendidikan: "SLTA",
        noSk: "141.1/02/KEP-DES/2017",
        image: "/9.png"
    },
    {
        id: 3,
        nama: "AI NINING",
        jabatan: "KEPWIL GEKBRONG",
        pendidikan: "SLTA",
        noSk: "800/141.3/01/KEP-DES/2019",
        image: "/4.png"
    },
    {
        id: 4,
        nama: "EDAH",
        jabatan: "KEPWIL CIJOTANG",
        pendidikan: "SLTA",
        noSk: "800/141.3/03/KEP-DES/2019",
        image: "/3.png"
    },
    {
        id: 5,
        nama: "RISMA",
        jabatan: "KEPWIL CIPEUSING",
        pendidikan: "SLTA",
        noSk: "800/141.3/02/KEP-DES/2017",
        image: "/2.png"
    },
    {
        id: 6,
        nama: "YAYA ROHANA",
        jabatan: "KEPWIL CILONGKEANG",
        pendidikan: "SLTA",
        noSk: "800/141.3/01/KEP-DES/2017",
        image: "/13.png"
    },
    ]


export default function Page() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-3 pl-6 w-full">
            {perangkatDesaData.map((data) => (
                <CardProfile key={data.id} src={data.image} nama={data.nama} jabatan={data.jabatan}
                             pendidikan={data.pendidikan} noSk={data.noSk} className="w-full"/>
            ))}
        </div>
    )
}