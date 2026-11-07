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
                        // className="border-b border-white/10 pb-3 text-sm last:border-0 last:pb-0"
                    >
                        <span className="font-normal text-[15px] text-[#CFB28C]">{filtro.nome} ({filtro.valor})</span>
                        <span className="mt-1 block text-white/60"></span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Filtro
