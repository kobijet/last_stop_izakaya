import { LuAlignJustify } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [linksActive, setLinksActive] = useState(false);
    const [locked, setLocked] = useState(false);

    useEffect(() => {
        // Set navbar lock depending on window size
        if (window.innerWidth >= 1024)
        {
            setLocked(true);
        } else {
            setLocked(false);
        }

        if (!locked)
        {
            toggleNav();
        }
    }, []);

    const toggleNav = () => {
        const state = !linksActive * !locked;
        setLinksActive(state);

        if (state) {
            document.querySelector("nav").style.display = "block";
            document.querySelector("#navContainer").style.height = "100%";
            document.querySelector("#nav-logo").style.display = "none";
        } else {
            document.querySelector("nav").style.display = "none";
            document.querySelector("#navContainer").style.height = "6rem";
            document.querySelector("#nav-logo").style.display = "block";
        }
    }

    const navFunction = toggleNav;

    return (
        <div id="navContainer" className="shadow-high">
            <div id="nav-header">
                <button id="nav-hamburger" onClick={navFunction}><LuAlignJustify size={24} /></button>
                <Link id="nav-logo" to="/last_stop_izakaya/"><img src="/last_stop_izakaya/media/yoko_yoko_logo.png"/></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/last_stop_izakaya/" onClick={navFunction && !locked}><img src="/last_stop_izakaya/media/yoko_yoko_logo.png"/></Link></li>
                    <li><button><Link to="/last_stop_izakaya/" onClick={navFunction && !locked}>Home</Link></button></li>
                    <li><button><Link to="/last_stop_izakaya/food" onClick={navFunction && !locked}>Food</Link></button></li>
                    <li><button><Link to="/last_stop_izakaya/drinks" onClick={navFunction && !locked}>Drinks</Link></button></li>
                    <li><button><Link to="/last_stop_izakaya/" onClick={navFunction && !locked}>Contact</Link></button></li>
                </ul>
            </nav>
        </div>
    );
}