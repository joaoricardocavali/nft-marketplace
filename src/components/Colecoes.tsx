
import { useState } from 'react'
import colecoes from '../db/db.json'
import imagem01 from '../assets/01.png'
import imagem02 from '../assets/02.png'
import imagem03 from '../assets/03.png'
import imagem04 from '../assets/04.png'
import Filtro from './Filtro'

const imagens: Record<string, string> = {
    '01': imagem01,
    '02': imagem02,
    '03': imagem03,
    '04': imagem04,
}

const itensPorPagina = 9

function Colecoes() {
    const [paginaAtual, setPaginaAtual] = useState(0)
    const totalPaginas = Math.ceil(colecoes.items.length / itensPorPagina)
    const itensVisiveis = colecoes.items.slice(
        paginaAtual * itensPorPagina,
        (paginaAtual + 1) * itensPorPagina,
    )

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
                <Filtro />
                <div className="min-w-0 text-[#F5F1EB]">
                    <h2 className="mb-6 text-left text-2xl font-bold">Coleções</h2>
                    <div className="grid grid-cols-3 gap-3 sm:gap-6">
                        {itensVisiveis.map((item) => (
                            <article
                                key={item.nome}
                                className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                            >
                                <img
                                    src={imagens[item.imagem]}
                                    alt={item.nome}
                                    className="aspect-square w-full object-cover"
                                />
                                <div className="p-2 text-left sm:p-4">
                                    <h3 className="truncate text-sm font-semibold sm:text-base">
                                        {item.nome}
                                    </h3>
                                    <p className="mt-1 text-xs text-white/70 sm:text-sm">
                                        {item.valor}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <nav
                        aria-label="Paginação das coleções"
                        className="mt-8 flex items-center justify-center gap-2"
                    >
                        {Array.from({ length: totalPaginas }, (_, pagina) => (
                            <button
                                key={pagina}
                                type="button"
                                aria-label={`Página ${pagina + 1}`}
                                aria-current={paginaAtual === pagina ? 'page' : undefined}
                                onClick={() => setPaginaAtual(pagina)}
                                className={`h-10 w-10 rounded-md font-semibold transition ${
                                    paginaAtual === pagina
                                        ? 'bg-[#D28A4C] text-[#140D0A]'
                                        : 'bg-white/10 text-[#F5F1EB] hover:bg-white/20'
                                }`}
                            >
                                {pagina + 1}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Colecoes