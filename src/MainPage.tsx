import { useSelector } from 'react-redux'
import Menu from './components/Menu'
import './MainPage.css'
import InicioPage from './pages/Inicio'
import MercadoPage from './pages/Mercado'
import CriadoresPage from './pages/Criadores'
import AprendaPage from './pages/Aprenda'
import type { RootState } from './store/store'

function MainPage() {
    const currentPage = useSelector((state: RootState) => state.navigation.currentPage)

    return (
        <>
            <div className="app-shell">
                <Menu />
                <div className="content">
                    {currentPage === 'inicio' && <InicioPage />}
                    {currentPage === 'mercado' && <MercadoPage />}
                    {currentPage === 'criadores' && <CriadoresPage />}
                    {currentPage === 'aprenda' && <AprendaPage />}
                </div>
            </div>
        </>
    )
}

export default MainPage