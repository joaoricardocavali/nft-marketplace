import Carrossel from '../components/Carrossel'
import Colecoes from '../components/Colecoes'
import './Inicio.css'

function InicioPage() {

    return (
        <>
            <div className="main">
                <Carrossel />
                <Colecoes />
            </div>
        </>
    )
}

export default InicioPage