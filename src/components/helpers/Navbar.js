import "./helpers.scss";
const Navbar = () => {
    return (
        <div className="sticky-div">
            <nav class="navbar bg-body-tertiary" aria-label="Light offcanvas navbar">
                <div class="container-fluid">
                    <div className="pad10">
                        <a href="/"><img src={require('../Images/funteeswhite.jpg')} className="brandicon"></img></a>
                    </div>
                    {/* <a class="navbar-brand navbarText pad10" href="#">FUNTEES</a> */}
                    <div className="navbarsIcon">
                    <button class="navbar-toggler" type="button"  aria-controls="offcanvasNavbarLight" aria-label="Toggle navigation">
                        
                        <a href="/cart"><img src={require('../Images/cart.JPG')} className="icon" href="/cart"></img></a>
                    </button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight" aria-label="Toggle navigation">
                        <img src={require('../Images/menubars.JPG')} className="icon"></img>
                    </button>
                    </div>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
                        <div class="offcanvas-header">
                        <img src={require('../Images/funteesblack.jpg')} className="brandicon"></img>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Mens</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Womens</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex mt-3" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;