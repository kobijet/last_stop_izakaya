import "./home.css";
import Infocard from "./Infocard";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section id="home">
                <h2 id="home-header">Home</h2>
                <img id="hero-image" className="shadow-low" src="/last_stop_izakaya/media/interior_4_blur.jpg" />
                <div id="hero-div">
                    <img id="hero-logo" className="shadow-high" src="/last_stop_izakaya/media/yoko_yoko_logo.png" alt="logo" />
                    
                    <h2 id="hero-title">いらっしゃいませ</h2>
                    <p id="hero-subtitle">“Irasshaimase!”</p>
                    <div id="hero-buttons">
                        <Link to={'food'}><button>Food</button></Link>
                        <Link to={'drinks'}><button>Drinks</button></Link>
                    </div>
                </div>
                <div id="home-hours">
                    <h3><b>Hours</b></h3>
                    <p>
                        Monday - Thursday 10am -10pm
                        <br />Friday & Saturday 10am -11pm
                        <br />Sunday 11am - 7pm
                    </p>
                </div>
                <div id="home-address">
                    <h3><b>Address</b></h3>
                    <p>315 Pacific Avenue, Bremerton, WA 98337</p>
                </div>
            </section>

            {/*
                Izakaya section
            */}
            <div className="img-container">
                    <img className="img200 img-floatright shadow-high" src="/last_stop_izakaya/media/sapporo_spicy.jpg" />
                    <img className="img200 shadow-high" src="/last_stop_izakaya/media/drinks_3.jpg" />
            </div>
            <Infocard 
                title="Izakaya"
                symbol="居酒屋"
                subtitle='"stay-drink-place"'
                infotext="Izakaya are a traditional Japanese gastropub that encourages you to stay and savor the experience. True to its roots in Japan, our Izakaya serves delectable ramen bowls and authentic Japanese dishes, backed by our full-service bar with plenty of outstanding cocktails and the largest collection of sake in Kitsap County to choose from. Come stay, enjoy a delicious meal or drink, and settle in."
                buttontext="Izakaya"
                link="food"
            />

            {/*
                Food section
            */}
            <div className="img-container">
                <img className="img300 img-floatcenter shadow-high" src="/last_stop_izakaya/media/yokohama.jpg" />
            </div>
            <Infocard 
                title="Savor Japan" 
                symbol="横須賀" 
                subtitle='"Yokosuka"' 
                infotext="We pride ourselves in serving authentic, true-to-origin Japanese cuisine. We only use high-quality ingredients that capture the real flavor of Japan. Each of our seven savory ramen bowls are customizable and served as they are made. If that’s not what you’re looking for, we have dozens of other tempting plates to choose from, served just as fast."
                buttontext="View food"
                link="food"
            />

            {/*
                Drinks section
            */}
            <div className="img-container">
                <img className="img200 shadow-high" src="/last_stop_izakaya/media/drinks_1.jpg" />
                <img className="img200 img-floatright shadow-high" src="/last_stop_izakaya/media/drinks_2.jpg" />
                <img className="img200 shadow-high" src="/last_stop_izakaya/media/tropic_haze.jpg" />
            </div>
            <Infocard 
                title="Sake, cocktails, & drinks"
                symbol="橫濱" 
                subtitle='"Yokohama"' 
                infotext="Find a new favorite cocktail or start your journey into the world of sake, our full-service bar and knowledgeable staff are there to help. With the largest collection of sake in Kitsap County and a mix of 20 different Japanese rice lagers and local and seasonal favorites on tap, there’s something for everyone."
                buttontext="View drinks"
                link="drinks"
            />
        </>
    );
}