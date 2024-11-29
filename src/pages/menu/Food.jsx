import { useEffect, useState } from 'react';
import menuDb from '/db/menu.json'
import './menu.css';
import MenuSection from './MenuSection';

export default function Food() {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(menuDb);
    });

    var menuSections = [];
    const sectionCount = Object.keys(menuDb.Food).length;

    // Populate menu sections
    for (let i = 0; i < sectionCount; i++)
    {
        // Get heading and items data for each section, then push to the menu array
        menuSections.push(<MenuSection heading={menuDb.Food[i].heading} items={menuDb.Food[i].items} />);
    }

    return (
        <>
            <h2 id="foodMenu-title">Food</h2>
            <p id="foodMenu-description">Authentically Japanese and positively delicious, our izakaya serves plenty of delectable, customizable plates. Whether you need a small ramen bowl for a snack or a hearty japanese curry to get you on your way, we have plates of all sizes to suit all tastes.</p>
            <section id="foodMenu">
                {menuSections}
            </section>
        </>
    );
}