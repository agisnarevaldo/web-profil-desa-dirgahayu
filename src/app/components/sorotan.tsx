import {GlareCard} from "@/app/components/ui/glare-card";

export default  function Sorotan() {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center">Sorotan</h1>
            <div className="flex px-10 gap-10">
                <GlareCard className="flex flex-col items-center justify-center w-1/3">
                    <img
                        className="h-full w-full absolute inset-0 object-cover"
                        src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </GlareCard>

                <div className="w-2/3 flex flex-col justify-center gap-4">
                    <p className="text-blue-600">Yang Di Rawat Seperti Anak</p>
                    <h1 className="text-2xl font-semibold">Perkebunan Jagung</h1>
                    <p className="text-justify">
                        Dengan Luas wilayah 812,5 HA Desa Dirgahayu memiliki lahan pertanian yang cukup besar yaitu
                        hampir 1/4 wilayah desa. Dengan begitu sektor pertanian menjadi komoditas besar di desa ini,
                        padi menjadi pilihan utama petani sebagai tanaman primer untuk di tanam dan di kelola. Dengan
                        lahan pertanian yang luas sektor pertanianpun sangat berpengaruh sekali terhadap kestabilan
                        ekonomi masyarakat dan Desa.
                    </p>
                </div>
            </div>
        </div>
    )
}