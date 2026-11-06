const filtros = [
    { nome: 'Categoria', valor: 'Arte digital' },
    { nome: 'Artista', valor: 'Aurora Studio' },
    { nome: 'Coleção', valor: 'Universo abstrato' },
    { nome: 'Faixa de preço', valor: '0,5 – 2 ETH' },
    { nome: 'Blockchain', valor: 'Ethereum' },
]

function Filtro() {
    return (
        <aside
            aria-label="Filtros da galeria"
            className="h-fit w-full rounded-xl border border-white/10 bg-white/5 p-5 text-left text-[#F5F1EB]"
        >
            <h2 className="mb-4 text-xl font-bold">Filtros</h2>
            <ul className="space-y-3">
                {filtros.map((filtro) => (
                    <li
                        key={filtro.nome}
                        className="border-b border-white/10 pb-3 text-sm last:border-0 last:pb-0"
                    >
                        <span className="font-medium">{filtro.nome}</span>
                        <span className="mt-1 block text-white/60">{filtro.valor}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Filtro
