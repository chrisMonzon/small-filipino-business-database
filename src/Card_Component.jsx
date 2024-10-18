import "./Card_Component.css";

function CardComponent() {
    return (
        <div className="card">
            <h1>
                Business Name
            </h1>
            <img src="https://www.psauiuc.org/wp-content/uploads/2024/09/Logo-no-words-no-circle-300x300.png" alt="Philippine Student Association Logo"/>
            <p>
                Description of Business
            </p>
            <p>
                Rating of Business
            </p>
        </div>
    );
}

export default CardComponent;