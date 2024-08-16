export default function Lokasi () {
    return (
        <div className="lg:flex justify-evenly  px-10 py-4">
            {/*<h1 className="text-2xl text-center">Lokasi Desa</h1>*/}
            <div>
                <h1 className="text-xl font-semibold text-center">Wilayah Desa Dirgahayu</h1>
                <iframe
                    className="rounded-xl overflow-hidden shadow-lg h-96"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31671.54282524456!2d108.089183551174!3d-7.132607160459065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4ba23235b7f5%3A0x9056cf77fac7b277!2sDirgahayu%2C%20Kec.%20Kadipaten%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1722146780378!5m2!1sid!2sid"
                    width="600" height="450" allowFullScreen={false} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <h1 className="text-xl font-semibold text-center">Lokasi Kantor Desa Dirgahayu</h1>
                <iframe
                    className="rounded-xl overflow-hidden shadow-lg h-96"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.028449836248!2d108.11353040995168!3d-7.122700592851389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4b87848e718f%3A0xa3e4b24cf752b96e!2sKantor%20Desa%20Dirgahayu!5e0!3m2!1sid!2sid!4v1722147444281!5m2!1sid!2sid"
                    width="600" height="450" allowFullScreen={true} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}