import MenuItem from "./MenuItem";

export default function MenuSection({heading, items}) {
    
    var itemsArray = [];
    const itemsCount = Object.keys(items).length;

    // Populate items array
    for (let i = 0; i < itemsCount; i++)
    {
        // If item has name, it's an item
        if (items[i].name != null) {
            let featured = false;
            
            if (items[i].featured != null)
            {
                featured = true;
            }

            itemsArray.push(<MenuItem name={items[i].name} description={items[i].description} featured={featured} />);
        }
        // If item doesn't have a name
        else {
            // If it's not an item, format using Add-On's styling
            const addOnCount = Object.keys(items[i].AO).length;
            var addOnsArray = [];

            // Create list item for each add-on
            for (let j = 0; j < addOnCount; j++)
            {
                const addOnName = items[i].AO[j].name;
                const addOnDesc = items[i].AO[j].description;

                addOnsArray.push(
                    <li className="addOns-item">
                        <h4>{addOnName}</h4>
                        <p>{addOnDesc}</p>
                    </li>
                );
            }

            // Push whole add-ons section to end of itemsArray
            itemsArray.push(
                <>
                    <h3>Add-ons: </h3>
                    <div className="addOns-section">
                        <ul>{addOnsArray}</ul>
                    </div>
                </>
            );
        }
    }
    
    
    return (
        <>
            <h3>{heading}:</h3>
            <section>
            <ul>
                {itemsArray}
            </ul>
            </section>
        </>
    );
}