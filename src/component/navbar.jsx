import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // pastikan untuk menggunakan bootstrap.bundle.min.js
import { useEffect } from 'react';

function Navbar({ children }) {
    useEffect(() => {
        // Kode ini akan dijalankan hanya di client
        const bootstrap = require('bootstrap'); // mengimpor bootstrap secara dinamis

        // Anda bisa menggunakan bootstrap jika diperlukan, misalnya untuk menginisialisasi komponen

    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary fixed-top">
                <div className="container">
                    <a className="navbar-brand me-lg-5" href="#">
                        <h1 className='fw-bold'>YTDL<div className='fw-bold text-white d-inline'>-PROF</div></h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h1 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <div className='fw-bold text-primary'>YTDL<div className='fw-bold text-dark d-inline'>-PROF</div></div>
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className='navbar-nav'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
