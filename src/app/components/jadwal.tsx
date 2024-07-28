type JadwalCardProps = {
    hari: string;
    jam: string;
}

const Item = ({ hari, jam }: JadwalCardProps) => {
    return (
        <div className="flex justify-between py-2 px-4 border border-black">
            <p>{hari}</p>
            <p>{jam}</p>
        </div>
    )
}

export default function Jadwal() {
    return (
        <div className="border rounded-xl border-black flex flex-col w-1/4 gap-2 py-2">
            <div className="py-2">
                <h1 className="text-center font-semibold">Waktu dan Hari Kerja</h1>
            </div>
            <Item hari="Senin" jam="08:00 - 15:00"/>
            <Item hari="Selasa" jam="08:00 - 15:00"/>
            <Item hari="Rabu" jam="08:00 - 15:00"/>
            <Item hari="Kamis" jam="08:00 - 15:00"/>
            <Item hari="Jumat" jam="08:00 - 15:00"/>
            <Item hari="Sabtu" jam="Libur"/>
            <Item hari="Minggu" jam="Libur"/>
        </div>
    )
}