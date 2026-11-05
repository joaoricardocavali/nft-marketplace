import './Menu.css'

function Menu() {

    return (
        <>
            <div className="main-menu">
                <div className="menu-item1">
                    KURIO
                </div>
                <div className="menu-item2">
                    <div className="menu-btn">
                        Inicio
                    </div>
                    <div className="menu-btn">
                        Mercado
                    </div>
                    <div className="menu-btn">
                        Criadores
                    </div>
                    <div className="menu-btn">
                        Aprenda
                    </div>
                </div>
                <div className="menu-item3">
                    <use href="/icons.svg#documentation-icon"></use>
                </div>
            </div>
        </>
    )
}

export default Menu