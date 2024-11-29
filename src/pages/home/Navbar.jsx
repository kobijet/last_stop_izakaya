import { LuAlignJustify } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Navbar() {
    const [linksActive, setLinksActive] = useState(false);

    const toggleNav = () => {
        const state = !linksActive;
        setLinksActive(state);

        if (state) {
            document.querySelector("nav").style.display = "block";
            document.querySelector("#navContainer").style.height = "100%";
            document.querySelector("#nav-logo").style.display = "none";
        } else {
            document.querySelector("nav").style.display = "none";
            document.querySelector("#navContainer").style.height = "12%";
            document.querySelector("#nav-logo").style.display = "block";
        }
    }

    return (
        <div id="navContainer" className="shadow-high">
            <div id="nav-header">
                <button id="nav-hamburger" onClick={toggleNav}><LuAlignJustify size={24} /></button>
                <Link id="nav-logo" to="/"><img src="/media/yoko_yoko_logo.png"/></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" onClick={toggleNav}><img src="/media/yoko_yoko_logo.png"/></Link></li>
                    <li><button><Link to="/" onClick={toggleNav}>Home</Link></button></li>
                    <li><button><Link to="/food" onClick={toggleNav}>Food</Link></button></li>
                    <li><button><Link to="/drinks" onClick={toggleNav}>Drinks</Link></button></li>
                    <li><button><Link to="/contact" onClick={toggleNav}>Contact</Link></button></li>
                </ul>
            </nav>
        </div>
    );
}