
const Header = () => {
   
    return (
        
<header>
<nav
    className="d-flex navbar navbar-light navbar-expand-md"
    style={{
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: "var(--padding-r-t2)",
        paddingLeft: "var(--padding-l-t2)",
        width: "100%",
        background: "#fff"
    }}
>
    <div className="d-flex" style={{ width: "100%" }}>
        <img src="assets/img/2222.svg" />
        <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
            style={{ padding: 0 }}
        >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav ms-auto" style={{ display: "none", gap: 30 }}>
                <li className="nav-item">
                    <a className="nav-link nav-item" href="#" style={{ padding: 0 }}>
                        Inicio
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-item" href="#" style={{ padding: 0 }}>
                        Precios
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link active nav-item"
                        href="#"
                        style={{ padding: 0 }}
                    >
                        Generador de contraseñas
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</header>

    )
}

export default Header;
