import { useState } from 'react'

const filtros = [
    { nome: 'Arte Digital', valor: '33' },
    { nome: 'Fotografia', valor: '12' },
    { nome: 'Música', valor: '65' },
    { nome: 'Arte 3D', valor: '39' },
    { nome: 'Colecionaveis', valor: '23' },
    { nome: 'Generativa', valor: '17' },
    { nome: 'Jogos', valor: '19' },
    { nome: 'Assinaturas', valor: '13' },
    { nome: 'Utilidade', valor: '18' },
]

function Filtro() {
    const [filtroSelecionado, setFiltroSelecionado] = useState<string | null>(null)

    return (
        <aside
            aria-label="Filtros da galeria"
            className="h-fit w-full rounded-xl border border-white/10 bg-white/5 p-5 text-left text-[#F5F1EB]"
        >
            <h2 className="mb-4 text-large font-bold">Filtros</h2>
            <ul className="space-y-3">
                {filtros.map((filtro) => (
                    <li
                        key={filtro.nome}
                    >
                        <button
                            type="button"
                            aria-pressed={filtroSelecionado === filtro.nome}
                            onClick={() => setFiltroSelecionado(filtro.nome)}
                            className={`w-full cursor-pointer text-left font-normal text-[15px] transition-colors ${
                                filtroSelecionado === filtro.nome
                                    ? 'text-[#E89B55]'
                                    : 'text-[#CFB28C] hover:text-[#E89B55]'
                            }`}
                        >
                            {filtro.nome} ({filtro.valor})
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Filtro
