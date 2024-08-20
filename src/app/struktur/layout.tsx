import Sidebar from "@/app/components/sidebar";

export default function StrukturLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
            <div className="flex flex-col lg:flex-row min-h-screen">
                <Sidebar />
                {children}
            </div>
    )
}