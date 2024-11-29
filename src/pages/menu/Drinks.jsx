import { useEffect, useState } from 'react';
import menuDb from '/db/menu.json'
import './menu.css';
import MenuSection from './MenuSection';

export default function Drinks() {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(menuDb);
    });

    var menuSections = [];
    const sectionCount = Object.keys(menuDb.Drinks).length;

    // Populate menu sections
    for (let i = 0; i < sectionCount; i++)
    {
        // Get heading and items data for each section, then push to the menu array
        menuSections.push(<MenuSection heading={menuDb.Drinks[i].heading} items={menuDb.Drinks[i].items} />);
    }

    return (
        <>
            <h2 id="foodMenu-title">Drinks</h2>
            <p id="foodMenu-description">Our drinks embody a late night in a Yokohama Izakaya, a refreshing drink from a Yokosuka chu-hai stand, and the countless drink vending machines found in every corner of Japan.</p>
            <section id="foodMenu">
                {menuSections}
            </section>
        </>
    );
}