import "./Card_Component.css";

function CardComponent() {
    return (
        <button className="card">
            <div>
                <img className='card_image' src="https://www.psauiuc.org/wp-content/uploads/2024/09/Logo-no-words-no-circle-300x300.png" alt="Philippine Student Association Logo" style={{width: '100%'}}/>
                <button class="settings-button" aria-label="Settings">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </button>
                <div>
                    <h1 className="business_name">
                        Business Name
                    </h1>
                </div>
                <div>
                    <p className="business_description">
                        Description of Business
                    </p>
                </div>
                <div>
                    <p className="business_rating">
                        Rating of Business
                    </p>
                </div>
            </div>
        </button>
    );
}

export default CardComponent;