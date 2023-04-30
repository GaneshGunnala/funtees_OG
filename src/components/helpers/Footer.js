const Footer = () => {
    return (
        <div>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img src={require('../Images/tee.JPG')} className='footerIcon'></img>
                        </a>
                        <span class="mb-3 mb-md-0 text-muted">© 2023 Funtees, Inc</span>
                    </div>
                    <div>
                    <img src={require('../Images/facebook.JPG')} className='footerIcon'></img>
                    <img src={require('../Images/insta.JPG')} className='footerIcon'></img>
                    </div>

                    
                </footer>
            </div>
        </div>
    );
}

export default Footer;