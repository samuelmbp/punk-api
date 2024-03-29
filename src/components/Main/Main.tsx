import beers from "../../data/beers";
import { FilterOptions } from "../../types/types";
import CardList from "../CardList/CardList";
import "./Main.scss";

type MainProps = {
    searchTerm: string;
    filterOptions: FilterOptions;
};

const Main = ({ searchTerm, filterOptions }: MainProps) => {
    const filteredBeers = beers.filter((beer) => {
        const matchesSearchTerm = beer.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const passesAbvFilter = !filterOptions.abv || beer.abv > 6;

        const passesBrewedBefore2010Filter =
            !filterOptions.brewedBefore2010 ||
            parseInt(beer.first_brewed.split("/")[1]) < 2010;

        const passesPhFilter = !filterOptions.ph || beer.ph < 4;

        return (
            matchesSearchTerm &&
            passesAbvFilter &&
            passesBrewedBefore2010Filter &&
            passesPhFilter
        );
    });
    return (
        <main className="main-container">
            <CardList beers={filteredBeers} />
        </main>
    );
};

export default Main;
