import { useState } from 'react'
import bannerImage from '../assets/Frame-136.png'
import './Carrossel.css'

const banner = {
    eyebrow: 'Bem-vindo à Kurio',
    title: 'SEJA DONO DO FUTURO DA ARTE DIGITAL',
    description: 'Descubra NFTs selecionados de criadores emergentes e consagrados. Colecione arte digital rara, apoie artistas e tenha uma parte da cultura da internet.',
}
const banners = [banner, banner, banner]

function Carrossel() {
    const [currentBanner, setCurrentBanner] = useState(0)

    function showPreviousBanner() {
        setCurrentBanner((current) => (current - 1 + banners.length) % banners.length)
    }

    function showNextBanner() {
        setCurrentBanner((current) => (current + 1) % banners.length)
    }

    return (
        <section
            aria-label="Destaques"
            className="relative mx-auto grid min-h-105 w-full max-w-6xl grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-[#140D0A] px-12 py-10 sm:px-16 md:grid-cols-2"
        >
            <div className="text-left text-white">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/80">
                    {banners[currentBanner].eyebrow}
                </p>
                <div className="text-4xl font-extrabold leading-tight sm:text-6xl">
                    {banners[currentBanner].title}
                </div>
                <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                    {banners[currentBanner].description}
                </p>
                <button
                    type="button"
                    className="mt-8 rounded-md bg-[#D28A4C] px-6 py-3 font-semibold text-gray-900 transition hover:bg-white/85"
                >
                    EXPLORAR
                </button>
            </div>
            <img
                src={bannerImage}
                alt="Arte em destaque"
                className="h-52 w-full object-contain md:h-80"
            />

            <button
                type="button"
                aria-label="Banner anterior"
                onClick={showPreviousBanner}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white transition hover:bg-white/20"
            >
                ‹
            </button>
            <button
                type="button"
                aria-label="Próximo banner"
                onClick={showNextBanner}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white transition hover:bg-white/20"
            >
                ›
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {banners.map((banner, index) => (
                    <button
                        key={banner.title}
                        type="button"
                        aria-label={`Mostrar banner ${index + 1}`}
                        aria-current={currentBanner === index ? 'true' : undefined}
                        onClick={() => setCurrentBanner(index)}
                        className={`h-2.5 rounded-full transition-all ${
                            currentBanner === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Carrossel
