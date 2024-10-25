import './Header.css';

function Header() {
    return (
        
        //what ever is written in here displays as the header of the website
        <header>
            <div className='head'>
            {/* replace with link to actual home page */}
            <a href="https://www.google.com/"><img className='header_image' src="https://www.psauiuc.org/wp-content/uploads/2024/09/Logo-no-words-no-circle-300x300.png" alt="Philippine Student Association Logo"/></a>
                <h1 className="site_name">
                    Small Filipino Business Database
                </h1>
                <button className="logInButton"> </button>
            </div>
        </header>
    );
}

export default Header;