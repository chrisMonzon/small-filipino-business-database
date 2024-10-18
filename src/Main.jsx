import CardComponent from "./Card_Component"
import Filter_Bar from "./Filter_Bar";
import SearchBarComponent from "./SearchBar_Component";

function Main() {
    return (
        <div>
            <SearchBarComponent/>
            <CardComponent/>
            <Filter_Bar/>
        </div>
    );
}

export default Main;