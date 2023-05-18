import "./helpers.scss";
const Navbar = () => {
    return (
        <div className="sticky-div">
            <nav className="navbar bg-body-tertiary" aria-label="Light offcanvas navbar">
                <div className="container-fluid">
                    <div className="pad10">
                        <a href="/"><img src={require('../Images/funteeswhite.jpg')} className="brandicon"></img></a>
                    </div>
                    {/* <a className="navbar-brand navbarText pad10" href="#">FUNTEES</a> */}
                    <div className="navbarsIcon">
                    <button className="navbar-toggler" type="button"  aria-controls="offcanvasNavbarLight" aria-label="Toggle navigation">
                        
                        <a href="/cart"><img src={require('../Images/cart.JPG')} className="icon" href="/cart"></img></a>
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight" aria-label="Toggle navigation">
                        <img src={require('../Images/menubars.JPG')} className="icon"></img>
                    </button>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
                        <div className="offcanvas-header">
                        <img src={require('../Images/funteesblack.jpg')} className="brandicon"></img>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Mens</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Womens</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact/Vibe With Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/aboutus" >About Us</a>
                                </li>
                            </ul>
                            {/* <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;