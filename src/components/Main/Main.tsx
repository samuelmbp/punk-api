import beers from "../../data/beers";
import CardList from "../CardList/CardList";
import "./Main.scss";

type MainProps = {
    searchTerm: string;
};

const Main = ({ searchTerm }: MainProps) => {
    const filteredBeers = beers.filter((beer) =>
        beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <main className="main-container">
            <CardList beers={filteredBeers} />
        </main>
    );
};

export default Main;
