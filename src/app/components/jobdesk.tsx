interface Jobdesk {
    title: string;
    desc: string;
    func?: string;
}

export default function Jobdesk({title, desc, func}: Readonly<Jobdesk>) {
    return (
        <div className="flex flex-col rounded-lg text-center border border-fg py-4 px-6 justify-around">
            <h1 className="text-lg font-medium">{title}</h1>
            <p>{desc}</p>
            <h2 className="text-red-600">Fungsi:</h2>
            <p>{func}</p>
        </div>
    )
}