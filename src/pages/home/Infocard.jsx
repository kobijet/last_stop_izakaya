import './home.css';
import { Link } from "react-router-dom";

// Pass in array of image links and create grid of images

export default function Infocard({title, symbol, subtitle, infotext, buttontext, link}) {
    return (
        <>
            <section className="info">
                <h2 className="info-title">{title || "Izakaya"}</h2>
                <div className="info-icon">
                    <p>{symbol || "居酒屋"}</p>
                    <p>{subtitle || '"stay-drink-place"'}</p>
                </div>
                <p>{infotext || "Infotext"}</p>
                <Link to={link}><button>{buttontext}</button></Link>
            </section>
        </>
    );
}