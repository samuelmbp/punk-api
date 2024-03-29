import { Beer } from "../../types/types";
import Card from "../Card/Card";
import "./CardList.scss";

type CardListProps = {
    beers: Beer[];
};

const CardList = ({ beers }: CardListProps) => {
    return (
        <section className="cards">
            {beers &&
                beers.map((beer) => (
                    <Card
                        key={beer.id}
                        image={beer.image_url}
                        name={beer.name}
                        tagline={beer.tagline}
                        description={beer.description}
                    />
                ))}
        </section>
    );
};

export default CardList;
