import { Beer, FilterOptions } from "../../types/types";
import CardList from "../CardList/CardList";
import "./Main.scss";

type MainProps = {
    beers: Beer[];
    searchTerm: string;
    filterOptions: FilterOptions;
};

const Main = ({ beers, searchTerm, filterOptions }: MainProps) => {
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
            <div className="intro-text">
                <h2 className="intro-text__heading">
                    Welcome to the BrewDog’s Beer Collection!
                </h2>
                <p className="intro-text__description">
                    Explore the{" "}
                    <span className="intro-text__span">
                        wide range of craft beers
                    </span>{" "}
                    from around the world.
                </p>
                <p className="intro-text__beer-count">
                    Beer Collection: {filteredBeers.length}
                </p>
            </div>
            <CardList beers={filteredBeers} />
        </main>
    );
};

export default Main;
