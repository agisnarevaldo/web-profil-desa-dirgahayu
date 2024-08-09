import {GlareCard} from "@/app/components/ui/glare-card";

type SorotanCardProps = {
    title: string;
    description: string;
    image: string;
    tagline?: string;
}

const SorotanCard = ({title, description, image, tagline}: SorotanCardProps) => {
    return (
        <div className="flex flex-col lg:flex-row px-10 lg:gap-10">
            <GlareCard className="w-screen  ">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src={image}
                />
            </GlareCard>
            <div className="flex flex-col items-start justify-center max-w-xl py-8 px-6">
                <p className="text-fg">{tagline}</p>
                <h1 className="font-bold text-2xl">{title}</h1>
                <p className="font-normal text-base mt-4">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default  function Sorotan() {
    return (
    <div className="flex flex-col gap-10 py-10 w-full items-center" id="sorotan">
            <div>
                <h1 className="text-2xl font-semibold text-center">Sorotan</h1>
                <p className="w-2/3 mx-auto text-center">
                    Berikut adalah beberapa sorotan terkait desa dirgahayu yang bisa menjadi informasi tambahan:
                </p>
            </div>
            <SorotanCard
                tagline="Yang Di Rawat Seperti Anak"
                title="Sawah yang luas penghasil padi"
                description="Banyaknya lahan perkebunan kelapa membawa berkah lain bagi masyarakat dan enokomi desa, yaitu produk unggulan desa berupa Gula Merah (Gula Kelapa) yang di buat dengan air nira kelapa. Dengan begitu banyak masyarakat yang mencari alternatif profesi menjadi penyadap Kelapa. Gula merah menjadi produk unggulan desa dengan nilai ekonomi yang tinggi dan stabil."
                image="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <SorotanCard
                tagline="Yang Di Rawat Seperti Anak"
                title="Sawah yang luas penghasil padi"
                description="Banyaknya lahan perkebunan kelapa membawa berkah lain bagi masyarakat dan enokomi desa, yaitu produk unggulan desa berupa Gula Merah (Gula Kelapa) yang di buat dengan air nira kelapa. Dengan begitu banyak masyarakat yang mencari alternatif profesi menjadi penyadap Kelapa. Gula merah menjadi produk unggulan desa dengan nilai ekonomi yang tinggi dan stabil."
                image="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <SorotanCard
                title="The greatest trick"
                description="The greatest trick the devil ever pulled was to convince the world that he didn't"
                image="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>
    )
}