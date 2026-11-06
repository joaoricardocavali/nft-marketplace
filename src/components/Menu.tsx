import './Menu.css'
import searchIcon from '../assets/search-icon.png'
import cartIcon from '../assets/cart-icon.png'
import logoutIcon from '../assets/logout-icon.png'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/store'
import { setCurrentPage } from '../store/store'

function Menu() {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            <div className="main-menu">
                <div className="menu-item1">
                    KURIO
                </div>
                <div className="menu-item2">
                    <div
                        className="menu-btn"
                        onClick={() => dispatch(setCurrentPage('inicio'))}
                    >
                        Inicio
                    </div>
                    <div
                        className="menu-btn"
                        onClick={() => dispatch(setCurrentPage('mercado'))}
                    >
                        Mercado
                    </div>
                    <div
                        className="menu-btn"
                        onClick={() => dispatch(setCurrentPage('criadores'))}
                    >
                        Criadores
                    </div>
                    <div
                        className="menu-btn"
                        onClick={() => dispatch(setCurrentPage('aprenda'))}
                    >
                        Aprenda
                    </div>
                </div>
                <div className="menu-item3">
                    <img src={searchIcon} alt="Search" />
                    <img src={cartIcon} alt="Cart" />
                    <div className="logout-btn">
                        <img src={logoutIcon} alt="Logout" />
                        Entrar
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu