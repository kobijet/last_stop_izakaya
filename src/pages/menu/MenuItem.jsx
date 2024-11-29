export default function MenuItem({name, description, featured}) {
    let styling = "menuItem";

    if (featured)
    {
        styling = styling + " featured";
    }

    return (
        <li className={styling}>
            <img className="img150" src="https://placehold.co/150"/>
            <div className="menuItem-info">
                <h4 className="menuItem-name">{name}</h4>
                <p className="menuItem-description">{description}</p>
            </div>   
        </li>
    );
}