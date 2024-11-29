import './root.css';
import { useEffect } from 'react';
import { Outlet, useLocation, Link } from "react-router-dom";
import Navbar from './pages/home/Navbar';

export default function Root() {

    const location = useLocation();

    useEffect(() => {
        if (location.pathname == "/") {
            document.querySelector("#navContainer").style.display = "none";
        } else {
            document.querySelector("#navContainer").style.display = "flex";
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location]);

    return (
        <>
            <h1 id="root-header">Ramen House and Izakaya</h1>
            <main id="main" className="rubik-regular">
                <Navbar />

                <Outlet />
            </main>
            <footer className="rubik-regular">
                <img src="/media/yoko_yoko_logo.png" />
                <div>
                    <p>315 Pacific Avenue, Bremerton, WA 98337</p>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/food">Food</Link></li>
                    <li><Link to="/drinks">Drinks</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </footer>
        </>
    );
}