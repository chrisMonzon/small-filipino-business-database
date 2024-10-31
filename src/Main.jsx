import CardComponent from "./Card_Component"
import Filter_Bar from "./Filter_Bar";
import SearchBarComponent from "./SearchBar_Component";
import "./Main.css";

function Main() {
    return (
        <div>
            <SearchBarComponent/>
            <div className="container">
                <Filter_Bar />
                <div className="cards">
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </div>
            </div>
        </div>
    );
}

export default Main;