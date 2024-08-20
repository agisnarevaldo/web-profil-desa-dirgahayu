import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";

export default function StrukturLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row ">
                <Sidebar/>
                {children}
            </div>
            <Footer />
        </div>
    )
}