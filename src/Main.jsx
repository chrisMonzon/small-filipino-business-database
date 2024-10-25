import CardComponent from "./Card_Component"
import Filter_Bar from "./Filter_Bar";
import SearchBarComponent from "./SearchBar_Component";

function Main() {
    return (
        <div>
            <SearchBarComponent/>
            <div className="cards">
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </div>
            <Filter_Bar/>
        </div>
    );
}

export default Main;